import React, { Suspense } from "react";
import prisma from "./utils/db";
import BlogPostCard from "@/components/BlogPostCard";

async function getPosts() {
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
    },
  });

  return data;
}

const Home = () => {
  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold tracking-tight mb-8">
        Latest Posts:
      </h1>

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

export default Home;

async function GetPosts() {
  const data = await getPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data?.length > 0 &&
        data.map((item: any) => <BlogPostCard data={item} key={item.id} />)}
    </div>
  );
}
