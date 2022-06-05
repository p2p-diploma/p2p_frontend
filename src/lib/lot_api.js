import "dotenv/config";

export async function fetchLots(page = 1, filter = null) {
  let queryParams = `?page=${page}`;
  if(filter !== null){
    if(filter.showPersonal){
      const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/lot?show_personal=${filter.showPersonal}`);
      return await response.json();
    }
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



export async function createPayment(payment) {
  let response = await fetch(`${process.env.REACT_APP_BACKEND_API}/payment`, {
    method: 'POST', credentials: 'include', 
    body: JSON.stringify(payment), headers: {'Content-Type': 'application/json'}
  });
  return await response.json();
}

export async function createLot(lot) {
  let response = await fetch(`${process.env.REACT_APP_BACKEND_API}/lot`, {
    method: 'POST', credentials: 'include', 
    body: JSON.stringify(lot), headers: {'Content-Type': 'application/json'}
  });
  return await response.json();
}