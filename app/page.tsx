import React from "react";
import prisma from "./utils/db";

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

const Home = async () => {
  const data = await getPosts();
  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold tracking-tight mb-8">
        Latest Posts:
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gp-4">
        {data?.length > 0 &&
          data.map((item: any) => (
            <article key={item.title}>{item.title}</article>
          ))}
      </div>
    </div>
  );
};

export default Home;
