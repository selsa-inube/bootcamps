function getMilestoneId(milestone) {
  switch (milestone) {
    case "prework":
      return "4";
    case "html-css":
      return "5";
    case "javascript":
      return "6";
    case "react":
      return "7";
    case "git":
      return "8";
    case "typescript":
      return "9";
    default:
      throw new Error(`Milestone "${milestone}" not found`);
  }
}

export { getMilestoneId };
