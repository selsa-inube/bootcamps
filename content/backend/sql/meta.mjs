import { labels } from "../../../.github/issues/labels.mjs";
const URL =
  "https://github.com/selsa-inube/bootcamps/blob/main/content/all/docker";

const exercises = [
  {
    title: "SQL Noir",
    body: `${URL}/sql-ex-sql-noir.md`,
    labels: [labels.topic.sql, labels.type.exercise],
  },
];

const lectures = [];

const assignments = [];

const videos = [
  {
    title: "Learn SQL",
    body: `${URL}/sql-vid-learn-sql.md`,
    labels: [labels.topic.sql, labels.type.video],
  },
];

const sql = [...exercises, ...lectures, ...assignments, ...videos];

export { sql };
