"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Icons } from "./icons";
import Link from "next/link";

const PopularPost = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["popular-posts"],
    queryFn: async () => {
      const response = await fetch("/api/popular-posts");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
  // const mutation = useMutation({
  //   mutationFn: async () => {
  //     const response = await fetch("/api/popular-posts", {
  //       method: "POST",
  //     });
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     return response.json();
  //   },
  // })
  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return <div>{error.message}</div>;
  }
  console.log(data);
  return (
    <div className="mt-10">
      {data.map((post: { title: string; slug: string; category: string }) => (
        <Link href={`/blog/${post.category}/${post.slug}`} key={post.title} className="flex items-center gap-2 py-2 group">
          <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
          {post.title}
        </Link>
      ))}
    </div>
  );
};

export default PopularPost;

