import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          Attività Esempio
        </Link>
        <nav className="flex items-center gap-5 text-sm text-slate-600">
          <Link href="/chi-siamo" className="hover:text-slate-900">Chi siamo</Link>
          <Link href="/orari" className="hover:text-slate-900">Orari</Link>
          <Link href="/contatti" className="hover:text-slate-900">Contatti</Link>
          <Link href="/menu" className="button-primary">Menu</Link>
        </nav>
      </div>
    </header>
  );
}