function getLabel(labels) {
  const options = ["assignment", "exercise", "lecture", "project", "quiz"];

  labels.forEach((label) => {
    if (!options.includes(label)) {
      throw new Error(`Label "${label}" not found`);
    }
  });

  return labels;
}

export { getLabel };
