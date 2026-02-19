import Image from "next/image";

export default function Home() {
  const menuItems = [
    {
      name: "Pollo Arrosto Classico",
      description: "Pollo intero cotto lentamente al forno con erbe mediterranee.",
      price: "€18",
    },
    {
      name: "Mezzo Pollo Rustico",
      description: "Pelle croccante, carne tenera e salsa alla brace fatta in casa.",
      price: "€11",
    },
    {
      name: "Combo Rostos",
      description: "Mezzo pollo, patate arrosto al rosmarino e pane caldo.",
      price: "€15",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--sand)]">
      <header className="border-b border-[var(--brown)]/80 bg-[var(--black)]/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/img/logo.jpeg"
              alt="Logo Rosto's"
              width={42}
              height={42}
              className="h-10 w-10 rounded-full border border-[var(--sand)]/50 object-cover"
              priority
            />
            <p className="text-xl font-bold tracking-wide">ROSTOS</p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm sm:gap-6">
            <a href="#menu" className="hover:text-white transition-colors">
              Menù
            </a>
            <a href="#chi-siamo" className="hover:text-white transition-colors">
              Chi siamo
            </a>
            <a href="#contatti" className="hover:text-white transition-colors">
              Contatti
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-8 sm:px-6 md:gap-16 md:py-14">
        <section className="grid items-center gap-8 rounded-3xl border border-[var(--brown)] bg-[var(--brown)]/20 p-6 md:grid-cols-2 md:p-10 lg:p-12">
          <div className="space-y-5">
            <p className="inline-block rounded-full bg-[var(--sand)] px-4 py-1 text-[11px] font-bold tracking-[0.2em] text-[var(--brown)] sm:text-xs">
              DAL FORNO ALLA TAVOLA
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Pollo arrosto croccante,
              <span className="block text-white">sapori autentici.</span>
            </h1>
            <div className="max-w-xl space-y-4 text-sm leading-7 text-[var(--sand)]/90 sm:text-[15px] md:text-base">
              <p>
                Benvenuto da ROSTO’S.
                <br />
                Il pollo arrosto come non l’hai mai mangiato: marinato, speziato e
                cotto lentamente al forno per essere croccante fuori e succoso dentro.
              </p>
              <p>
                A Roma, nel cuore della Garbatella, portiamo in tavola una nuova idea
                di pollo: tradizione italiana, tecnica moderna e gusto vero.
                <br />
                Scegli la tua marinatura, abbina un contorno, completa con una salsa
                signature.
              </p>
              <p>ROSTO’S. L’arte del pollo arrosto marinato al forno.</p>
            </div>
            <a
              href="#menu"
              className="inline-flex rounded-full bg-[var(--sand)] px-6 py-3 text-sm font-semibold text-[var(--black)] transition hover:brightness-95"
            >
              Scopri il menù
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[var(--sand)]/30 bg-[var(--black)]/40">
            <Image
              src="/img/home.jpeg"
              alt="Pollo arrosto Rosto's"
              width={900}
              height={700}
              className="h-64 w-full object-cover sm:h-72 md:h-[420px]"
              priority
            />
          </div>
        </section>

        <section id="menu" className="space-y-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Il nostro menù</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-[var(--brown)] bg-[var(--brown)]/20 p-6"
              >
                <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--sand)]/85">{item.description}</p>
                <p className="mt-5 text-lg font-bold">{item.price}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="chi-siamo" className="rounded-3xl border border-[var(--brown)] bg-[var(--brown)]/15 p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Chi siamo</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[var(--sand)]/90">
            Siamo una rosticceria moderna con anima tradizionale. Prepariamo pollo
            arrosto ogni giorno con tagli freschi, contorni stagionali e pane appena
            sfornato. Servizio veloce in sala, asporto e prenotazioni telefoniche.
          </p>
        </section>

        <section id="contatti" className="grid gap-6 rounded-3xl border border-[var(--sand)]/35 bg-[var(--black)] p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[var(--sand)]/70">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              Indirizzo
            </p>
            <p className="mt-2 text-white">Via del Girarrosto 12, Milano</p>
          </div>
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[var(--sand)]/70">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 4h4l1.5 4-2.5 2.5A16 16 0 0 0 13.5 16L16 13.5 20 15v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
              </svg>
              Telefono
            </p>
            <p className="mt-2 text-white">+39 02 1234 5678</p>
          </div>
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[var(--sand)]/70">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v5l3 2" />
              </svg>
              Orari
            </p>
            <p className="mt-2 text-white">Lun-Dom: 12:00 - 23:00</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--brown)]/80 px-4 py-8 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[var(--sand)]/75 sm:flex-row">
          <p>© {new Date().getFullYear()} Rostos - Pollo Arrosto</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Facebook
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
