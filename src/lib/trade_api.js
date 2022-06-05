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

export async function approveTrade(tradeId) {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/trade/approve_payment/${tradeId}`,
    {
      method: "POST",
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
