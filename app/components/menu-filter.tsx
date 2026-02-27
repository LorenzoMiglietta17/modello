"use client";

import { useMemo, useState } from "react";

type MenuItem = {
  name: string;
  note: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

type MenuFilterProps = {
  sections: MenuSection[];
};

export default function MenuFilter({ sections }: MenuFilterProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return sections;
    }

    return sections
      .map((section) => ({
        ...section,
        items: section.items.filter(
          (item) =>
            item.name.toLowerCase().includes(normalizedQuery) ||
            item.note.toLowerCase().includes(normalizedQuery),
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [query, sections]);

  return (
    <>
      <div className="mt-8 surface-card p-4">
        <label className="text-sm font-medium text-slate-700" htmlFor="menu-search">
          Cerca nel menu
        </label>
        <input
          id="menu-search"
          type="text"
          placeholder="Es. Voce 2"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-400"
        />
      </div>

      <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((section) => (
          <article key={section.title} className="surface-card card-lift fade-up p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-blue-700" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 6h14M5 12h14M5 18h14" />
              </svg>
              {section.title}
            </h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {section.items.map((item) => (
                <li key={`${section.title}-${item.name}`}>
                  <p className="font-medium text-slate-800">{item.name}</p>
                  <p className="text-sm">{item.note}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {filtered.length === 0 ? (
        <p className="mt-6 text-sm text-slate-600">Nessun risultato per la ricerca corrente.</p>
      ) : null}
    </>
  );
}
