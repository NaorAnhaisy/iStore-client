import React, { Component } from 'react'
import { Form, Button, InputGroup, Container } from 'react-bootstrap';
import './Login.css'
import AuthService from '../../Auth/AuthService'
import { Link } from "react-router-dom";

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
            <Container className="login-div">
                <div className="title-div">
                    <h2 className="authonticate-page-header">התחברות</h2>
                </div>
                <Form className="regist-login-form" onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>
                            דוא"ל:
                        </Form.Label>
                        <InputGroup>
                            <Form.Control
                                className="attached-icon-form"
                                type="text"
                                name="Email"
                                onChange={(event) => this.handleUserInput(event)}
                                placeholder="example@example.com" />
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">
                                    <img src="/images/email.png" alt="lock" className="attached-image-form" />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>
                            סיסמא:
                    </Form.Label>
                        <InputGroup>
                            <Form.Control
                                className="attached-icon-form icon-inside-form"
                                type={this.state.passwordType}
                                name="Password"
                                onChange={(event) => this.handleUserInput(event)}
                                placeholder="סיסמא" />
                            <img src={"/images/" + this.state.iconUrl + ".png"} onClick={this.tooglePassType} alt="eye icon" className="attached-image-form inside-icon eye-icon" />
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">
                                    <img src="/images/locker.png" alt="lock" className="attached-image-form" />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </Form.Group>
                    <Button className="login-button" variant="light" type="submit" disabled={this.disableSubmit()}>
                        {this.state.loading ?
                            "טוען..." :
                            "התחבר"}
                    </Button>
                    <div className="links-div">
                        <div className="register-link">
                        אין לכם עדיין משתמש אצלנו? <Link className="login-link" to="/register">הירשמו כאן »</Link>
                        </div>
                        <Link className="login-link forgot-password-link" to="/login/forgot">שכחת את הסיסמא?</Link>
                    </div>

                    {
                        this.state.msg !== "" &&
                        <div className={'register-msg ' + (this.state.isSucced ? "success-msg" : "error-msg")}>
                            {this.state.msg}
                        </div>
                    }
                </Form>
            </Container>
        )
    }
}

export default Login;