function getAssignees(assignees) {
  const options = ["wfercanas"];
  assignees.forEach((assignee) => {
    if (!options.includes(assignee)) {
      throw new Error(`Assignee "${assignee}" not found`);
    }
  });

  return assignees;
}

export { getAssignees };
