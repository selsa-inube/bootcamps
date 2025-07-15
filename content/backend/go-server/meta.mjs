import { labels } from "../../../.github/issues/labels.mjs";
const URL =
  "https://github.com/selsa-inube/bootcamps/blob/main/content/backend/go-server";

const exercises = [];

const lectures = [];

const assignments = [
  {
    title: "What even is a Mux?",
    body: `${URL}/go-server-as-what-even-is-a-mux.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
  {
    title: "Can You Handle This?",
    body: `${URL}/go-server-as-can-you-handle-this.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
  {
    title: "Todo - Mux and Root Handler",
    body: `${URL}/go-server-as-todo-mux-and-root-handler.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
  {
    title: "Todo - Server and Handlers files",
    body: `${URL}/go-server-as-todo-server-and-handlers-files.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
  {
    title: "Todo - Test Server",
    body: `${URL}/go-server-as-todo-test-server.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
  {
    title: "Todo - Table-Driven Tests",
    body: `${URL}/go-server-as-todo-table-driven-tests.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
  {
    title: "Todo - Text and Error Repliers",
    body: `${URL}/go-server-as-todo-text-and-error-repliers.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
];

const goServer = [...exercises, ...lectures, ...assignments];

export { goServer };
