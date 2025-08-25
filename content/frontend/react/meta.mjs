import { labels } from "../../../.github/issues/labels.mjs";
const URL =
  "https://github.com/selsa-inube/bootcamp/blob/main/content/frontend/react";

const lectures = [
  {
    title: "Your First Component",
    body: `${URL}/react-lec-your-first-component.md`,
    labels: [labels.topic.react, labels.type.lecture],
  },
  {
    title: "Importing and Exporting Components",
    body: `${URL}/react-lec-importing-and-exporting-components.md`,
    labels: [labels.topic.react, labels.type.lecture],
  },
  {
    title: "Writing Markup with JSX",
    body: `${URL}/react-lec-writing-markup-with-jsx.md`,
    labels: [labels.topic.react, labels.type.lecture],
  },
  {
    title: "JavaScript in JSX with Curly Braces",
    body: `${URL}/react-lec-js-in-jsx-with-curly-braces.md`,
    labels: [labels.topic.react, labels.type.lecture],
  },
  {
    title: "Passing Props to a Component",
    body: `${URL}/react-lec-passing-props-to-a-component.md`,
    labels: [labels.topic.react, labels.type.lecture],
  },
  {
    title: "Conditional Rendering",
    body: `${URL}/react-lec-conditional-rendering.md`,
    labels: [labels.topic.react, labels.type.lecture],
  },
  {
    title: "Rendering Lists",
    body: `${URL}/react-lec-rendering-lists.md`,
    labels: [labels.topic.react, labels.type.lecture],
  },
  {
    title: "Keeping Components Pure",
    body: `${URL}/react-lec-keeping-components-pure.md`,
    labels: [labels.topic.react, labels.type.lecture],
  },
  {
    title: "Understanding Your UI as a Tree",
    body: `${URL}/react-lec-understanding-your-ui-as-a-tree.md`,
    labels: [labels.topic.react, labels.type.lecture],
  },
  {
    title: "Responding to Events",
    body: `${URL}/react-lec-responding-to-events.md`,
    labels: [labels.topic.react, labels.type.lecture],
  },
  {
    title: "State: A Component's Memory",
    body: `${URL}/react-lec-state-a-components-memory.md`,
    labels: [labels.topic.react, labels.type.lecture],
  },
  {
    title: "Render and Commit",
    body: `${URL}/react-lec-render-and-commit.md`,
    labels: [labels.topic.react, labels.type.lecture],
  },
  {
    title: "State as a Snapshot",
    body: `${URL}/react-lec-state-as-a-snapshot.md`,
    labels: [labels.topic.react, labels.type.lecture],
  },
  {
    title: "Queuing a Series of State Updates",
    body: `${URL}/react-lec-queuing-a-series-of-state-updates.md`,
    labels: [labels.topic.react, labels.type.lecture],
  },
  {
    title: "Updating Objects in State",
    body: `${URL}/react-lec-updating-objects-in-state.md`,
    labels: [labels.topic.react, labels.type.lecture],
  },
  {
    title: "Updating Arrays in State",
    body: `${URL}/react-lec-updating-arrays-in-state.md`,
    labels: [labels.topic.react, labels.type.lecture],
  },
];

const exercises = [
  {
    title: "Thinking in React",
    body: `${URL}/react-ex-thinking-in-react.md`,
    labels: [labels.topic.react, labels.type.exercise],
  },
  {
    title: "Tic Tac Toe",
    body: `${URL}/react-ex-tic-tac-toe.md`,
    labels: [labels.topic.react, labels.type.exercise],
  },
];

const assignments = [
  {
    title: "Google in React",
    body: `${URL}/react-as-google-in-react.md`,
    labels: [labels.topic.react, labels.type.assignment],
  },
  {
    title: "New York Times in React",
    body: `${URL}/react-as-new-york-times-in-react.md`,
    labels: [labels.topic.react, labels.type.assignment],
  },
  {
    title: "Cards",
    body: `${URL}/react-as-cards.md`,
    labels: [labels.topic.react, labels.type.assignment],
  },
  {
    title: "Tic Tac Toe",
    body: `${URL}/react-as-tic-tac-toe.md`,
    labels: [labels.topic.react, labels.type.assignment],
  },
  {
    title: "Thinking in React",
    body: `${URL}/react-as-thinking-in-react.md`,
    labels: [labels.topic.react, labels.type.assignment],
  },
  {
    title: "Chat",
    body: `${URL}/react-as-chat.md`,
    labels: [labels.topic.react, labels.type.assignment],
  },
];

const js = [...lectures, ...exercises, ...assignments];

export { js };
