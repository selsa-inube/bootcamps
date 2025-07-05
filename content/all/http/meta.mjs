import { labels } from "../../../.github/issues/labels.mjs";
const URL = "https://github.com/selsa-inube/bootcamp/blob/main/content/all";

const lectures = [
  {
    title: "A Typical HTTP Session",
    body: `${URL}/http/http-lec-a-typical-http-session.md`,
    labels: [labels.topic.http, labels.type.lecture],
  },
  {
    title: "Evolution of HTTP",
    body: `${URL}/http/http-lec-evolution-of-http.md`,
    labels: [labels.topic.http, labels.type.lecture],
  },
  {
    title: "HTTP Messages",
    body: `${URL}/http/http-lec-http-messages.md`,
    labels: [labels.topic.http, labels.type.lecture],
  },
  {
    title: "HTTP Response Status Codes",
    body: `${URL}/http/http-lec-http-response-status-codes.md`,
    labels: [labels.topic.http, labels.type.lecture],
  },
];

const http = [...lectures];

export { http };
