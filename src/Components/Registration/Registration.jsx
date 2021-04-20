import React, { useEffect, useState, useCallback } from 'react';
import './Registration.css';
import { Link } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';
import ReactTooltip from 'react-tooltip';
// import AuthService from '../../Auth/AuthService';
// import axios from 'axios';
import { clientUrl } from '../../globals';

var validator = require("email-validator");
var passwordValidator = require('password-validator');

var schema = new passwordValidator();
schema
    .is().min(8)
    .has().uppercase(1)
    .has().lowercase(1)
    .has().digits(1)

export default function Registration(props) {
    const [fullName, setFullName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordRepeat, setPasswordRepeat] = useState(null);
    const [isAgreeToStatementsChecked, setAgreeToStatementsChecked] = useState(false);
    const [isFieldsOK, setFieldsOK] = useState(false);
    // const [message, setMessage] = useState(null);
    // const [succeed, setSucced] = useState(false);

    const { addToast } = useToasts();

    const checkFieldsOK = useCallback(() => {
        return (
            fullName &&
            validator.validate(email) &&
            schema.validate(password) &&
            passwordRepeat === password &&
            isAgreeToStatementsChecked
        );
    }, [fullName, email, password, passwordRepeat, isAgreeToStatementsChecked])

    useEffect(() => {
        if (checkFieldsOK()) {
            setFieldsOK(true);
        } else {
            setFieldsOK(false);
        }
    }, [checkFieldsOK])

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            "fullName": fullName,
            "email": email,
            "password": password,
            "passwordRepeat": passwordRepeat,
            "isAgreeToStatementsChecked": isAgreeToStatementsChecked
        }

        if (email === "1@1.com") {
            addToast("User Existes", { appearance: 'error' })
        }

        console.log(userData)
    }

    return (
        <div className="account-forms-main">
            <section>
                <div className="container account-forms-container account-forms-container-width">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form id="contact-card-owner-form" onSubmit={handleSubmit}>
                                <fieldset>
                                    <div className="form-element form-input">
                                        <input className="form-element-field" placeholder=" " type="text" onChange={e => setFullName(e.target.value)} required />
                                        <div className="form-element-bar"></div>
                                        <label className="form-element-label"><i className="fas fa-portrait form-account-icon"></i>Your Name</label>
                                    </div>
                                    <div className="form-element form-input">
                                        <input className="form-element-field" placeholder=" " type="email" onChange={e => setEmail(e.target.value)} required />
                                        <div className="form-element-bar"></div>
                                        <label className="form-element-label"><i className="fas fa-at form-account-icon"></i>Your Email</label>
                                        <small className="form-element-hint">Don't worry, we won't spam you <i className="far fa-smile"></i></small>
                                    </div>
                                    <div className="form-element form-input">
                                        <input className="form-element-field" placeholder=" " type="password" onChange={e => setPassword(e.target.value)} required
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
                                        <label className="form-element-label"><i className="fas fa-lock form-account-icon"></i>Password</label>
                                    </div>
                                    <div className="form-element form-input">
                                        <input className="form-element-field" placeholder=" " type="password" onChange={e => setPasswordRepeat(e.target.value)} required />
                                        <div className="form-element-bar"></div>
                                        <label className="form-element-label"><i className="fas fa-user-check form-account-icon"></i>Repeat your password</label>
                                    </div>
                                    <div className="agree-to-policy-div">
                                        <input type="checkbox" id="isChecked" value="" name="isChecked" checked={isAgreeToStatementsChecked} onChange={() => setAgreeToStatementsChecked(!isAgreeToStatementsChecked)} />
                                        <label className="regist-checkbox-label" htmlFor="isChecked">
                                            <span>
                                                I agree all statements in <a href={clientUrl + "/Policy"} target="_blank" rel="noopener noreferrer">Terms of service</a> of <strong>iStore</strong>
                                            </span>
                                            <span className="regist-checkbox-span"></span>
                                        </label>
                                    </div>
                                </fieldset>
                                <div className="form-actions">
                                    <button disabled={!isFieldsOK} className="form-btn" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure className="form-account-image"><img src="/images/signup-image.png" alt="sing up" /></figure>
                            <span className="signup-image-link"><Link to="/Login" className="link-to-login">I am already member</Link></span>
                        </div>
                    </div>
                </div>
            </section>
            <ReactTooltip place="right" type="info" effect="solid" />
        </div>
    )
}