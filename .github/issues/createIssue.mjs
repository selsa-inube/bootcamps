import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function createIssue(owner, repo, issue) {
  octokit
    .request(`POST /repos/${owner}/${repo}/issues`, {
      owner: owner,
      repo: repo,
      title: issue.title,
      assignees: issue.assignees,
      labels: issue.labels,
      body: issue.body,
    })
    .then((response) =>
      console.log(response.status, response.data.title, issue.assignees),
    );
}

export { createIssue };
