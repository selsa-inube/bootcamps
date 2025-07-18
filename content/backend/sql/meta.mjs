import { labels } from "../../../.github/issues/labels.mjs";
const URL =
  "https://github.com/selsa-inube/bootcamps/blob/main/content/all/docker";

const exercises = [];

const lectures = [];

const assignments = [];

const videos = [
  {
    title: "Learn Docker",
    body: `${URL}/docker-vid-learn-docker.md`,
    labels: [labels.topic.docker, labels.type.video],
  },
];

const docker = [...exercises, ...lectures, ...assignments, ...videos];

export { docker };
