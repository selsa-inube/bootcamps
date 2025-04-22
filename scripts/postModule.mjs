// Poster
import { createIssue } from "../.github/issues/createIssue.mjs";

// Helpers
import { assignees } from "../.github/issues/assignees.mjs";

// Modules
import { prework } from "../content/frontend/meta/prework.mjs";
// import { htmlCSS } from "../content/frontend/meta/html-css.mjs";
// import { js } from "../content/frontend/meta/js.mjs";
// import { react } from "../content/frontend/meta/react.mjs";
// import { ts } from "../content/frontend/meta/ts.mjs";
// import { go } from "../content/backend/meta/go.mjs";
import { sql } from "../content/backend/meta/sql.mjs";

const issues = prework;
const assignee = assignees.jpinilla;

issues.forEach(({ title, body, labels }) => {
  createIssue("selsa-inube", "bootcamps", {
    title,
    body,
    labels,
    assignees: [assignee],
  });
});
