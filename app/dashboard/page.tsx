import Link from "next/link";
import React, { Suspense } from "react";
import prisma from "../utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import BlogPostCard from "@/components/BlogPostCard";

async function getData(userId: string | undefined) {
  const data = await prisma.blogPost.findMany({
    where: { authorId: userId },
    orderBy: { createdAt: "desc" },
  });

  return data;
}

const Dashboard = () => {
  return (
    <div className=" mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-xl">Your Blog Posts</h2>

        <Link
          href="/dashboard/create"
          className="!bg-chart-3 text-white px-10 py-2.5 rounded-2xl duration-200 hover:!bg-chart-2"
        >
          Create Blog
        </Link>
      </div>

      <Suspense
        fallback={
          <p className="text-center my-16 text-lg text-gray-600">
            Please Wait..... posts are loading
          </p>
        }
      >
        <GetPosts />
      </Suspense>
    </div>
  );
};

export default Dashboard;

async function GetPosts() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getData(user?.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data?.length > 0 &&
        data.map((item) => <BlogPostCard key={item.id} data={item} />)}
    </div>
  );
}
