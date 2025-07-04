import { labels } from "../../../.github/issues/labels.mjs";
const URL = "https://github.com/selsa-inube/bootcamp/blob/main/content/all";

const lectures = [
  {
    title: "Git - Conventional Commits",
    body: `${URL}/git/git-lec-conventional-commits.md`,
    labels: [labels.topic.git, labels.type.lecture],
  },
];

const activities = [
  {
    title: "Git - Getting Started",
    body: `${URL}/git/git-vid-getting-started.md`,
    labels: [labels.topic.git, labels.type.video],
  },
  {
    title: "Git - Commits",
    body: `${URL}/git/git-vid-commits.md`,
    labels: [labels.topic.git, labels.type.video],
  },
  {
    title: "Git - Branching",
    body: `${URL}/git/git-vid-branching.md`,
    labels: [labels.topic.git, labels.type.video],
  },
  {
    title: "Git - GitHub (Part I)",
    body: `${URL}/git/git-vid-github-part1.md`,
    labels: [labels.topic.git, labels.type.video],
  },
  {
    title: "Git - GitHub (Part II)",
    body: `${URL}/git/git-vid-github-part2.md`,
    labels: [labels.topic.git, labels.type.video],
  },
];

const git = [...lectures, ...activities];

export { git };
