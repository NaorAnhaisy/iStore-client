import React, { useEffect, useState } from "react";
import "./ResetPass.css";
// import { Form, Button, Container, InputGroup, Col } from 'react-bootstrap';
// import AuthService from '../../Auth/AuthService'
// import { Link } from 'react-router-dom';

export default function ResetPass(props) {

    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [isValidToken, setTokenValid] = useState(true);

    useEffect(() => {
        setTokenValid(true);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            "password": password,
            "repeatPassword": repeatPassword
        }

        console.log(userData)
        //     this.setState({ loading: true })
        //     let token = this.props.match.params.token;
        //     let passwordsObj = {
        //         Password: this.state.Password,
        //         ConfirmPassword: this.state.SubmitPassword
        //     }

        //     AuthService.resetPasswordPost(token, passwordsObj)
        //         .then((response) => {
        //             this.setState({ loading: false, isSucced: true, msg: response.data.message });
        //         },
        //             error => {
        //                 const resMessage =
        //                     (error.response &&
        //                         error.response.data &&
        //                         error.response.data.message) ||
        //                     error.message ||
        //                     error.toString();

        //                 this.setState({
        //                     loading: false,
        //                     msg: resMessage,
        //                     isSucced: false
        //                 });
        //             }
        //         );
    }

    return (
        <div className="account-forms-main">
            <section>
                <div className="container account-forms-container">
                    <div className="signup-content">
                        {!isValidToken ?
                            <div className="forgot-pass-form">
                                <h2>Nope... Haven't seen that coming...</h2>
                                <h5>Looks like that page doesn't exist... Are you sure you came for the right place?</h5>
                                <figure><img src="/images/illustrations/error-404-page-not-found.jpg" alt="404 not found" className="undragablle-image" /></figure>
                            </div>
                            :
                            <div className="forgot-pass-form container-xxl">
                                <h2 className="form-title">Reset Password</h2>
                                <h5>Awesome. Now just give yourself a new password.</h5>
                                <h6>Remember to remember it this time <i className="far fa-smile-wink"></i></h6>

                                <form id="contact-card-owner-form" onSubmit={handleSubmit}>
                                    <fieldset>
                                        <div className="form-element form-input">
                                            <input className="form-element-field" placeholder=" " type="password" onChange={e => setPassword(e.target.value)} required />
                                            <div className="form-element-bar"></div>
                                            <label className="form-element-label"><i className="fas fa-lock login-icon"></i>New Password</label>
                                        </div>
                                        <div className="form-element form-input">
                                            <input className="form-element-field" placeholder=" " type="password" onChange={e => setRepeatPassword(e.target.value)} required />
                                            <div className="form-element-bar"></div>
                                            <label className="form-element-label"><i className="fas fa-user-check login-icon"></i>And repeat that password ...</label>
                                        </div>
                                    </fieldset>
                                    <div className="form-actions">
                                        <button disabled className="form-btn" type="submit"><i className="fas fa-check-double reset-password-check-icon"></i>Good to Go!</button>
                                    </div>
                                </form>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}