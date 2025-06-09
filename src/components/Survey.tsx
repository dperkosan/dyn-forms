"use client";

import { useCallback } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

export default function SurveyComponent({
  surveyJson,
  locale = "default",
}: {
  surveyJson: unknown;
  locale?: string;
}) {
  const survey = new Model(surveyJson);
  survey.locale = locale;

  const alertResults = useCallback((survey: Model) => {
    const results = JSON.stringify(survey.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}
