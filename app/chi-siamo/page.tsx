import Image from "next/image";
import SiteHeader from "../components/site-header";

export default function ChiSiamoPage() {
  return (
    <div className="site-shell min-h-screen text-slate-900">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl px-6 py-14">
        <section className="surface-card fade-up grid gap-6 p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Pagina dedicata</p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Chi siamo</h1>
            <p className="mt-4 leading-7 text-slate-600">
              Questa pagina racconta identità, metodo di lavoro e valori del progetto. Usa questo spazio
              per spiegare in modo diretto perché un cliente dovrebbe scegliere la tua attività.
            </p>
          </div>
          <Image
            src="/img/demo-service.svg"
            alt="Visual pagina chi siamo"
            width={900}
            height={700}
            className="h-64 w-full rounded-2xl border border-slate-200 object-cover"
          />
        </section>

        <section className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            "Approccio pratico orientato ai risultati",
            "Comunicazione chiara e tempi definiti",
            "Esperienza pensata per il cliente finale",
          ].map((value) => (
            <article key={value} className="surface-card card-lift fade-up p-5">
              <p className="text-slate-700">{value}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
