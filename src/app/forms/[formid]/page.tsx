"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

// SSR-safe SurveyJS component
const SurveyComponent = dynamic(() => import("@/components/Survey"), {
  ssr: false,
});

// Import JSON definitions
import evaluacioni_upitnik from "@/survey/evaluacioni_upitnik.json";
import evaluacioni_upitnik_za_zaposlenog from "@/survey/evaluacioni_upitnik_za_zaposlenog.json";
import evaluacioni_upitnik_za_mentora from "@/survey/evaluacioni_upitnik_za_mentora.json";
import anketa_poslodavca from "@/survey/anketa_poslodavca.json";
import upitnik_za_anketara from "@/survey/upitnik_za_anketara.json";
import dodatak_upitnniku_za_poslodavce from "@/survey/dodatak_upitnniku_za_poslodavce.json";
import upitnik_prognoze from "@/survey/upitnik_prognoze.json";
import upitnik_samoprocene from "@/survey/upitnik_samoprocene.json";
import { useState } from "react";

const formMap: Record<string, unknown> = {
  evaluacioni_upitnik: evaluacioni_upitnik,
  evaluacioni_upitnik_za_zaposlenog: evaluacioni_upitnik_za_zaposlenog,
  evaluacioni_upitnik_za_mentora: evaluacioni_upitnik_za_mentora,
  anketa_poslodavca: anketa_poslodavca,
  upitnik_za_anketara: upitnik_za_anketara,
  dodatak_upitnniku_za_poslodavce: dodatak_upitnniku_za_poslodavce,
  upitnik_prognoze: upitnik_prognoze,
  upitnik_samoprocene: upitnik_samoprocene,
};

export default function DynamicSurveyPage() {
  const params = useParams();
  const formId = params?.formid as string;
  const formJson = formMap[formId];

  const [locale, setLocale] = useState<"sr-Cyrl" | "sr-latn">("sr-Cyrl");

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value as "sr-Cyrl" | "sr-latn");
  };

  if (!formJson) {
    return <div className="p-8">🚫 Form not found.</div>;
  }

  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-end">
          <label className="text-sm font-medium mr-2">Jezik:</label>
          <select
            value={locale}
            onChange={handleLocaleChange}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="sr-Cyrl">Ћирилица</option>
            <option value="sr-latn">Latinica</option>
          </select>
        </div>
      </div>
      <SurveyComponent surveyJson={formJson} locale={locale} />;
    </>
  );
}
