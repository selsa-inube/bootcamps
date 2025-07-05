import { labels } from "../../../.github/issues/labels.mjs";
const URL = "https://github.com/selsa-inube/bootcamp/blob/main/content/all";

const exercises = [
  {
    title: "What is an API?",
    body: `${URL}/api/api-ex-what-is-an-api.md`,
    labels: [labels.topic.api, labels.type.exercise],
  },
  {
    title: "What is Postman?",
    body: `${URL}/api/api-ex-what-is-postman.md`,
    labels: [labels.topic.api, labels.type.exercise],
  },
  {
    title: "Getting Started with Postman",
    body: `${URL}/api/api-ex-getting-started-with-postman.md`,
    labels: [labels.topic.api, labels.type.exercise],
  },
  {
    title: "Discover, Fork, and try out APIs",
    body: `${URL}/api/api-ex-discover-fork-and-try-apis.md`,
    labels: [labels.topic.api, labels.type.exercise],
  },
  {
    title: "Request and Responses - Basic",
    body: `${URL}/api/api-ex-request-and-responses-basic.md`,
    labels: [labels.topic.api, labels.type.exercise],
  },
  {
    title: "Request and Responses - Intermediate",
    body: `${URL}/api/api-ex-request-and-responses-intermediate.md`,
    labels: [labels.topic.api, labels.type.exercise],
  },
];

const api = [...exercises];

export { api };
