import React, { useEffect, useState, useCallback } from "react";
import "./ResetPass.css";
import { useParams } from "react-router-dom";
import { schema } from "../../globals";
// import AuthService from "../../Auth/AuthService";
import RotateLoader from "../Loaders/RotateLoader/RotateLoader";
import AOS from "aos";
// import { Form, Button, Container, InputGroup, Col } from 'react-bootstrap';
// import AuthService from '../../Auth/AuthService'
// import { Link } from 'react-router-dom';

export default function ResetPass(props) {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [isValidToken, setTokenValid] = useState(true);
  const [isFieldsOK, setFieldsOK] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSucced, setIsSucced] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    AOS.init();
    console.log(token);
    setTokenValid(true);
  }, [token]);

  const checkFieldsOK = useCallback(() => {
    return schema.validate(password) && passwordRepeat === password;
  }, [password, passwordRepeat]);

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

    // const userData = {
    //   password: password,
    //   passwordRepeat: passwordRepeat,
    // };

    setTimeout(() => {
      setIsLoading(false);
      setIsSucced(true);
      setMessage("Password reseted succesfully. Go ahead and login freely.");
    }, 2000);

    // try {
    //   AuthService.resetPasswordPost(token, userData).then(
    //     (response) => {
    //       setIsLoading(false);
    //       if (response?.data?.token) {
    //         Cookie.set("token", response.data.token);
    //         Cookie.set("user", response.data.user);
    //         history.push("/Dashboard");
    //       } else {
    //         setErrorMsg(
    //           "Problem accured. No token has recieved. Please try again later."
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
          <div className="signup-content">
            {!isValidToken ? (
              <div className="forgot-pass-form">
                <h2>Nope... Haven't seen that coming...</h2>
                <h5>
                  Looks like that page doesn't exist... Are you sure you came
                  for the right place?
                </h5>
                <figure>
                  <img
                    src="/images/illustrations/error-404-page-not-found.jpg"
                    alt="404 not found"
                    className="undragablle-image"
                  />
                </figure>
              </div>
            ) : (
              <div className="forgot-pass-form container-xxl">
                <h2 className="form-title" style={{ textAlign: "center" }}>Reset Password</h2>
                <h5>Awesome. Now just give yourself a new password.</h5>
                <h6>
                  Remember to remember it this time{" "}
                  <i className="far fa-smile-wink"></i>
                </h6>

                {isSucced ?
                  message && (
                    <p
                      data-aos="fade-zoom-in"
                      data-aos-once={true}
                      data-aos-duration="600"
                      className={
                        "forgot-pass-msg succes-msg " +
                        (isSucced
                          ? "succes-msg-background"
                          : "error-msg-background")
                      }>{message}</p>
                  )
                  :
                  <form id="contact-card-owner-form" onSubmit={handleSubmit}>
                    <fieldset>
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
                          <i className="fas fa-lock form-account-icon"></i>New
                        Password
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
                        And repeat that password ...
                      </label>
                      </div>
                    </fieldset>
                    <div className="form-actions">
                      <button
                        disabled={!isFieldsOK || isLoading}
                        className="form-btn"
                        type="submit"
                      >
                        <i className="fas fa-check-double reset-password-check-icon"></i>
                      I'm Good to Go!
                    </button>
                    </div>
                    {
                      isLoading && <RotateLoader />
                    }
                  </form>
                }
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
