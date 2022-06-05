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


export async function fetchLots() {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/lot`, {credentials: 'include'});
  return await response.json();
}
export async function fetchLotsCount(){
  const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/lot/count`, {credentials: 'include'});
  return parseInt(response.text());
}