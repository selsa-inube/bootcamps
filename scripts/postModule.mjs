// Poster
import { createIssue } from "../.github/issues/createIssue.mjs";

// Helpers
import { assignees } from "../.github/issues/assignees.mjs";

// Modules

// All
// import { git } from "../content/all/git/meta.mjs";
import { http } from "../content/all/http/meta.mjs";
import { api } from "../content/all/api/meta.mjs";

// Frontend
import { prework } from "../content/frontend/prework/meta.mjs";
import { htmlCSS } from "../content/frontend/html-css/meta.mjs";
import { js } from "../content/frontend/js/meta.mjs";
import { react } from "../content/frontend/meta/react.mjs";
import { ts } from "../content/frontend/meta/ts.mjs";

// Backend
import { go } from "../content/backend/go/meta.mjs";
import { goServer } from "../content/backend/go-server/meta.mjs";
import { sql } from "../content/backend/sql/meta.mjs";
import { docker } from "../content/all/docker/meta.mjs";

const issues = js;
const assignee = assignees.dgarzon;

issues.forEach(({ title, body, labels }) => {
  createIssue("selsa-inube", "bootcamps", {
    title,
    body,
    labels,
    assignees: [assignee],
  });
});
