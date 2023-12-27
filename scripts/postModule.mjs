// Poster
import { createIssue } from "../.github/issues/createIssue.mjs";

// Helpers
import { getAssignees } from "../.github/issues/assignees.mjs";
import { getLabel } from "../.github/issues/labels.mjs";
import { getMilestoneId } from "../.github/issues/milestones.mjs";

// Modules
// import { prework } from "../content/meta/prework.mjs";
// import { htmlCSS } from "../content/meta/html-css.mjs";
// import { js } from "../content/meta/js.mjs";
// import { react } from "../content/meta/react.mjs";
import { ts } from "../content/meta/ts.mjs";

const issues = ts;
const assignees = ["carin91"];

try {
  const checkedAssignees = getAssignees(assignees);

  checkedAssignees.forEach((assignee, assignee_index) => {
    issues.forEach(({ title, body, labels, milestone }, issue_index) => {
      createIssue({
        title,
        body,
        labels: getLabel(labels),
        milestone: getMilestoneId(milestone),
        assignees: [assignee],
        delay: 120000 * Math.floor(issue_index / 20) * (assignee_index + 1),
      });
    });
  });
} catch (err) {
  console.error(err);
}
