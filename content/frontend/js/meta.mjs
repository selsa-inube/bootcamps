import { labels } from "../../../.github/issues/labels.mjs";
const URL =
  "https://github.com/selsa-inube/bootcamp/blob/main/content/frontend/js";

const lectures = [
  {
    title: "Head First JS - Getting Your Feet Wet",
    body: `${URL}/js-lec-head-first-js-getting-your-feet-wet.md`,
    labels: [labels.topic.javascript, labels.type.lecture],
  },
  {
    title: "Head First JS - Getting to Know the DOM",
    body: `${URL}/js-lec-head-first-js-getting-to-know-the-dom.md`,
    labels: [labels.topic.javascript, labels.type.lecture],
  },
  {
    title: "Head First JS - Creating Objects",
    body: `${URL}/js-lec-head-first-js-creating-objects.md`,
    labels: [labels.topic.javascript, labels.type.lecture],
  },
  {
    title: "Head First JS - A Trip to Objectville",
    body: `${URL}/js-lec-head-first-js-a-trip-to-objectville.md`,
    labels: [labels.topic.javascript, labels.type.lecture],
  },
  {
    title: "Head First JS - Arrays",
    body: `${URL}/js-lec-head-first-js-arrays.md`,
    labels: [labels.topic.javascript, labels.type.lecture],
  },
  {
    title: "Head First JS - Getting Functional",
    body: `${URL}/js-lec-head-first-js-getting-functional.md`,
    labels: [labels.topic.javascript, labels.type.lecture],
  },
  {
    title: "Head First JS - Serious Functions",
    body: `${URL}/js-lec-head-first-js-serious-functions.md`,
    labels: [labels.topic.javascript, labels.type.lecture],
  },
  {
    title: "Head First JS - Serious Types",
    body: `${URL}/js-lec-head-first-js-serious-types.md`,
    labels: [labels.topic.javascript, labels.type.lecture],
  },
  {
    title: "Head First JS - Liberated Functions",
    body: `${URL}/js-lec-head-first-js-liberated-functions.md`,
    labels: [labels.topic.javascript, labels.type.lecture],
  },
  {
    title: "Head First JS - Building an App",
    body: `${URL}/js-lec-head-first-js-building-an-app.md`,
    labels: [labels.topic.javascript, labels.type.lecture],
  },
  {
    title: "Head First JS - Getting Asynchronous",
    body: `${URL}/js-lec-head-first-js-getting-asynchronous.md`,
    labels: [labels.topic.javascript, labels.type.lecture],
  },
  {
    title: "Head First JS - Going Further",
    body: `${URL}/js-lec-head-first-js-going-further.md`,
    labels: [labels.topic.javascript, labels.type.lecture],
  },
  {
    title: "Head First JS - Leftovers",
    body: `${URL}/js-lec-head-first-js-leftovers.md`,
    labels: [labels.topic.javascript, labels.type.lecture],
  },
];

const exercises = [
  {
    title: "freeCodeCamp - Basic JavaScript",
    body: `${URL}/js-ex-freecodecamp-basic-js.md`,
    labels: [labels.topic.javascript, labels.type.exercise],
  },
  {
    title: "freeCodeCamp - ES6",
    body: `${URL}/js-ex-freecodecamp-es6.md`,
    labels: [labels.topic.javascript, labels.type.exercise],
  },
  {
    title: "freeCodeCamp - Debugging",
    body: `${URL}/js-ex-freecodecamp-debugging.md`,
    labels: [labels.topic.javascript, labels.type.exercise],
  },
  {
    title: "freeCodeCamp - Basic Data Structures",
    body: `${URL}/js-ex-freecodecamp-basic-data-structures.md`,
    labels: [labels.topic.javascript, labels.type.exercise],
  },
  {
    title: "freeCodeCamp - Basic Algorithm Scripting",
    body: `${URL}/js-ex-freecodecamp-basic-algorithm-scripting.md`,
    labels: [labels.topic.javascript, labels.type.exercise],
  },
  {
    title: "freeCodeCamp - Functional Programming",
    body: `${URL}/js-ex-freecodecamp-functional-programming.md`,
    labels: [labels.topic.javascript, labels.type.exercise],
  },
  {
    title: "freeCodeCamp - Intermediate Algorithm Scripting",
    body: `${URL}/js-ex-freecodecamp-intermediate-algorithm-scripting.md`,
    labels: [labels.topic.javascript, labels.type.exercise],
  },
  {
    title: "freeCodeCamp - JavaScript Algorithms and Data Structures Projects",
    body: `${URL}/js-ex-freecodecamp-projects.md`,
    labels: [labels.topic.javascript, labels.type.exercise],
  },
  {
    title: "freeCodeCamp - Asynchronous Javascript",
    body: `${URL}/js-ex-freecodecamp-asynchronous-javascript.md`,
    labels: [labels.topic.javascript, labels.type.exercise],
  },
  {
    title: "freeCodeCamp - Dates",
    body: `${URL}/js-ex-freecodecamp-dates.md`,
    labels: [labels.topic.javascript, labels.type.exercise],
  },
  {
    title: "freeCodeCamp - DOM Manipulation and Events",
    body: `${URL}/js-ex-freecodecamp-dom-manipulation-and-events.md`,
    labels: [labels.topic.javascript, labels.type.exercise],
  },
  {
    title: "freeCodeCamp - Form Validation",
    body: `${URL}/js-ex-freecodecamp-form-validation.md`,
    labels: [labels.topic.javascript, labels.type.exercise],
  },
  {
    title: "freeCodeCamp - localStorage and CRUD",
    body: `${URL}/js-ex-freecodecamp-local-storage-and-crud.md`,
    labels: [labels.topic.javascript, labels.type.exercise],
  },
];

const assignments = [];

const js = [...lectures, ...exercises, ...assignments];

export { js };
