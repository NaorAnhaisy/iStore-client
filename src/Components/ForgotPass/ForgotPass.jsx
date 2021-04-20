import React, { useState, useEffect } from "react";
import "./ForgotPass.css";
import { Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import AOS from 'aos';
import RotateLoader from '../Loaders/RotateLoader/RotateLoader';

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
      "email": email
    }

    console.log(userData);

    setTimeout(() => {
      setMessage("Check your mail inbox for a password reset link.")
      setIsSucced(true);
      setIsLoading(false);
    }, 3000);

    // try {
    //     axios.post(serverApiUrl + "/visitCards/contactOwnerFromUser", messageToSend)
    //         .then(response => {
    //             setSucced(true);
    //             handleResult(response.data.message);
    //         })
    //         .catch(err => {
    //             const resMessage =
    //                 (err.response &&
    //                     err.response.data &&
    //                     err.response.data.message) ||
    //                 err.message ||
    //                 err.toString();

    //             console.error(resMessage);
    //             handleResult(resMessage);
    //         });
    // } catch (error) {
    //     console.error(error);
    //     handleResult(error);
    // }
  }

  return (
    <div className="account-forms-main">
      <section>
        <div className="container account-forms-container account-forms-container-width">
          <div className="signup-content">
            <div className="forgot-pass-form">
              <h2 className="form-title">
                {message ? "Thank You." : "Forgot Your Password?"}</h2>
              {message ?
                <p data-aos="fade-zoom-in" data-aos-once={true} data-aos-duration="600"
                  className={"forgot-pass-msg " + (isSucced ? "succes-msg succes-msg-background" : "error-msg error-msg-background")}>
                  {message}
                </p> 
                :
                <>
                  <h5>Don't worry, happands to the best of us. Let's Recover this quick.</h5>
                  <h6>Enter here your Email, and we'll send you a link to renew your password.</h6>
                  <form id="contact-card-owner-form" onSubmit={handleSubmit}>
                    <fieldset>
                      <div className="form-element form-input">
                        <input className="form-element-field" placeholder=" " type="email" onChange={e => setEmail(e.target.value)} required />
                        <div className="form-element-bar"></div>
                        <label className="form-element-label"><i className="fas fa-at form-account-icon"></i>What's your Email ?</label>
                      </div>
                    </fieldset>
                    {isLoading ?
                    <div data-aos="fade-zoom-in" data-aos-once={true} data-aos-duration="1600">
                      <RotateLoader />
                    </div>
                      :
                      <Row className="forgot-pass-btn-row">
                        <Col xs={9}>
                          <button type="submit" className="form-btn">Send me password recover Email <i className="fas fa-envelope-open-text forgot-pass-btn-icons"></i></button>
                        </Col>
                        <Col xs={3}>
                          <button className="form-btn form-btn-white" onClick={() => history.goBack()}>Back <i className="far fa-arrow-alt-circle-left forgot-pass-btn-icons"></i></button>
                        </Col>
                      </Row>
                    }
                  </form>
                </>
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}