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

  const [newQuestionTitle, setNewQuestionTitle] = useState("");

  const addTextQuestion = () => {
    if (!newQuestionTitle.trim()) return;

    setSurveyJSON((prev) => {
      const elements = [...prev.pages[0].elements];
      const name = `q${elements.length + 1}`;
      elements.push({ type: "text", name, title: newQuestionTitle });
      return { ...prev, pages: [{ ...prev.pages[0], elements }] };
    });

    setNewQuestionTitle(""); // clear input
  };

  return (
    <div className="flex p-4 gap-8">
      <div className="w-1/3">
        <h2 className="text-lg font-semibold mb-2">Add a New Text Question</h2>
        <input
          type="text"
          placeholder="Enter question title..."
          value={newQuestionTitle}
          onChange={(e) => setNewQuestionTitle(e.target.value)}
          className="w-full border border-slate-300 rounded-md px-3 py-2 mb-3"
        />
        <button
          onClick={addTextQuestion}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          ➕ Add Text Question
        </button>

        <div className="mt-6">
          <h3 className="text-sm font-medium mb-2">Current JSON</h3>
          <div className="bg-slate-100 border border-slate-300 text-black rounded-md p-3 max-h-72 overflow-auto text-sm whitespace-pre-wrap">
            <code>{JSON.stringify(surveyJSON, null, 2)}</code>
          </div>
        </div>
      </div>

      <div className="flex-1 border-l pl-8">
        <Survey.Survey model={new Survey.Model(surveyJSON)} />
      </div>
    </div>
  );
}

export default FormBuilder;
