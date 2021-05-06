import axios from "axios";
import { serverApiUrl } from '../globals';
import Cookie from "js-cookie";

const USERS_API_URL = serverApiUrl + "/users";
const AUTH_API_URL = serverApiUrl + "/auth";
const token = Cookie.get("token") ? Cookie.get("token") : null;
axios.defaults.headers.common['x-access-token'] = "Bearer " + token;

class AuthService {

  registerUser(newUser) {
    return axios
      .post(USERS_API_URL + "/register", newUser);
  }

  loginUser(userData) {
    return axios
      .post(USERS_API_URL + "/login", userData);
  }

  forgotPassword(userEmail) {
    return axios
      .post(USERS_API_URL + "/forgot", userEmail);
  }

  resetPasswordGetToken(token) {
    return axios
      .get(USERS_API_URL + "/reset/" + token);
  }

  resetPasswordPost(token, passwordsObj) {
    return axios
      .post(USERS_API_URL + "/reset/" + token, passwordsObj);
  }

  logout() {
    Cookie.remove('token');
    Cookie.remove('user');
  }

  getCurrentUserToken() {
    return Cookie.get('user');
  }

  isUserLoggedIn() {
    return axios.get(AUTH_API_URL + "/islogged");
  }

  isAdminLoggedIn() {
    return axios.get(AUTH_API_URL + "/isadmin");
  }
}

export default new AuthService();