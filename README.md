# Bootcamp

## Scope

This repository contains training material for entry-level software engineers, so you can learn the basics of core technologies within the frame of what we build in inube. Read the following guidelines so you know how to progress with your bootcamp.

## Guidelines

### Repositories

Every participant of a bootcamp should create their own repository in their personal account. It should be an empty repository, not a fork from this repo.

### Board and Cards

- This repository is attached to a GitHub project, where you can check all the cards assigned to you: [Board](https://github.com/orgs/selsa-inube/projects/21)
- Check for the due dates of each card so you don't miss an activity.
- Each card has a label that indicates its type of task. This information lets you to know what is expected from you:

1. **Assignment**: tasks with this label expects that you commit your solution and create a Pull Request. Assign your mentor as a reviewer so he/she can check it and provide feedback or approve it.
2. **Exercise**: these tasks are for you to practice and improve your skills. These don't require that you code the solution in your repo.
3. **Lecture**: these tasks are lectures where you will learn new concepts. Each lecture has a quiz assigned, so you must complete it to evaluate that you have understood the concepts related.
4. **Project**: these are special tasks that will test your knowledge in different areas. It requires that you commit your code and create a PR. More details will be given to you when this type of task is assigned.

### Reviews

- It is expected that you work in feature branches before creating Pull Requests to main.
- To avoid conflicts when merging new assignments, we suggest you add a protection rule for your main branch so that (1) you must use Pull Requests before merging and (2) disable anyone from bypassing the Pull Request (particularly you since you're the repo owner).
- In that repository, you should add your mentor as contributor so he/she can review the Pull Requests associated with assignments.
- When a new Pull Requests is created, remember to add your mentor as a reviewer.
- Finally, move the card to "Review" in your board to signal that you've finished.

### Commits

You must create commit messages aligned with the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) specification.

### Code format

For frontend applications, we use [Prettier](https://prettier.io/) as the default formatter. Configure it to automatically format your code during the commit process. It is recommended that you have the VS Code extension of this formatter and that you allow it to auto format the code every time you save so you can see how the code is progressing.

For backend applications, you can use the golang formatter.

### Branches

Follow this structure when creating new branches in the project.

1. Start the branch name with the initial part of your corporate email. For example, if your email is jdoe@sistemasenlinea.com, use 'jdoe'.
2. Next add the topic the task is related to. For example: 'javascript'.
3. Complete the name with a brief title of the issue.

A complete example would look like this: 'jdoe/javascript/markup-a-readme'.

## Contributions

This project is an ongoing effort to train the new developers that join our company. If you find any problem, you have two options:

1. If you don't know how to solve it: create an issue, describe the problem and label it as a 'bug'.
2. If you can solve it: create a PR, describe the problem you're solving, label the PR as a bug and assign your mentor as reviewer.
