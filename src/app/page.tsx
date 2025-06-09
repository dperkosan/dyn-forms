"use client";

import Link from "next/link";

const forms = [
  { id: "evaluacioni_upitnik", title: "Evaluacioni upitnik" },
  {
    id: "evaluacioni_upitnik_za_zaposlenog",
    title: "Evaluacioni upitnik za zaposlenog",
  },
  {
    id: "evaluacioni_upitnik_za_mentora",
    title: "Evaluacioni upitnik za mentora",
  },
  { id: "anketa_poslodavca", title: "Anketa poslodavca" },
  {
    id: "anketa_zadovoljstva_korisnika",
    title: "⚠️Anketa zadovoljstva korisnika⚠️ - treba nam pojasnjenje",
  },
  {
    id: "upitnik_za_anketara",
    title: "Upitnik za anketara",
  },
  {
    id: "dodatak_upitnniku_za_poslodavce",
    title: "Dodatak upitniku za poslodavce",
  },
  {
    id: "upitnik_prognoze",
    title: "Upitnik prognoze",
  },
  {
    id: "upitnik_samoprocene",
    title: "Upitnik samoprocene",
  },
];

export default function HomePage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-semibold">GIZ primeri formi</h1>
      <ul className="list-disc pl-6 space-y-2">
        {forms.map((form) => (
          <li key={form.id}>
            <Link
              href={`/forms/${form.id}`}
              className="text-blue-600 hover:underline"
            >
              📄 {form.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
