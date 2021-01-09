import React, { Component } from 'react';
// import { Form, Button, InputGroup, Container } from 'react-bootstrap';
import './Registration.css';
import AuthService from '../../Auth/AuthService';
// import Loader from '../Loader/Loader';
// import { Link } from 'react-router-dom';
// import { clientUrl } from '../../globals.js'

class Registration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Email: "",
            Password: "",
            submitPassword: "",
            isChecked: false,

            emailValid: false,
            passwordValid: false,
            submitPasswordValid: true,
            formValid: false,

            msg: "",
            isSucced: false,
            loading: false
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    validateField(fieldName, value) {
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let submitPasswordValid = this.state.submitPasswordValid;

        switch (fieldName) {
            case 'Email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/);
                break;
            case 'Password':
                passwordValid = value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/);
                submitPasswordValid = value === this.state.submitPassword;
                break;
            case 'SubmitPassword':
                submitPasswordValid = value === this.state.Password;
                break;
            default:
                break;
        }
        this.setState({
            emailValid: emailValid,
            passwordValid: passwordValid,
            submitPasswordValid: submitPasswordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid &&
                this.state.passwordValid &&
                this.state.submitPasswordValid &&
                this.state.isChecked
        });
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.name === 'isChecked' ? e.target.checked : e.target.value.trim();
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    handleRequiredControlClsName(name, nameValid) {
        return (name !== "") ?
            (nameValid) ?
                "is-valid-form-control"
                : "not-valid-form-control"
            : null
    }

    handleSubmit(e) {
        e.preventDefault();

        const newUser = {
            "Email": this.state.Email,
            "Password": this.state.Password
        }

        this.setState({ loading: true })
        AuthService.register(newUser)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push("/");
                window.location.reload();
            },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        isSucced: false,
                        msg: resMessage,
                        loading: false
                    });
                }
            );
    }

    render() {
        return (
            <div className="account-forms-main">
                <section class="signup">
                    <div class="container account-forms-container">
                        <div class="signup-content">
                            <div class="signup-form">
                                <h2 class="form-title">Sign up</h2>
                                <form method="POST" class="register-form" id="register-form">
                                    <div class="form-group">
                                        <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="name" id="name" placeholder="Your Name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="email"><i class="zmdi zmdi-email"></i></label>
                                        <input type="email" name="email" id="email" placeholder="Your Email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="pass" id="pass" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="localhost:3000" class="term-service">Terms of service</a></label>
                                    </div>
                                    <div class="form-group form-button">
                                        <input type="submit" name="signup" id="signup" class="form-submit" value="Register" />
                                    </div>
                                </form>
                            </div>
                            <div class="signup-image">
                                <figure><img src="images/signup-image.jpg" alt="sing up" /></figure>
                                <a href="localhost:3000" class="signup-image-link">I am already member</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Registration;