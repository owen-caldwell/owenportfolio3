import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="text-[#242424] dark:text-neutral-200 mt-4 md:mt-0 md:top-8 font-[family-name:var(--font-geist-sans)] md:sticky pb-20">
      <Link className="flex items-center gap-2" href="/">
        <Image
          aria-hidden
          src="/ellipse.svg"
          alt="Ellipse icon"
          width={10}
          height={10}
          className=""
        />
        <span className="text-sm">owen-caldwell</span>
      </Link>
    </header>
  );
}
