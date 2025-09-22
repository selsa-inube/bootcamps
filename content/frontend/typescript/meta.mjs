import { labels } from "../../../.github/issues/labels.mjs";
const URL =
  "https://github.com/selsa-inube/bootcamp/blob/main/content/frontend/typescript";

const lectures = [
  {
    title: "TypeScript Tooling in 5 minutes",
    body: `${URL}/typescript-lec-ts-tooling-in-5-minutes.md`,
    labels: [labels.topic.typescript, labels.type.lecture],
  },
  {
    title: "TypeScript for JavaScript Programmers",
    body: `${URL}/typescript-lec-ts-for-js-programmers.md`,
    labels: [labels.topic.typescript, labels.type.lecture],
  },
  {
    title: "The Basics",
    body: `${URL}/typescript-lec-the-basics.md`,
    labels: [labels.topic.typescript, labels.type.lecture],
  },
  {
    title: "Everyday Types",
    body: `${URL}/typescript-lec-everyday-types.md`,
    labels: [labels.topic.typescript, labels.type.lecture],
  },
  {
    title: "Narrowing",
    body: `${URL}/typescript-lec-narrowing.md`,
    labels: [labels.topic.typescript, labels.type.lecture],
  },
  {
    title: "More on Functions",
    body: `${URL}/typescript-lec-more-on-functions.md`,
    labels: [labels.topic.typescript, labels.type.lecture],
  },
  {
    title: "Object Types",
    body: `${URL}/typescript-lec-object-types.md`,
    labels: [labels.topic.typescript, labels.type.lecture],
  },
  {
    title: "Generics",
    body: `${URL}/typescript-lec-generics.md`,
    labels: [labels.topic.typescript, labels.type.lecture],
  },
  {
    title: "Keyof Type Operator",
    body: `${URL}/typescript-lec-keyof-type-operator.md`,
    labels: [labels.topic.typescript, labels.type.lecture],
  },
  {
    title: "Typeof Type Operator",
    body: `${URL}/typescript-lec-typeof-type-operator.md`,
    labels: [labels.topic.typescript, labels.type.lecture],
  },
  {
    title: "Indexed Access Types",
    body: `${URL}/typescript-lec-indexed-access-types.md`,
    labels: [labels.topic.typescript, labels.type.lecture],
  },
  {
    title: "Conditional Types",
    body: `${URL}/typescript-lec-conditional-types.md`,
    labels: [labels.topic.typescript, labels.type.lecture],
  },
  {
    title: "Mapped Types",
    body: `${URL}/typescript-lec-mapped-types.md`,
    labels: [labels.topic.typescript, labels.type.lecture],
  },
  {
    title: "Template Literal Types",
    body: `${URL}/typescript-lec-template-literal-types.md`,
    labels: [labels.topic.typescript, labels.type.lecture],
  },
];

const exercises = [];

const assignments = [];

const ts = [...lectures, ...exercises, ...assignments];

export { ts };
