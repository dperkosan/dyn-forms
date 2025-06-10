"use client";

import React, { useState } from "react";
import * as Survey from "survey-react-ui";

type SurveyElement = {
  type: string;
  name: string;
  title: string;
};

type SurveyPage = {
  name: string;
  elements: SurveyElement[];
};

type SurveyJSON = {
  pages: SurveyPage[];
};

function FormBuilder() {
  const [surveyJSON, setSurveyJSON] = useState<SurveyJSON>({
    pages: [{ name: "page1", elements: [] }],
  });

  const addTextQuestion = () => {
    setSurveyJSON((prev) => {
      const elements = [...prev.pages[0].elements];
      const name = `q${elements.length + 1}`;
      elements.push({ type: "text", name, title: "New question" });
      return { ...prev, pages: [{ ...prev.pages[0], elements }] };
    });
  };

  return (
    <div className="flex">
      <div>
        <button
          onClick={addTextQuestion}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          ➕ Add Text Question
        </button>
        <pre>{JSON.stringify(surveyJSON, null, 2)}</pre>
      </div>
      <div style={{ flex: 1, marginLeft: "20px" }}>
        <Survey.Survey model={new Survey.Model(surveyJSON)} />
      </div>
    </div>
  );
}

export default FormBuilder;
