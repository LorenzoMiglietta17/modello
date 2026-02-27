"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [feedback, setFeedback] = useState<string>("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFeedback("Compila tutti i campi prima di inviare.");
      return;
    }

    const emailIsValid = /^\S+@\S+\.\S+$/.test(form.email);
    if (!emailIsValid) {
      setFeedback("Inserisci un indirizzo email valido.");
      return;
    }

    setFeedback("Messaggio inviato. Ti ricontatteremo presto.");
    setForm(initialState);
  };

  return (
    <form onSubmit={onSubmit} className="mt-5 grid gap-3">
      <input
        type="text"
        placeholder="Nome"
        value={form.name}
        onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-400"
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-400"
      />
      <textarea
        placeholder="Messaggio"
        value={form.message}
        onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
        rows={4}
        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-400"
      />
      <button type="submit" className="button-primary w-fit">
        Invia richiesta
      </button>
      {feedback ? <p className="text-sm text-slate-600">{feedback}</p> : null}
    </form>
  );
}
