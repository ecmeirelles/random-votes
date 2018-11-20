export default ({ questionId, choiceId }) => {
  return fetch(
      `https://polls.apiblueprint.org/questions/${questionId}/choices/${choiceId}`,
      {
        headers: { Accept: "application/json" },
        method: "POST"
      }
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Impossible to fetch the information.");
    }
    return response.json();
  }).then((result) => {
    return result;
  });
}
