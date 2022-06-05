import "dotenv/config";


export async function createWallet(user) {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/wallets/create`, 
    {method: 'POST', credentials: 'include', body: JSON.stringify(user), headers: {'Content-Type': 'application/json'}});
    return response.ok;
}

export async function loadWallet(user) {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/wallets/load`, 
    {method: 'POST', credentials: 'include', body: JSON.stringify(user), headers: {'Content-Type': 'application/json'}});
    return response.ok;
}