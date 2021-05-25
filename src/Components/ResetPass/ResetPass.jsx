import React, { useEffect, useState, useCallback } from "react";
import "./ResetPass.css";
import { Link, useParams } from "react-router-dom";
import { schema } from "../../globals";
import RotateLoader from "../Loaders/RotateLoader/RotateLoader";
import AOS from "aos";
// import { Form, Button, Container, InputGroup, Col } from 'react-bootstrap';
// import AuthService from '../../Auth/AuthService'
// import { Link } from 'react-router-dom';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import { useToasts } from "react-toast-notifications";
import ReactTooltip from "react-tooltip";

export default function ResetPass(props) {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [isValidToken, setTokenValid] = useState(false);
  const [isLoadingValidToken, setIsLoadingValidToken] = useState(true);
  const [isFieldsOK, setFieldsOK] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSucced, setIsSucced] = useState(false);
  const [message, setMessage] = useState(null);

  const { addToast } = useToasts();

  useEffect(() => {
    AOS.init();
    console.log(token);
    setTimeout(() => {
      setTokenValid(true);
      setIsLoadingValidToken(false);
    }, 2000);
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
    if (!isFieldsOK) {
      addToast("Some fields are not valid, Please check them and try again.", { appearance: "error" });
      return;
    }

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
            {isLoadingValidToken ? <RotateLoader />
              :
              <div data-aos="fade-zoom-in"
                data-aos-once={true}
                data-aos-duration="600">
                {!isValidToken ? (
                  <div className="forgot-pass-form">
                    <h2>Nope... Haven't seen that coming...</h2>
                    <h5>Looks like the password reset token you gave us is incorrect... Are you sure you came for the right place?</h5>
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
                    {isSucced ?
                      message && (
                        <>
                          <p
                            data-aos="fade-zoom-in"
                            data-aos-once={true}
                            data-aos-duration="600"
                            className="forgot-pass-msg succes-msg succes-msg-background">
                            {message}
                          </p>
                          <span className="signup-image-link">
                            <Link to="/login" className="link-to-login reset-password-login-link">
                              Login<TrendingFlatIcon />
                            </Link>
                          </span>
                        </>
                      )
                      :
                      <>
                        <h5>Awesome. Now just give yourself a new password.</h5>
                        <h6>
                          Remember to remember it this time{" "}
                          <i className="far fa-smile-wink"></i>
                        </h6>

                        <form id="contact-card-owner-form" onSubmit={handleSubmit}>
                          <fieldset>
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
                                  <ul>
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
                                <i className="fas fa-lock form-account-icon"></i>New Password
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
                                <i className="fas fa-user-check form-account-icon"></i>And Repeat That Password...
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
                          {isLoading ? <div style={{ marginTop: "42px" }}>
                            <RotateLoader />
                          </div>
                            :
                            !isSucced && message &&
                            (
                              <p
                                data-aos="fade-zoom-in"
                                data-aos-once={true}
                                data-aos-duration="600"
                                className="forgot-pass-msg error-msg-background error-msg">
                                {message}
                              </p>
                            )
                          }
                        </form>
                      </>
                    }
                  </div>
                )}
                <ReactTooltip place="top" type="info" effect="solid" />
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  );
}
