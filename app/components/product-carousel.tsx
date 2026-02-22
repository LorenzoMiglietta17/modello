import Image from "next/image";

const products = [
  { src: "/img/prodotto1.jpeg", alt: "Pollo intero arrosto Rosto's" },
  { src: "/img/prodotto3.jpeg", alt: "Mezzo pollo arrosto Rosto's" },
  { src: "/img/prodotto4.jpeg", alt: "Alette di pollo Rosto's" },
  { src: "/img/prodotto5-new.jpeg", alt: "Nuggets di pollo Rosto's" },
];

export default function ProductCarousel() {
  return (
    <section className="rounded-3xl border border-(--brown) bg-(--brown)/15 p-3 sm:p-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.src}
            className="group relative overflow-hidden rounded-2xl border border-(--sand)/25 bg-(--black)/35 transition-colors hover:border-(--sand)/45"
          >
            <div className="relative aspect-4/3 w-full p-3 sm:p-4">
              <Image
                src={product.src}
                alt={product.alt}
                fill
                className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-(--sand)/20 bg-(--black)/30 p-4 sm:p-5">
        <p className="text-sm leading-7 text-(--sand)/90 sm:text-base">
          Da Rosto&apos;s prepariamo ogni piatto al momento con cottura lenta al forno, ingredienti selezionati e marinature
          artigianali per un gusto autentico, croccante fuori e succoso dentro.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-2 rounded-xl border border-(--sand)/20 bg-(--black)/35 px-3 py-2 text-sm text-(--sand)">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M7 13.5A4.5 4.5 0 0 1 11.5 9H14a3 3 0 1 1 0 6h-3" />
              <path d="M6 20h12" />
            </svg>
            Cotto al momento
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-(--sand)/20 bg-(--black)/35 px-3 py-2 text-sm text-(--sand)">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 21s7-4.2 7-10a7 7 0 1 0-14 0c0 5.8 7 10 7 10Z" />
              <path d="M12 8v6" />
            </svg>
            Ingredienti naturali
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-(--sand)/20 bg-(--black)/35 px-3 py-2 text-sm text-(--sand)">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 14a8 8 0 1 0 16 0H4Z" />
              <path d="M9 10c0-1.6 1-2.9 2.4-3.2M13 10c0-1.3.8-2.4 2-2.9" />
            </svg>
            Marinature artigianali
          </div>
        </div>
      </div>
    </section>
  );
}
