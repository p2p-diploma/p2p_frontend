export async function getTradeDetail(tradeId) {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/trade/transaction/${tradeId}`,
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
