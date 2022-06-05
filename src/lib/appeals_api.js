import "dotenv/config";

async function createAppeal(data) {
    var response = await fetch(`${process.env.REACT_APP_BACKEND_API}/appeals`, 
    {method: 'POST', credentials: 'include', body: data});
    return response.ok;
}

async function fetchAppeals(page) {
    var response = await fetch(`${process.env.REACT_APP_BACKEND_API}/appeals?page=${page}`, {credentials: 'include'});
    return await response.json();
}
async function fetchAppealById(id) {
    var response = await fetch(`${process.env.REACT_APP_BACKEND_API}/appeals/${id}`, {credentials: 'include'});
    return await response.json();
}
async function fetchReceiptById(id) {
    var response = await fetch(`${process.env.REACT_APP_BACKEND_API}/appeals/receipt/${id}`, {credentials: 'include'});
    return await response.blob();
}
async function fetchAppealsCount() {
    var response = await fetch(`${process.env.REACT_APP_BACKEND_API}/appeals/count`, {credentials: 'include'});
    var count = await response.text();
    return parseInt(count);
}
async function deleteAppeal(id) {
    var response = await fetch(`${process.env.REACT_APP_BACKEND_API}/appeals/${id}`, {credentials: 'include', method: 'DELETE'});
    return response.ok;
}

export async function freezeWallet(email){
    var response = await fetch(`${process.env.REACT_APP_BACKEND_API}/wallets/freeze/${email}`, {credentials: 'include', method: 'POST'});
    return response.ok;
}

export {fetchAppeals, fetchReceiptById, fetchAppealById, fetchAppealsCount, deleteAppeal, createAppeal };