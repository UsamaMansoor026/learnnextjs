import Image from "next/image";
import Link from "next/link";
import React from "react";

interface blogPostCardProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

const BlogPostCard = ({ data }: blogPostCardProps) => {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-chart-2 bg-white shdow-md shadow-chart-3 transition-all hover:shadow-lg">
      <Link href={`/post/${data.id}`} className="block w-full h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h3 className="mb-2 text-lg font-medium text-gray-900 leading-5 min-h-[45px]">
            {data.title}
          </h3>

          <p className="mb-4 text-sm text-gray-600 line-clamp-2 leading-[15px]">
            {data.content}
          </p>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <div className="relative size-8 overflow-hidden rounded-full">
                <Image
                  src={data.authorImage}
                  alt={data.authorName}
                  fill
                  className="object-cover"
                />
              </div>
              <h5 className="text-sm font-semibold text-gray-700">
                {data.authorName}
              </h5>
            </div>

            <time className="text-xs text-gray-500">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(data.createdAt)}
            </time>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogPostCard;
