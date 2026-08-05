export default function Footer() {
  return (
    <footer className="border-t-2 border-dashed border-border px-7 py-8 text-xs uppercase tracking-wide text-ink-faint">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <span className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/chip-mark.svg" alt="" aria-hidden="true" className="h-4 w-4 opacity-70" />
          restraddle.com
        </span>
        <span>No rake · No filler · All home game</span>
      </div>
    </footer>
  );
}
