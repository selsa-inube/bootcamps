function getAssignees(assignees) {
  const options = ["wfercanas", "JanuarAsprilla", "LinconOssa", "carin91"];
  assignees.forEach((assignee) => {
    if (!options.includes(assignee)) {
      throw new Error(`Assignee "${assignee}" not found`);
    }
  });

  return assignees;
}

export { getAssignees };
