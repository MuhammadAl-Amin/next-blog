import { categories } from "@/lib/placeholder-data";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const TopCategory = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-12">
      {categories.map((category) => {
        return (
          <Button
            key={category}
            variant={"secondary"}
            className="hover:scale-110 transition-all"
            asChild
          >
            <Link href={`/blog/${category}`}>{category}</Link>
          </Button>
        );
      })}
    </div>
  );
};

export default TopCategory;
