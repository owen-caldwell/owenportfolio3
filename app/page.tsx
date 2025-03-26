import { BlogPosts } from "app/components/blogs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid min-h-screen md:min-h-[80vh]">
      <section>
        <p className="leading-[1.5] font-[family-name:var(--font-baskerville)] text-[#242424] dark:text-neutral-100 text-lg max-w-[500px]">
          Designer and student who builds cool websites for his friends. Right
          now he's working on a final senior project and redesigning FDA
          nutrition labels for class.
        </p>
      </section>
      <section>
        <h2>Work</h2>
        <ul>
          <Link href="seniorthesis">
            <li>Senior thesis</li>
          </Link>
          <Link href="lacima">
            <li>La Cima</li>
          </Link>
          <Link href="graceanthony">
            <li>Grace Anthony</li>
          </Link>
          <Link href="finncrawford">
            <li>Finn Crawford</li>
          </Link>
          <Link href="huntermathews">
            <li>Hunter Mathews</li>
          </Link>
        </ul>
      </section>
      <section>
        <h2>Blog</h2>
        <BlogPosts />
      </section>
    </div>
  );
}
