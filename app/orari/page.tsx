import SiteHeader from "../components/site-header";
import BusinessStatus from "../components/business-status";

export default function OrariPage() {
  return (
    <div className="site-shell min-h-screen text-slate-900">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl px-6 py-14">
        <section className="surface-card fade-up p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Pagina dedicata</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Orari</h1>
          <p className="mt-4 text-slate-600">Consulta gli orari aggiornati e verifica lo stato di apertura in tempo reale.</p>
          <BusinessStatus />
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          <article className="surface-card card-lift fade-up p-6">
            <h2 className="text-lg font-semibold">Settimana</h2>
            <p className="mt-3 text-slate-600">Lunedì - Venerdì: 09:00 - 19:00</p>
          </article>
          <article className="surface-card card-lift fade-up p-6">
            <h2 className="text-lg font-semibold">Weekend</h2>
            <p className="mt-3 text-slate-600">Sabato: 09:00 - 13:00</p>
            <p className="text-slate-600">Domenica: chiuso</p>
          </article>
        </section>
      </main>
    </div>
  );
}
