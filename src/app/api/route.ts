import { db } from "@/db";

export async function GET() {
    return new Response("OK", { status: 200 });
}
export async function POST(request: Request) {
const { slug, title, category } = await request.json();

try {
    const existingPost = await db.blog.findUnique({
        where: {slug: slug}
    })
if (existingPost) {
    await db.blog.update({
        where: {slug: slug},
        data: {
            view_count: {increment: 1},
        },
    })
}else{
    await db.blog.create({
        data: {
            slug: slug,
            title: title,
            category: category
        }
    })
}


}catch (error) {
    console.error("Error Updating page veiw", error);
    return new Response("Failed to post to db", { status: 500 });
}
}