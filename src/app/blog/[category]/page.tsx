import React from "react";
import { getBlogPosts } from "../utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import CardCategory from "@/components/card-category";
import Header from "@/components/header";

export async function generateStaticParams() {
  let posts = getBlogPosts();
  return posts.map((post) => ({
    category: post.metadata.category,
  }));
}
const Page = ({ params }: { params: { category: string } }) => {
  let posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category
  );

  if (!posts.length) {
    notFound();
  }
  return (
    <>
      <Header>
        <div className="container">
        <h3 className="title semi-bold mt-4 uppercase text-2xl">{posts[0]?.metadata.category}</h3>
        </div>
      </Header>
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publicAt) > new Date(b.metadata.publicAt)
              ) {
                return -1;
              }
              {
                return 1;
              }
            })
            .map((post) => (
              <Link
                href={`/blog/${post.metadata.category}/${post.slug}`}
                key={post.slug}
              >
                <CardCategory
                  title={post.metadata.title}
                  summary={post.metadata.summary}
                  date={post.metadata.publicAt}
                />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Page;
