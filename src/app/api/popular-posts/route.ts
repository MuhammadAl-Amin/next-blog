import { db } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const popularPosts = await db.blog.findMany({
            orderBy: [{ view_count: 'desc' }],
            select: { slug: true, title: true, category: true },
            take: 5, // Example: fetch the top 5 most popular posts
        });
        
        return NextResponse.json(popularPosts);

        // return new Response(JSON.stringify(popularPosts), { status: 200 });
    } catch (error) {
        console.error("Error fetching popular posts", error);
        return new Response("Failed to fetch popular posts", { status: 500 });
    }
}
export async function POST(request: Request) {
    const { slug, title, category } = await request.json();

    console.log("slug, title, category", slug, title, category)

    try {
        const existingPost = await db.blog.findUnique({
            where: { slug: slug }
        })
        if (existingPost) {
            await db.blog.update({
                where: { slug: slug },
                data: {
                    view_count: { increment: 1 },
                },
            })
        } else {
            await db.blog.create({
                data: {
                    slug: slug,
                    title: title,
                    category: category
                }
            })
        }
        return NextResponse.json(existingPost)

    } catch (error) {
        console.error("Error Updating page view", error);
        return new Response("Failed to post to db", { status: 500 });
    }

}