import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/about/#contact" },
];

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/public-ai-logo.png"
            alt="Public AI USA"
            width={150}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <nav className="flex items-center gap-6">
          {nav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {label}
            </Link>
          ))}
          <span
            className="cursor-not-allowed text-sm text-gray-400"
            aria-disabled="true"
          >
            Log in
          </span>
        </nav>
      </div>
    </header>
  );
}
