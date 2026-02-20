import Image from "next/image";

export default function MenuPage() {
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
      name: "Combo Rosto's",
      description: "Mezzo pollo, patate arrosto al rosmarino e pane caldo.",
      price: "€15",
    },
  ];

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
            <a href="/#chi-siamo" className="hover:text-white transition-colors">
              Chi siamo
            </a>
            <a href="/#contatti" className="hover:text-white transition-colors">
              Contatti
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-8 sm:px-6 md:gap-16 md:py-14">
        <section className="space-y-6">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Il nostro menù</h1>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-(--brown) bg-(--brown)/20 p-6"
              >
                <h2 className="text-xl font-semibold text-white">{item.name}</h2>
                <p className="mt-3 text-sm leading-6 text-(--sand)/85">{item.description}</p>
                <p className="mt-5 text-lg font-bold">{item.price}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-(--brown)/80 px-4 py-8 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-sm text-(--sand)/75 sm:flex-row">
          <p>© {new Date().getFullYear()} Rosto&apos;s™</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
            <a
              href="https://instagram.com"
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
              href="https://facebook.com"
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
              href="https://tiktok.com"
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
