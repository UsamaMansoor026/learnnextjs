import prisma from "@/app/utils/db";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

async function getData(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: { id: id },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

const SinglePost = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = await getData(id);
  return (
    <section className="max-w-4xl mx-auto my-5 py-8 px-4">
      <Link
        href="/"
        className="border border-chart-2 px-5 py-1.5 mb-7 block w-fit rounded transition-all hover:!bg-chart-2 hover:text-white"
      >
        Back to blogs
      </Link>

      {/* Author Details */}
      <div className="flex items-center justify-end gap-2">
        <div className="relative size-10 overflow-hidden rounded-full">
          <Image
            src={data.authorImage}
            alt={data.authorName}
            fill
            className="object-cover"
          />
        </div>
        <h4 className="text-lg font-semibold text-gray-700">
          {data.authorName}
        </h4>
      </div>

      {/* Blog image */}
      <div className="w-full h-full aspect-square md:aspect-auto md:h-[450px] relative mt-4">
        <Image
          src={data?.imageUrl}
          alt="blog post"
          fill
          priority
          className="object-cover rounded-lg"
        />
      </div>

      {/* Blog posted date */}
      <p className="my-4 text-gray-500 text-sm">
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(data.createdAt)}
      </p>

      {/* Content */}
      <div>
        <h1 className="text-xl md:text-3xl font-bold tracking-tight mb-4">
          {data.title}
        </h1>

        <Card>
          <CardContent>
            <p className="text-gray-700 leading-6">{data.content}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SinglePost;
