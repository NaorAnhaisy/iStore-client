import React, { useState } from "react";
import "./ForgotPass.css";

export default function Login(props) {
  const [email, setEmail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      "email": email
    }

    console.log(userData)

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
        <div className="container account-forms-container">
          <div className="signup-content">

            <div className="forgot-pass-form">
              <h2 className="form-title">Forgot Your Password?</h2>
              <h5>Don't worry, happands to the best of us. Let's Recover this quick.</h5>
              <h6>Enter your Email. We'll send you a link to recover your pass.</h6>
              <form id="contact-card-owner-form" onSubmit={handleSubmit}>
                <fieldset>
                  <div className="form-element form-input">
                    <input className="form-element-field" placeholder=" " type="email" onChange={e => setEmail(e.target.value)} required />
                    <div className="form-element-bar"></div>
                    <label className="form-element-label"><i className="fas fa-at login-icon"></i>Email</label>
                  </div>
                </fieldset>
                <div className="form-actions">
                  <button className="form-btn" type="submit">Send me password recover Email</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}