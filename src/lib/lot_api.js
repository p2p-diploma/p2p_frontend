import "dotenv/config";

export async function fetchLots(page) {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/lot?page=${page}`
  );
  return await response.json();
}

export async function getLotDetail(lotId) {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/lot/detail/${lotId}`,
    {
      withCredenitals: true,
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch trade");
  }

  return data;
}
