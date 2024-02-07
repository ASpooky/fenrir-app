import { Location } from "@/types/location";

export async function useGourmetQuery(
  location: Location,
  rng: string,
  str: string
) {
  const apiUrl = "http://localhost:8080/gourmet";

  const queryParams = {
    lat: String(location.latitude),
    lng: String(location.longtitude),
    range: rng,
    start: str,
  };

  const queryString = new URLSearchParams(queryParams).toString();

  const url = `${apiUrl}?${queryString}`;

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
