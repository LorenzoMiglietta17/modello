import Link from "next/link";
import Image from "next/image";
import BusinessStatus from "./components/business-status";
import SiteHeader from "./components/site-header";

export default function HomePage() {
  return (
    <div className="site-shell min-h-screen text-slate-900">
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl px-6 py-14">
        <section className="surface-card fade-up grid gap-6 p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Sito Vetrina Demo</p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">La tua attività, presentata in modo chiaro e moderno</h1>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Homepage arricchita con sezioni di presentazione, call-to-action e anteprime delle pagine principali.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/chi-siamo" className="button-primary">Scopri chi siamo</Link>
              <Link href="/contatti" className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Richiedi informazioni
              </Link>
            </div>
            <BusinessStatus />
          </div>
          <Image
            src="/img/demo-hero.svg"
            alt="Immagine demo copertina"
            width={1600}
            height={1000}
            className="float-soft h-64 w-full rounded-2xl border border-slate-200 object-cover"
          />
        </section>

        <section className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            { title: "Chi siamo", text: "Storia, valori e visione del progetto.", href: "/chi-siamo" },
            { title: "Orari", text: "Giorni e fasce orarie sempre aggiornate.", href: "/orari" },
            { title: "Contatti", text: "Recapiti e form richiesta rapida.", href: "/contatti" },
          ].map((item) => (
            <article key={item.title} className="surface-card card-lift fade-up p-6">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-slate-600">{item.text}</p>
              <Link href={item.href} className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-900">
                Vai alla pagina →
              </Link>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-6 sm:grid-cols-2">
          <Image
            src="/img/demo-service.svg"
            alt="Immagine demo servizi"
            width={900}
            height={700}
            className="fade-up h-60 w-full rounded-2xl border border-slate-200 object-cover"
          />
          <Image
            src="/img/demo-menu.svg"
            alt="Immagine demo menu"
            width={900}
            height={700}
            className="fade-up h-60 w-full rounded-2xl border border-slate-200 object-cover"
          />
        </section>

        <section className="mt-8 surface-card fade-up p-7">
          <h2 className="text-2xl font-semibold">Perché scegliere questo template</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-3xl font-bold text-blue-700">+120</p>
              <p className="mt-1 text-sm text-slate-600">Clienti gestibili al mese (esempio)</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-3xl font-bold text-blue-700">24/7</p>
              <p className="mt-1 text-sm text-slate-600">Presenza online sempre attiva</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-3xl font-bold text-blue-700">3 min</p>
              <p className="mt-1 text-sm text-slate-600">Per aggiornare testi e contenuti</p>
            </div>
          </div>
        </section>

        <section className="mt-8 surface-card fade-up p-7">
          <h2 className="text-2xl font-semibold">Inizia ora</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Hai già una struttura completa: homepage ricca, pagine dedicate e menu con ricerca. Personalizza i testi e sei pronto a pubblicare.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/menu" className="button-primary">Apri il menu demo</Link>
            <Link href="/contatti" className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Vai ai contatti
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}