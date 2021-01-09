import React, { Component } from 'react'
// import { Form, Button, InputGroup, Container } from 'react-bootstrap';
import './Login.css'
import AuthService from '../../Auth/AuthService'
// import { Link } from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Email: "",
            Password: "",

            passwordType: 'password',
            iconUrl: 'noSeePass',

            msg: "",
            isSucced: false,

            loading: false
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.tooglePassType = this.tooglePassType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value.trim();
        this.setState({ [name]: value });
    }

    tooglePassType() {
        let newType = this.state.passwordType === 'text' ? { type: 'password', iconUrl: 'noSeePass' } : { type: 'text', iconUrl: 'seePass' }
        this.setState({ passwordType: newType.type, iconUrl: newType.iconUrl });
    }

    disableSubmit() {
        return this.state.Email === "" ||
            this.state.Password === "";
    }

    handleSubmit(e) {
        e.preventDefault();

        const userToLog = {
            "Email": this.state.Email,
            "Password": this.state.Password
        }

        this.setState({ loading: true })
        AuthService.login(userToLog)
            .then(() => {
                this.setState({ loading: false })
                this.props.history.push("/mycards");
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
                        loading: false,
                        msg: resMessage,
                        isSucced: false
                    });
                }
            );
    }

    render() {
        return (
            <div class="account-forms-main">
                <section class="sign-in">
                    <div class="container account-forms-container">
                        <div class="signin-content">
                            <div class="signin-image">
                                <figure><img src="/images/signin-image.jpg" alt="sing up" /></figure>
                                <a href="localhost:3000" class="signup-image-link">Create an account</a>
                            </div>

                            <div class="signin-form">
                                <h2 class="form-title">Sign up</h2>
                                <form method="POST" class="register-form" id="login-form">
                                    <div class="form-group">
                                        <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="your_name" id="your_name" placeholder="Your Name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                        <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                                    </div>
                                    <div class="form-group form-button">
                                        <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" />
                                    </div>
                                </form>
                                <div class="social-login">
                                    <span class="social-label">Or login with</span>
                                    <ul class="socials">
                                        <li><a href="localhost:3000"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                        <li><a href="localhost:3000"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                        <li><a href="localhost:3000"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Login;