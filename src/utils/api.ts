
const BASE_URL = "https://disease.sh/v3/covid-19";

export async function fetchWorldWideData() {
  const response = await fetch(`${BASE_URL}/all`);
  if (!response.ok) {
    throw new Error("Failed to fetch worldwide data");
  }
  return response.json();
}

export async function fetchCountryData() {
  const response = await fetch(`${BASE_URL}/countries`);
  if (!response.ok) {
    throw new Error("Failed to fetch country data");
  }
  return response.json();
}

export async function fetchGraphData() {
  const response = await fetch(`${BASE_URL}/historical/all?lastdays=all`);
  if (!response.ok) {
    throw new Error("Failed to fetch graph data");
  }
  return response.json();
}
