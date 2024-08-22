import { getBlogPosts, formatDate } from "@/app/blog/utils";
import Link from "next/link";
import React from "react";

const LatestPost = () => {
  let latestPost = getBlogPosts();
  return (
    <>
      
      {latestPost
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => {
          return (
            <article className="max-w-md my-10 text-wrap" key={post.slug}>
              <Link href={`/blog/${post.metadata.category}/${post.slug}`}>
              <h2 className="font-bold py-2 leading-5 hover:text-blue-600">{post.metadata.title}</h2>
              </Link>
              <p className="py-2 leading-5">{post.metadata.summary}</p>
              <p className="text-sm text-muted-foreground">
                {
                    formatDate(post.metadata.publishedAt)
                }
              </p>
            </article>
          );
        })}
    </>
  );
};

export default LatestPost;
