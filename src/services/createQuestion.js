export default (question) => {
  return fetch(
      "https://polls.apiblueprint.org/questions",
      {
        headers: { Accept: "application/json" },
        method: "POST",
        data: question
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
