import Link from "next/link";
import Image from "next/image";
import MenuFilter from "../components/menu-filter";
import SiteHeader from "../components/site-header";

const menuSections = [
  {
    title: "Categoria 1",
    items: [
      { name: "Voce 1", note: "Descrizione sintetica" },
      { name: "Voce 2", note: "Descrizione sintetica" },
    ],
  },
  {
    title: "Categoria 2",
    items: [
      { name: "Voce 3", note: "Descrizione sintetica" },
      { name: "Voce 4", note: "Descrizione sintetica" },
    ],
  },
  {
    title: "Categoria 3",
    items: [
      { name: "Voce 5", note: "Descrizione sintetica" },
      { name: "Voce 6", note: "Descrizione sintetica" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="site-shell min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl px-6 py-16">
        <header className="surface-card fade-up grid gap-6 p-8 lg:grid-cols-2 lg:items-center">
          <div>
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Pagina Esempio</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Menu / Servizi</h1>
          <p className="mt-4 text-slate-600">Struttura demo da compilare con prodotti reali, descrizioni e prezzi.</p>
          <Link href="/" className="mt-6 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-900">
            ← Torna alla home
          </Link>
          </div>
          <Image
            src="/img/demo-menu.svg"
            alt="Copertina demo menu"
            width={900}
            height={700}
            className="float-soft h-56 w-full rounded-2xl border border-slate-200 object-cover"
          />
        </header>

        <MenuFilter sections={menuSections} />
      </main>
    </div>
  );
}