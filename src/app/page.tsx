import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/c6ecb3b1-9b7d-46ca-b171-16b5e1cbb428-po818i.jpg",
  "https://utfs.io/f/db6947f8-ac61-4dc4-9dd6-54bf4e7bc8e7-9w7z9x.jpg",
  "https://utfs.io/f/9624e7a2-c887-4774-a2cb-5cf192709af0-dtsdi5.jpg",
  "https://utfs.io/f/0c71db51-3ed6-4400-9d79-767f1ed5ab8b-j13dcb.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))
        }
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
          <img src={image.url}/>
          </div>
        ))}
      </div>
    </main>
  );
}
