export default () => {
  return fetch(
      "https://polls.apiblueprint.org/questions",
      {
        headers: { Accept: "application/json" },
        method: "GET"
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
