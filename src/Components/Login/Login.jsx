import React, { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import { clientUrl } from '../../globals';
// import AuthService from '../../Auth/AuthService';
// import axios from 'axios';

export default function Login(props) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    // const [message, setMessage] = useState(null);
    // const [succeed, setSucced] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            "email": email,
            "password": password
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

                        <div className="signup-form">
                            <h2 className="form-title">Sign In</h2>
                            <form id="contact-card-owner-form" onSubmit={handleSubmit}>
                                <fieldset>
                                    <div className="form-element form-input">
                                        <input className="form-element-field" placeholder=" " type="email" onChange={e => setEmail(e.target.value)} required />
                                        <div className="form-element-bar"></div>
                                        <label className="form-element-label"><i className="fas fa-at login-icon"></i>Your Email</label>
                                    </div>
                                    <div className="form-element form-input">
                                        <input className="form-element-field" placeholder=" " type="password" onChange={e => setPassword(e.target.value)} required />
                                        <div className="form-element-bar"></div>
                                        <label className="form-element-label"><i className="fas fa-lock login-icon"></i>Password</label>
                                    </div>
                                </fieldset>
                                <div className="form-actions">
                                    <button className="form-btn" type="submit">Login</button>
                                </div>
                            </form>
                            <div className="social-login">
                                <span className="social-label">Or login with</span>
                                <ul className="socials">
                                    <li><a href={clientUrl}><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                    <li><a href={clientUrl}><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                    <li><a href={clientUrl}><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="signup-image">
                            <figure><img src="/images/signin-image.png" alt="sing up" /></figure>
                            <span className="signup-image-link">Don't have an account yet? <Link to="/Register" className="link-to-registration">Sign Up</Link></span>
                            <span className="signup-image-link"><Link to="/Login/Forgot" className="link-to-registration">Forgot your password?</Link></span>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}