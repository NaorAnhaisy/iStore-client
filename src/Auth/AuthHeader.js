import Cookie from "js-cookie";

export default function authHeader() {
    const token = Cookie.get("token");
    return token ? { 'x-access-token': token } : null;
}