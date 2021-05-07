import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { clientUrl } from "../../globals";
import AOS from "aos";
// import Cookie from "js-cookie";
// import AuthService from "../../Auth/AuthService";

export default function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    const userData = {
      email: email,
      password: password,
    };

    console.log(userData);

    setTimeout(() => {
      setIsLoading(false);
      if (userData.email === "1@1.com" && userData.password === "111") {
        history.push("/Dashboard");
      } else {
        setErrorMsg("Email or password are not correct");
      }
    }, 1500);

    // try {
    //   AuthService.loginUser(userData).then(
    //     (response) => {
    //       setIsLoading(false);
    //       if (response?.data?.token) {
    //         Cookie.set("token", response.data.token);
    //         Cookie.set("user", response.data.user);
    //         history.push("/Dashboard");
    //       } else {
    //         setErrorMsg("Problem accured. No token has recieved. Please try again later.");
    //       }
    //     },
    //     (error) => {
    //       setIsLoading(false);
    //       const resMessage =
    //         (error.response &&
    //           error.response.data &&
    //           error.response.data.message) ||
    //         error.message ||
    //         error.toString();

    //       console.error(error);
    //       setErrorMsg(resMessage);
    //     }
    //   );
    // } catch (error) {
    //   setIsLoading(false);
    //   console.error(error);
    //   setErrorMsg(error);
    // }
  };

  return (
    <div className="account-forms-main">
      <section>
        <div className="container account-forms-container account-forms-container-width">
          <div className="signup-content display-flex">
            <div className="signup-image">
              <figure className="form-account-image">
                <img src="/images/signin-image.png" alt="sing up" />
              </figure>
              <span className="signup-image-link">
                Don't have an account yet?{" "}
                <Link to="/Register" className="link-to-registration">
                  Sign Up
                </Link>
              </span>
              <span className="signup-image-link">
                <Link to="/Login/Forgot" className="link-to-registration">
                  Forgot your password?
                </Link>
              </span>
            </div>
            <div className="signup-form">
              <h2 className="form-title">Sign In</h2>
              <form id="contact-card-owner-form" onSubmit={handleSubmit}>
                <fieldset>
                  <div className="form-element form-input">
                    <input
                      className="form-element-field"
                      placeholder=" "
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <div className="form-element-bar"></div>
                    <label className="form-element-label">
                      <i className="fas fa-at form-account-icon"></i>Your Email
                    </label>
                  </div>
                  <div className="form-element form-input">
                    <input
                      className="form-element-field"
                      placeholder=" "
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div className="form-element-bar"></div>
                    <label className="form-element-label">
                      <i className="fas fa-lock form-account-icon"></i>Password
                    </label>
                  </div>
                </fieldset>
                <div className="form-actions">
                  <button
                    className="form-btn"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
                {errorMsg && (
                  <p
                    data-aos="fade-zoom-in"
                    data-aos-once={true}
                    data-aos-duration="500"
                    className="error-msg error-msg-background contact-us-error-msg"
                  >
                    {errorMsg}
                  </p>
                )}
              </form>
              <div className="social-login">
                <span className="social-label">Or login with</span>
                <ul className="socials">
                  <li>
                    <a href={clientUrl}>
                      <i className="display-flex-center zmdi zmdi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={clientUrl}>
                      <i className="display-flex-center zmdi zmdi-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={clientUrl}>
                      <i className="display-flex-center zmdi zmdi-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
