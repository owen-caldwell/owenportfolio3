import { BlogPosts } from "app/components/blogs";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <BlogPosts />
    </section>
  );
}
