import LatestPost from "@/components/home/latest-post";
import MainNav from "@/components/mainNav";
import PopularPost from "@/components/popular-post";
import TopCategory from "@/components/top-category";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="sticky top-0 z-50 bg-gray-100 dark:bg-gray-900">
    <MainNav/>
    </div>
    <main className="container mx-auto flex flex-col md:flex-row justify-evenly mt-12">
    <div>
      <h2 className="text-4xl lg:text-5xl inline-block font-heading tracking-tighter ">Recently Published</h2>
      <LatestPost></LatestPost>
    </div>
    <div>
      <h2 className="font-extrabold static">TOP CATEGORIES</h2>
      <TopCategory/>
      <div className=" sticky top-20">
      <h2 className="font-extrabold">POPULAR POSTS</h2>
      <PopularPost/>
      </div>
    </div>
    </main>
    </>
    
  );
}
