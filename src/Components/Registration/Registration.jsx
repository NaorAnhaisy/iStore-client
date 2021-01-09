import React, { useState } from 'react';
import './Registration.css';
import { Link } from "react-router-dom";
// import AuthService from '../../Auth/AuthService';
// import axios from 'axios';
import { clientUrl } from '../../globals';

export default function Registration(props) {
    const [fullName, setFullName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordRepeat, setPasswordRepeat] = useState(null);
    const [isAgreeToStatementsChecked, setAgreeToStatementsChecked] = useState(false);
    // const [message, setMessage] = useState(null);
    // const [succeed, setSucced] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            "fullName": fullName,
            "email": email,
            "password": password,
            "passwordRepeat": passwordRepeat
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
                        <div className="signup-image">
                            <figure><img src="/images/signup-image.png" alt="sing up" /></figure>
                            <span className="signup-image-link"><Link to="/Login" className="link-to-login">I am already member</Link></span>
                        </div>
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form id="contact-card-owner-form" onSubmit={handleSubmit}>
                                <fieldset>
                                    <div className="form-element form-input">
                                        <input className="form-element-field" placeholder=" " type="text" onChange={e => setFullName(e.target.value)} required />
                                        <div className="form-element-bar"></div>
                                        <label className="form-element-label"><i className="fas fa-portrait login-icon"></i>Your Name</label>
                                    </div>
                                    <div className="form-element form-input">
                                        <input className="form-element-field" placeholder=" " type="email" onChange={e => setEmail(e.target.value)} required />
                                        <div className="form-element-bar"></div>
                                        <label className="form-element-label"><i className="fas fa-at login-icon"></i>Your Email</label>
                                        <small className="form-element-hint">Don't worry, we won't spam you <i className="far fa-smile"></i></small>
                                    </div>
                                    <div className="form-element form-input">
                                        <input className="form-element-field" placeholder=" " type="password" onChange={e => setPassword(e.target.value)} required />
                                        <div className="form-element-bar"></div>
                                        <label className="form-element-label"><i className="fas fa-lock login-icon"></i>Password</label>
                                    </div>
                                    <div className="form-element form-input">
                                        <input className="form-element-field" placeholder=" " type="password" onChange={e => setPasswordRepeat(e.target.value)} required />
                                        <div className="form-element-bar"></div>
                                        <label className="form-element-label"><i className="fas fa-user-check login-icon"></i>Repeat your password</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="isChecked" value="" name="isChecked" checked={isAgreeToStatementsChecked} onChange={() => setAgreeToStatementsChecked(!isAgreeToStatementsChecked)} />
                                        <label className="regist-checkbox-label" htmlFor="isChecked">
                                            <span>
                                                I agree all statements i <a href={clientUrl + "/Policy"} target="_blank" rel="noopener noreferrer">Terms of service</a> of <strong>iStore</strong>
                                            </span>
                                            <span className="regist-checkbox-span"></span>
                                        </label>
                                    </div>
                                </fieldset>
                                {/* <h5 className={succeed ? "contact-card-owner-msg-succes" : "contact-card-owner-msg-fail"}>{message}</h5> */}
                                <div className="form-actions">
                                    <button className="form-btn" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}