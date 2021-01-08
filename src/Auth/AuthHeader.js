import Cookie from "js-cookie";

export default function authHeader() {
    const token = Cookie.get("token") ? 
        Cookie.get("token") : null;

    if (token) {
        return { 'x-access-token': token };
    }
    
    return null;
}