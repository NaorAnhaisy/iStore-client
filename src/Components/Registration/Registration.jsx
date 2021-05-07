import React, { useEffect, useState, useCallback } from "react";
import "./Registration.css";
import { Link, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import ReactTooltip from "react-tooltip";
// import Cookie from "js-cookie";
// import AuthService from "../../Auth/AuthService";
import { clientUrl, schema } from "../../globals";

var validator = require("email-validator");

export default function Registration(props) {
  const history = useHistory();
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordRepeat, setPasswordRepeat] = useState(null);
  const [isAgreeToStatementsChecked, setAgreeToStatementsChecked] = useState(
    false
  );
  const [isFieldsOK, setFieldsOK] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { addToast } = useToasts();

  const checkFieldsOK = useCallback(() => {
    return (
      fullName &&
      validator.validate(email) &&
      schema.validate(password) &&
      passwordRepeat === password &&
      isAgreeToStatementsChecked
    );
  }, [fullName, email, password, passwordRepeat, isAgreeToStatementsChecked]);

  useEffect(() => {
    if (checkFieldsOK()) {
      setFieldsOK(true);
    } else {
      setFieldsOK(false);
    }
  }, [checkFieldsOK]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    const userData = {
      fullName: fullName,
      email: email,
      password: password,
      passwordRepeat: passwordRepeat,
      isAgreeToStatementsChecked: isAgreeToStatementsChecked,
    };

    console.log(userData);

    setTimeout(() => {
      setIsLoading(false);
      if (email === "1@1.com") {
        history.push("/Dashboard");
      } else {
        addToast("User Existes", { appearance: "error" });
      }
    }, 2000);

    // try {
    //   AuthService.registerUser(userData).then(
    //     (response) => {
    //       setIsLoading(false);
    //       if (response?.data?.token) {
    //         Cookie.set("token", response.data.token);
    //         Cookie.set("user", response.data.user);
    //         history.push("/Dashboard");
    //       } else {
    //         addToast(
    //           "Problem accured. No token has recieved. Please try again later.",
    //           { appearance: "error" }
    //         );
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
    //       addToast(resMessage, { appearance: "error" });
    //     }
    //   );
    // } catch (error) {
    //   console.error(error);
    //   setIsLoading(false);
    //   addToast(error, { appearance: "error" });
    // }
  };

  return (
    <div className="account-forms-main">
      <section>
        <div className="container account-forms-container account-forms-container-width">
          <div className="signup-content display-flex">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form id="contact-card-owner-form" onSubmit={handleSubmit}>
                <fieldset>
                  <div className="form-element form-input">
                    <input
                      className="form-element-field"
                      placeholder=" "
                      type="text"
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                    <div className="form-element-bar"></div>
                    <label className="form-element-label">
                      <i className="fas fa-portrait form-account-icon"></i>Your
                      Full Name
                    </label>
                  </div>
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
                    <small className="form-element-hint">
                      Don't worry, we won't spam you{" "}
                      <i className="far fa-smile"></i>
                    </small>
                  </div>
                  <div className="form-element form-input">
                    <input
                      className="form-element-field"
                      placeholder=" "
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      data-html={true}
                      data-class="regist-password-requirements-ul"
                      data-tip="Password Must:
                                                <ul >
                                                <li> Minimum 8 Characters </li>
                                                <li> Minimum 1 Digit </li>
                                                <li> Minimum 1 Uppercase letter</li>
                                                <li> Minimum 1 Lowercase letter</li>
                                                </ul>"
                      data-event="focusin"
                      data-event-off="focusout"
                    />
                    <div className="form-element-bar"></div>
                    <label className="form-element-label">
                      <i className="fas fa-lock form-account-icon"></i>Password
                    </label>
                  </div>
                  <div className="form-element form-input">
                    <input
                      className="form-element-field"
                      placeholder=" "
                      type="password"
                      onChange={(e) => setPasswordRepeat(e.target.value)}
                      required
                    />
                    <div className="form-element-bar"></div>
                    <label className="form-element-label">
                      <i className="fas fa-user-check form-account-icon"></i>
                      Repeat your password
                    </label>
                  </div>
                  <div className="agree-to-policy-div">
                    <input
                      type="checkbox"
                      id="isChecked"
                      value=""
                      name="isChecked"
                      checked={isAgreeToStatementsChecked}
                      onChange={() =>
                        setAgreeToStatementsChecked(!isAgreeToStatementsChecked)
                      }
                    />
                    <label
                      className="regist-checkbox-label"
                      htmlFor="isChecked"
                    >
                      <span>
                        I agree all statements in{" "}
                        <a
                          href={clientUrl + "/Policy"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Terms of service
                        </a>{" "}
                        of <strong>iStore</strong>
                      </span>
                      <span className="regist-checkbox-span"></span>
                    </label>
                  </div>
                </fieldset>
                <div className="form-actions">
                  <button
                    disabled={!isFieldsOK || isLoading}
                    className="form-btn"
                    type="submit"
                  >
                    {isLoading ? "Loading..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure className="form-account-image">
                <img src="/images/signup-image.png" alt="sing up" />
              </figure>
              <span className="signup-image-link">
                <Link to="/Login" className="link-to-login">
                  I am already member
                </Link>
              </span>
              <div className="social-login">
                <span className="social-label">Or sign up with</span>
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
      <ReactTooltip place="right" type="info" effect="solid" />
    </div>
  );
}
