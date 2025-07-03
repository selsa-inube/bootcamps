import { labels } from "../../../.github/issues/labels.mjs";
const URL = "https://github.com/selsa-inube/bootcamp/blob/main/content/all";

const lectures = [
  {
    title: "git-lec-conventional-commits",
    body: `${URL}/git/git-lec-conventional-commits.md`,
    labels: [labels.topic.git, labels.type.lecture],
  },
];

const activities = [
  {
    title: "git-vid-getting-started",
    body: `${URL}/git/git-vid-getting-started.md`,
    labels: [labels.topic.git, labels.type.video],
  },
  {
    title: "git-vid-commits",
    body: `${URL}/git/git-vid-commits.md`,
    labels: [labels.topic.git, labels.type.video],
  },
  {
    title: "git-vid-branching",
    body: `${URL}/git/git-vid-branching.md`,
    labels: [labels.topic.git, labels.type.video],
  },
  {
    title: "git-vid-github-part1",
    body: `${URL}/git/git-vid-github-part1.md`,
    labels: [labels.topic.git, labels.type.video],
  },
  {
    title: "git-vid-github-part2",
    body: `${URL}/git/git-vid-github-part2.md`,
    labels: [labels.topic.git, labels.type.video],
  },
];

const git = [...lectures, ...activities];

export { git };
