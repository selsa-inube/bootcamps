// Poster
import { createIssue } from "../.github/issues/createIssue.mjs";

// Helpers
import { assignees } from "../.github/issues/assignees.mjs";

// Modules
import { prework } from "../content/meta/prework.mjs";
// import { htmlCSS } from "../content/meta/html-css.mjs";
// import { js } from "../content/meta/js.mjs";
// import { react } from "../content/meta/react.mjs";
// import { ts } from "../content/meta/ts.mjs";

const issues = prework;
const assignee = assignees["dgarzon"];

issues.forEach(({ title, body, labels }) => {
  createIssue({
    title,
    body,
    labels,
    assignees: [assignee],
  });
});
