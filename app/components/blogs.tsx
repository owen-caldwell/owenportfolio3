import Link from "next/link";
import { getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <ul className="leading-8">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <li>{post.metadata.title}</li>
          </Link>
        ))}
    </ul>
  );
}
