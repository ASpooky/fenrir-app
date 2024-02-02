export async function useGourmetQuery() {
  const url = "http://localhost:8080/gourmet";

  const data = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
      return;
    });

  return data;
}
