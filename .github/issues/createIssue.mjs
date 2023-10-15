import { Octokit } from "octokit";
import { GITHUB_TOKEN } from "../github.token.mjs";

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

const owner = "selsa-inube";
const repo = "bootcamp";

async function createIssue(issue) {
  const response = await octokit.request(
    `POST /repos/${owner}/${repo}/issues`,
    {
      owner: owner,
      repo: repo,
      title: issue.title,
      assignees: issue.assignees,
      labels: issue.labels,
      milestone: issue.milestone,
      body: issue.body,
    },
  );
  console.log(response.status, response.data.title);
}

export { createIssue };
