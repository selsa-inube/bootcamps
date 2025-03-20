import { labels } from "../../.github/issues/labels.mjs";

const URL = "https://github.com/selsa-inube/bootcamp/blob/main/content";

const prework = [
  {
    title: "Windows Subsystem for Linux",
    body: `${URL}/frontend/prework/l1-wsl.md`,
    labels: [labels.type.lecture, labels.topic.prework],
  },
  {
    title: "Windows Terminal",
    body: `${URL}/frontend/prework/l2-terminal.md`,
    labels: [labels.type.lecture, labels.topic.prework],
  },
  {
    title: "ZSH and Node",
    body: `${URL}/frontend/prework/l3-zsh-node.md`,
    labels: [labels.type.lecture, labels.topic.prework],
  },
  {
    title: "VS Code",
    body: `${URL}/frontend/prework/l4-vscode.md`,
    labels: [labels.type.lecture, labels.topic.prework],
  },
  {
    title: "Git",
    body: `${URL}/frontend/prework/l5-git.md`,
    labels: [labels.type.lecture, labels.topic.prework],
  },
  {
    title: "Conventional Commits",
    body: `${URL}/frontend/prework/l6-conventional-commits.md`,
    labels: [labels.type.lecture, labels.topic.prework],
  },
  {
    title: "Prettier",
    body: `${URL}/frontend/prework/l7-prettier.md`,
    labels: [labels.type.lecture, labels.topic.prework],
  },
  {
    title: "Github",
    body: `${URL}/frontend/prework/l8-github.md`,
    labels: [labels.type.lecture, labels.topic.prework],
  },
];

export { prework };
