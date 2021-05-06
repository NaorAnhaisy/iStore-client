import React, { useState, useEffect } from "react";
import "./ForgotPass.css";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AOS from "aos";
import RotateLoader from "../Loaders/RotateLoader/RotateLoader";
// import AuthService from "../../Auth/AuthService";

export default function ForgotPass(props) {
  let history = useHistory();
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [isSucced, setIsSucced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    const userData = {
      email: email,
    };

    console.log(userData);

    setTimeout(() => {
      setMessage("Check your mail inbox for a password reset link.");
      setIsSucced(true);
      setIsLoading(false);
    }, 3000);

    // try {
    //   AuthService.login(userData).then(
    //     (response) => {
    //       setIsLoading(false);
    //       setMessage(response.data.message);
    //       setIsSucced(true);
    //     },
    //     (error) => {
    //       setIsLoading(false);
    //       setIsSucced(false);

    //       const resMessage =
    //         (error.response &&
    //           error.response.data &&
    //           error.response.data.message) ||
    //         error.message ||
    //         error.toString();

    //       console.error(error);
    //       setMessage(resMessage);
    //     }
    //   );
    // } catch (error) {
    //   console.error(error);
    //   setIsLoading(false);
    //   setIsSucced(false);
    //   setMessage(error);
    // }
  };

  return (
    <div className="account-forms-main">
      <section>
        <div className="container account-forms-container account-forms-container-width">
          <div className="signup-content">
            <div className="forgot-pass-form">
              <h2 className="form-title" style={{textAlign: "center"}}>
                {message && isSucced ? "All Good." : "Forgot Your Password?"}
              </h2>
              {message && isSucced ? (
                <p
                  data-aos="fade-zoom-in"
                  data-aos-once={true}
                  data-aos-duration="600"
                  className={"forgot-pass-msg succes-msg succes-msg-background"}
                >
                  {message}
                </p>
              ) : (
                <>
                  <h5>
                    Don't worry, happands to the best of us. Let's Recover this
                    quick.
                  </h5>
                  <h6>
                    Enter here your Email, and we'll send you a link to renew
                    your password.
                  </h6>
                  <form id="contact-card-owner-form" onSubmit={handleSubmit}>
                    <fieldset>
                      <div className="form-element form-input forgot-password-email-div-input">
                        <input
                          className="form-element-field"
                          placeholder=" "
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <div className="form-element-bar"></div>
                        <label className="form-element-label">
                          <i className="fas fa-at form-account-icon"></i>What's
                          your Email ?
                        </label>
                      </div>
                    </fieldset>
                    {isLoading ? (
                      <div
                        data-aos="fade-zoom-in"
                        data-aos-once={true}
                        data-aos-duration="1600"
                      >
                        <RotateLoader />
                      </div>
                    ) : (
                      <>
                        <Row className="forgot-pass-btn-row">
                          <Col xs={12} sm={9}>
                            <button type="submit" className="form-btn">
                              Send me password recover Email{" "}
                              <i className="fas fa-envelope-open-text forgot-pass-btn-icons"></i>
                            </button>
                          </Col>
                          <Col xs={12} sm={3}>
                            <button
                              className="form-btn form-btn-white"
                              onClick={() => history.goBack()}
                            >
                              Back{" "}
                              <i className="far fa-arrow-alt-circle-left forgot-pass-btn-icons"></i>
                            </button>
                          </Col>
                        </Row>
                        <>
                          {message && !isSucced && (
                            <p
                              data-aos="fade-zoom-in"
                              data-aos-once={true}
                              data-aos-duration="600"
                              className="forgot-pass-msg error-msg error-msg-background"
                            >
                              {message}
                            </p>
                          )}
                        </>
                      </>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
