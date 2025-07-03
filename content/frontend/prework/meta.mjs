import { labels } from "../../../.github/issues/labels.mjs";
const URL =
  "https://github.com/selsa-inube/bootcamp/blob/main/content/frontend/prework";

const lectures = [
  {
    title: "WSL",
    body: `${URL}/prework-lec-wsl.md`,
    labels: [labels.topic.prework, labels.type.lecture],
  },
  {
    title: "Terminal",
    body: `${URL}/prework-lec-terminal.md`,
    labels: [labels.topic.prework, labels.type.lecture],
  },
  {
    title: "VS Code",
    body: `${URL}/prework-lec-vscode.md`,
    labels: [labels.topic.prework, labels.type.lecture],
  },
  {
    title: "Prettier",
    body: `${URL}/prework-lec-prettier.md`,
    labels: [labels.topic.prework, labels.type.lecture],
  },
];

const prework = [...lectures];

export { prework };
