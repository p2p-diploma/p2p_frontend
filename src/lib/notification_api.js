import 'dotenv/config';
export async function fetchNotifications(){
    var response = await fetch(`${process.env.REACT_APP_BACKEND_API}`, {credentials: 'include'});
    return await response.json();
}