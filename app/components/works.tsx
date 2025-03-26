import Link from "next/link";
import { getWorkPosts } from "app/work/utils";

export function WorkPosts() {
  let allProjects = getWorkPosts();

  return (
    <ul className="leading-8">
      {allProjects
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
