export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";

const blogPosts = [
  {
    id: 1,
    title: "My first blog post",
    content: "This is my first blog, friends!",
    author: "Otabek",
  },
  {
    id: 2,
    title: "My second blog post",
    content: "This is my second blog, friends!",
    author: "Otabek",
  },
  {
    id: 3,
    title: "My second blog post",
    content: "This is my second blog, friends!",
    author: "Otabek",
  },
  {
    id: 4,
    title: "My second blog post",
    content: "This is my second blog, friends!",
    author: "Otabek",
  },
  {
    id: 5,
    title: "My second blog post",
    content: "This is my second blog, friends!",
    author: "Otabek",
  },
];

export async function GET(request: Request) {
  return NextResponse.json({
    data: blogPosts,
  });
}
