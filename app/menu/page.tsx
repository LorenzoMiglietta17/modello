import Image from "next/image";

type SectionIconName =
  | "chicken"
  | "fried"
  | "sides"
  | "sauces"
  | "drinks"
  | "box"
  | "family"
  | "party"
  | "mega";

type MenuItem = {
  name: string;
  price: string;
};

type MenuSection = {
  title: string;
  icon: SectionIconName;
  items?: MenuItem[];
};

function SectionIcon({ name }: { name: SectionIconName }) {
  if (name === "chicken") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="7" cy="17" r="3" />
        <circle cx="18" cy="17" r="2" />
        <path d="M10 17c4 0 8-2.5 8-6a4 4 0 0 0-4-4c-2.5 0-4.5 1.8-5.3 4.2" />
      </svg>
    );
  }

  if (name === "fried") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 20h14l-1.4-7H6.4L5 20Z" />
        <path d="M7.2 13V6.5m3.4 6.5V5.5m3.4 7.5V6.8m3 6.2V8" />
        <path d="M6 13h12" />
      </svg>
    );
  }

  if (name === "sides") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 14a8 8 0 1 0 16 0H4Z" />
        <path d="M9 10c0-1.7 1-3 2.5-3M13 10c0-1.5 1-2.8 2.2-3.2" />
      </svg>
    );
  }

  if (name === "sauces") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 14h14l-1 6H6l-1-6Z" />
        <path d="M8 14c0-2 1.5-4 4-4s4 2 4 4" />
      </svg>
    );
  }

  if (name === "drinks") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 4h10l-1.5 16h-7L7 4Z" />
        <path d="M10 9h4M13 4l3-2" />
      </svg>
    );
  }

  if (name === "box") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m4 8 8-4 8 4-8 4-8-4Zm0 0v8l8 4 8-4V8" />
      </svg>
    );
  }

  if (name === "family") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="8" cy="8" r="2" />
        <circle cx="16" cy="8" r="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M4 19c0-2.2 1.8-4 4-4m12 4c0-2.2-1.8-4-4-4m-6 4c0-2.8 2.2-5 5-5" />
      </svg>
    );
  }

  if (name === "party") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m5 19 6-2 8-8-4-4-8 8-2 6Z" />
        <path d="m14 6 4 4M4 4l2 1m0 6 2-1m10 9 1 2m3-5 2 1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3 14.5 9l6.5.5-5 4.3 1.5 6.2L12 16.8 6.5 20l1.5-6.2-5-4.3L9.5 9 12 3Z" />
    </svg>
  );
}

export default function MenuPage() {
  const menuSections: MenuSection[] = [
    {
      title: "I nostri polli",
      icon: "chicken",
      items: [
        { name: "Pollo intero", price: "12,90 €" },
        { name: "1/2 pollo", price: "6,90 €" },
        { name: "1/4 pollo", price: "4,90 €" },
      ],
    },
    {
      title: "Fritti",
      icon: "fried",
      items: [
        { name: "Nuggets 6 pezzi", price: "6,50 €" },
        { name: "Nuggets 9 pezzi (Mediterraneo o piccante)", price: "9,00 €" },
        { name: "Alette 3 pezzi", price: "4,50 €" },
        { name: "Alette 6 pezzi", price: "11,50 €" },
      ],
    },
    { title: "Contorni", 
      icon: "sides",
      items: [
        { name: "Riso Regular", price: "3,50 €" },
        { name: "Patate Arrosto Regular/Large", price: "3,50 €" },
        { name: "Verdure Ripassate Regular/Large", price: "4,00 €" },
        { name: "Carciofi alla Romana Regular/Large", price: "5,50 €" },
        { name: "Funghi Trifolati Regular/Large", price: "4,50 €" },
      ],
    },
    { title: "Salse", 
      icon: "sauces",
      items: [
        { name: "Rosto's Signature ", price: "1,00 €" },
        { name: "Salsa Piccante", price: "0,50 €" },
        { name: "Salsa Barbecue", price: "0,50 €" },
        { name: "Maionese", price: "0,50 €" },
        { name: "Senape", price: "0,50 €" },
      ],
    },
    { title: "Bevande",
      icon: "drinks",
      items: [
        { name: "Acqua", price: "1,00 €" },
        { name: "Soft Drink (Coca , Sprite, Fanta)", price: "2,50 €" },
      ],
    },
    { title: "Rosto's Box", 
      icon: "box",
      items: [
        { name: "1/4 Pollo + Contorno Regular", price: "7,90 €" },
        { name: "1/4 Pollo + Contorno Large", price: "9,50 €" },
        { name: "1/2 Pollo + Contorno Regular", price: "10,90 €" },
        { name: "1/2 Pollo + Contorno Large", price: "12,90 €" },
      ],
    },
    { title: "Family Combo",
      icon: "family",
      items: [
        { name: "Pollo Intero + 2 Contorni Regular ", price: "18,90 €" },
        { name: "Pollo Intero + 2 Contorni Large ", price: "21,90 €" },
        { name: "Pollo Intero + 3 Contorni Regular ", price: "22,90 €" },
        { name: "2 Polli Interi + 4 Contorni Regular ", price: "36,90 €" },
      ],
    },
    { title: "Party Combo",
      icon: "party",
      items: [ 
        { name: "Pollo Intero + 3 Contorni Regular ", price: "22,90 €" },
        { name: "Pollo Intero + 3 Contorni Large ", price: "26,90 €" },
      ]
    }, 
    { title: "Mega Party Combo",
      icon: "mega" ,
       items: [
        { name: "2 Polli Interi + 4 Contorni Regular ", price: "36,90 €" },
        { name: "2 Polli Interi + 4 Contorni Large ", price: "42,90 €" },
       ]
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
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
    {menuSections.map((section) => (
      <article
      key={section.title}
      className="h-full rounded-2xl border border-(--brown) bg-(--brown)/20 p-6"
      >
      <h2 className="flex items-center gap-3 text-xl font-semibold text-white">
      <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--brown)/80 bg-(--black)/40">
      <SectionIcon name={section.icon} />
      </span>
      <span>{section.title}</span>
      </h2>
      {section.items && (
        <ul className="mt-4 space-y-2 text-sm text-(--sand)/90">
        {section.items.map((item) => (
          <li key={item.name} className="flex items-center justify-between gap-4">
          <span>{item.name}</span>
          <span className="shrink-0 whitespace-nowrap font-semibold text-white">{item.price}</span>
          </li>
        ))}
        </ul>
      )}
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
