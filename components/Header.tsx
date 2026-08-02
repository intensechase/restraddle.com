import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-dashed border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-7 py-4">
        <Link href="/" className="font-display text-xl font-black uppercase">
          re<span className="text-red-bright">straddle</span>
        </Link>
        <nav className="hidden gap-7 text-sm font-bold uppercase tracking-wide sm:flex">
          <Link href="/blog" className="text-ink-mute hover:text-gold">
            Blog
          </Link>
          <Link href="/rules" className="text-ink-mute hover:text-gold">
            Rules
          </Link>
          <Link href="/shop" className="text-ink-mute hover:text-gold">
            Shop
          </Link>
          <Link href="/about" className="text-ink-mute hover:text-gold">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
