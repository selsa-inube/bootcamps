import { labels } from "../../../.github/issues/labels.mjs";
const URL =
  "https://github.com/selsa-inube/bootcamp/blob/main/content/frontend/react";

const lectures = [
  {
    title: "Eloquent JS - Values, Types and Operators",
    body: `${URL}/js-lec-eloquentjs-values-types-operators.md`,
    labels: [labels.topic.javascript, labels.type.lecture],
  },
];

const exercises = [];

const assignments = [];

const js = [...lectures, ...exercises, ...assignments];

export { js };
