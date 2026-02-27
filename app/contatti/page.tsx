import SiteHeader from "../components/site-header";
import ContactForm from "../components/contact-form";

export default function ContattiPage() {
  return (
    <div className="site-shell min-h-screen text-slate-900">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl px-6 py-14">
        <section className="surface-card fade-up p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Pagina dedicata</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Contatti</h1>
          <p className="mt-4 text-slate-600">Scrivici tramite form o usa i recapiti diretti qui sotto.</p>

          <div className="mt-5 space-y-1 text-slate-700">
            <p>Email: info@attivitaesempio.it</p>
            <p>Telefono: +39 000 0000000</p>
            <p>Indirizzo: Via Esempio 10, Città</p>
          </div>

          <ContactForm />
        </section>
      </main>
    </div>
  );
}
