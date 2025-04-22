// Poster
import { createIssue } from "../.github/issues/createIssue.mjs";

// Helpers
import { assignees } from "../.github/issues/assignees.mjs";

// Modules

// All
import { git } from "../content/all/meta/git.mjs";

// Frontend
import { prework } from "../content/frontend/meta/prework.mjs";
import { htmlCSS } from "../content/frontend/meta/html-css.mjs";
import { js } from "../content/frontend/meta/js.mjs";
import { react } from "../content/frontend/meta/react.mjs";
import { ts } from "../content/frontend/meta/ts.mjs";

// Backend
import { go } from "../content/backend/v2/meta/go.mjs";

const issues = git;
const assignee = assignees.jpinilla;

issues.forEach(({ title, body, labels }) => {
  createIssue("selsa-inube", "bootcamps", {
    title,
    body,
    labels,
    assignees: [assignee],
  });
});
