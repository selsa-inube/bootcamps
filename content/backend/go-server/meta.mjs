import { labels } from "../../../.github/issues/labels.mjs";
const URL =
  "https://github.com/selsa-inube/bootcamps/blob/main/content/backend/go-server";

const exercises = [];

const lectures = [
  {
    title: "How To Use Struct Tags in Go",
    body: `${URL}/go-server-as-what-even-is-a-mux.md`,
    labels: [labels.topic["go-server"], labels.type.lecture],
  },
];

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
  {
    title: "Todo - Require and Replace",
    body: `${URL}/go-server-as-todo-require-and-replace.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
  {
    title: "Todo - JSON Replier",
    body: `${URL}/go-server-as-todo-json-replier.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
  {
    title: "Todo - GET All Todos",
    body: `${URL}/go-server-as-todo-get-all-todos.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
  {
    title: "Todo - POST Todo",
    body: `${URL}/go-server-as-todo-post-todo.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
  {
    title: "Todo - GET Todo By ID",
    body: `${URL}/go-server-as-todo-get-todo-by-id.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
  {
    title: "Todo - DELETE Todo By ID",
    body: `${URL}/go-server-as-todo-delete-todo-by-id.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
  {
    title: "Todo - PATCH Todo By ID",
    body: `${URL}/go-server-as-todo-patch-todo-by-id.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
  {
    title: "Todo - Test GET Requests",
    body: `${URL}/go-server-as-todo-test-get-requests.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
  {
    title: "Todo - Test POST Requests",
    body: `${URL}/go-server-as-todo-test-post-requests.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
  {
    title: "Todo - Test DELETE Requests",
    body: `${URL}/go-server-as-todo-test-delete-requests.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
  {
    title: "Todo - Test PATCH Requests",
    body: `${URL}/go-server-as-todo-test-patch-requests.md`,
    labels: [labels.topic["go-server"], labels.type.assignment],
  },
];

const goServer = [...exercises, ...lectures, ...assignments];

export { goServer };
