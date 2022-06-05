import "dotenv/config";

export async function getAllQuotes() {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/lot`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}


export async function fetchLots(page = 1, filter = null) {
  let queryParams = `?page=${page}`;
  if(filter !== null){
    if(filter.paymentType !== 'all') {
      queryParams = queryParams + `&payment_type=${filter.paymentType}`;
    }
    if(filter.email !== ''){
      queryParams = queryParams + `&email=${filter.email}`;
    }
    queryParams = queryParams + `&sell_type=${filter.sellType}&crypto_type=${filter.currencyType}`;
  }
  const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/lot` + queryParams);
  return await response.json();
}