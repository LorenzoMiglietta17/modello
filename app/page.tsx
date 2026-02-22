import Image from "next/image";

export default function Home() {
  return (
    <div className="rosto-unto min-h-screen bg-(--black) text-(--sand)">
      <header className="border-b border-(--brown)/80 bg-(--black)/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/img/logo.jpeg"
              alt="Logo Rosto's"
              width={56}
              height={56}
              className="h-14 w-14 object-cover"
              priority
            />
            <p className="text-xl font-bold tracking-wide">Rosto&apos;s™</p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm sm:gap-6">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="/menu" className="hover:text-white transition-colors">
              Menù
            </a>
            <a href="#chi-siamo" className="hover:text-white transition-colors">
              Chi siamo
            </a>
            <a href="#orari" className="hover:text-white transition-colors">
              Orari
            </a>
            <a href="#contatti" className="hover:text-white transition-colors">
              Contatti
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-8 sm:px-6 md:gap-16 md:py-14">
        <section className="grid items-center gap-8 rounded-3xl border border-(--brown) bg-(--brown)/20 p-6 md:grid-cols-2 md:p-10 lg:p-12">
          <div className="space-y-5">
            <p className="inline-block rounded-full bg-(--sand) px-4 py-1 text-[11px] font-bold tracking-[0.2em] text-(--brown) sm:text-xs">
              DAL FORNO ALLA TAVOLA
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Pollo arrosto croccante,
              <span className="block text-white">sapori autentici.</span>
            </h1>
            <div className="max-w-xl space-y-4 text-sm leading-7 text-(--sand)/90 sm:text-[15px] md:text-base">
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
              href="/menu"
              className="inline-flex rounded-full bg-(--sand) px-6 py-3 text-sm font-semibold text-(--black) transition hover:brightness-95"
            >
              Scopri il menù
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-(--sand)/30 bg-(--black)/40">
            <Image
              src="/img/home.jpeg"
              alt="Pollo arrosto Rosto's"
              width={900}
              height={700}
              className="h-64 w-full object-cover sm:h-72 md:h-105"
              priority
            />
          </div>
        </section>

        <section id="chi-siamo" className="rounded-3xl border border-(--brown) bg-(--brown)/15 p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Chi siamo</h2>
          <div className="mt-4 max-w-4xl space-y-6 leading-8 text-(--sand)/90">
            <p>
              ROSTO’S nasce a Roma con un’idea semplice ma ambiziosa: riportare il pollo arrosto al centro della tavola… ma fatto come si deve.
            </p>
            <p>
              Siamo cresciuti con il profumo del forno acceso, delle erbe aromatiche, del limone e delle spezie che invadono la cucina. Ma oggi vogliamo andare oltre la tradizione: prendere il meglio del passato e trasformarlo in un’esperienza moderna, veloce e irresistibile.
            </p>
            <p>
              Da ROSTO’S ogni pollo viene selezionato, marinato con cura e cotto lentamente al forno, per ottenere una carne tenera, succosa e saporita fino all’osso. Le nostre marinature non coprono il gusto: lo esaltano. Sono pensate per essere leggere, equilibrate e adatte a tutti… ma con carattere.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-white">La nostra filosofia</h3>
              <p className="mt-2">Non ci interessano scorciatoie.</p>
              <p className="mt-2">Crediamo nella qualità vera, quella che senti al primo morso:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>ingredienti semplici ma scelti bene</li>
                <li>marinature studiate e bilanciate</li>
                <li>cotture precise</li>
                <li>contorni pensati per accompagnare davvero il pollo, non per riempire</li>
              </ul>
              <p className="mt-2">Per noi il pollo non è “fast food”. È comfort food fatto con tecnica e rispetto.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">Un pollo che non è mai “solo pollo”</h3>
              <p className="mt-2">ROSTO’S è un posto dove trovi:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>pollo arrosto marinato (in più varianti)</li>
                <li>contorni autentici come patate arrosto, verdure, riso e specialità romane</li>
                <li>salse signature pensate per completare il piatto</li>
              </ul>
              <p className="mt-2">Ogni prodotto è studiato per essere buono in negozio, perfetto in delivery e ancora meglio a casa.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">Un progetto nato per Roma</h3>
              <p className="mt-2">
                Siamo un brand romano, nel cuore di Roma. Con la mentalità di chi vuole fare le cose bene e costruire qualcosa di grande.
              </p>
              <p className="mt-2">
                ROSTO’S è un laboratorio di gusto: testiamo, miglioriamo, assaggiamo, correggiamo. Perché vogliamo che ogni cliente dica sempre la stessa cosa: “Questo pollo è diverso.”
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">Benvenuto da ROSTO’S</h3>
              <p className="mt-2">
                Che tu venga per un pranzo veloce, una cena con amici o una serata da delivery, qui troverai sempre la stessa promessa: qualità, abbondanza e sapore vero.
              </p>
              <p className="mt-2 font-semibold text-white">ROSTO’S. L’arte del pollo arrosto marinato al forno.</p>
            </div>
          </div>
        </section>

        <section id="orari" className="rounded-3xl border border-(--brown) bg-(--brown)/15 p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Orari</h2>
          <div className="mt-6">
            <article className="rounded-2xl border border-(--sand)/25 bg-(--black)/30 p-5 text-center">
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">Lunedì - Domenica</h3>
              <p className="mt-3 text-base text-(--sand)/90 sm:text-lg">11:30 / 15:00</p>
              <p className="text-base text-(--sand)/90 sm:text-lg">18:30 / 22:00</p>
            </article>
          </div>
        </section>

        <section id="contatti" className="grid gap-6 rounded-3xl border border-(--sand)/35 bg-(--black) p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-2">
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-(--sand)/70">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              Indirizzo
            </p>
            <p className="mt-2 text-white">Via Giuseppe Candeo 16 Garbatella, Roma 000154</p>
          </div>
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-(--sand)/70">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 4h4l1.5 4-2.5 2.5A16 16 0 0 0 13.5 16L16 13.5 20 15v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
              </svg>
              Telefono
            </p>
            <a href="tel:+393923555502" className="mt-2 inline-block text-white transition-colors hover:text-(--sand)/80">
              +39 392 3555502
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-(--brown)/80 px-4 py-8 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-sm text-(--sand)/75 sm:flex-row">
          <p>© {new Date().getFullYear()} Rosto&apos;s™</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
            <a
              href="https://www.instagram.com/rostosofficial/?hl=it"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579974510870"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.3c0-.9.3-1.5 1.6-1.5h1.2V5.1c-.2 0-.9-.1-1.8-.1-2.8 0-4.5 1.7-4.5 4.8V11H8v3h2v7h3.5Z" />
              </svg>
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@rostosofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M14.5 4c.4 1.8 1.5 3.2 3.1 3.9.7.3 1.5.5 2.4.5v3.1a8.3 8.3 0 0 1-2.4-.4v5.7a5.8 5.8 0 1 1-5.8-5.8c.3 0 .6 0 .9.1v3.2a2.8 2.8 0 1 0 1.8 2.6V4h3Z" />
              </svg>
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
