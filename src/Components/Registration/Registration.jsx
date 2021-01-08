import React, { Component } from 'react';
import { Form, Button, InputGroup, Container } from 'react-bootstrap';
import './Registration.css';
import AuthService from '../../Auth/AuthService';
// import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { clientUrl } from '../../globals.js'

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
            <Container className="registration-div">
                {this.state.loading ?
                    <Loader /> :
                    <>
                        <div className="title-div">
                            <h2 className="authonticate-page-header">הרשמה ל- Bucard</h2>
                        </div>
                        {
                            (this.state.msg !== "" && this.state.isSucced) ?
                                <div>
                                    <span className="msg success-msg">
                                        {this.state.msg}
                                    </span>

                                    <a href={clientUrl + "/login"}>התחבר</a>
                                </div>
                                :
                                <Form className="regist-login-form" onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>
                                            דוא"ל:
                                        </Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                className={"attached-icon-form " + this.handleRequiredControlClsName
                                                    (this.state.Email, this.state.emailValid)
                                                }
                                                type="text"
                                                name="Email"
                                                autoComplete="off"
                                                onChange={(event) => this.handleUserInput(event)}
                                                placeholder="example@example.com" />
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroupPrepend">
                                                    <img src="/images/email.png" alt="lock" className="attached-image-form" />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                        </InputGroup>
                                        {!this.state.emailValid && this.state.Email !== '' &&
                                            <span className="error">
                                                דוא"ל לא תקין
                                    </span>
                                        }
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>
                                            סיסמא:
                                </Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                className={"attached-icon-form " + this.handleRequiredControlClsName
                                                    (this.state.Password, this.state.passwordValid)
                                                }
                                                type="password"
                                                name="Password"
                                                onChange={(event) => this.handleUserInput(event)}
                                                placeholder="סיסמא" />
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroupPrepend">
                                                    <img src="/images/locker.png" alt="lock" className="attached-image-form" />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                        </InputGroup>
                                        {!this.state.passwordValid && this.state.Password !== '' &&
                                            <span className="error">
                                                סיסמא לא תקינה
                                    </span>
                                        }
                                        <span className="note">
                                            <br />
                                     סיסמא צריכה להכיל 6 תווים לפחות, הכוללת מספרים, אותיות גדולות וקטנות באנגלית בלבד.
                                </span>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>
                                            חזור שנית על הסיסמא:
                                        </Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                type="password"
                                                name="SubmitPassword"
                                                className="attached-icon-form"
                                                onChange={(event) => this.handleUserInput(event)}
                                                placeholder="אמת סיסמא" />
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroupPrepend">
                                                    <img src="/images/verifyPassword.png" alt="verifyPass" className="attached-image-form" />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                        </InputGroup>
                                        {!this.state.submitPasswordValid &&
                                            <span className="error">
                                                הסיסמאות לא תואמות
                                            </span>
                                        }
                                    </Form.Group>
                                    <br />


                                    <div className="registration-checkbox-exp">
                                        <div className="registration-checkbox">
                                            <div>

                                                <input type="checkbox" id="isChecked" value="" name="isChecked" checked={this.state.isChecked} onChange={this.handleUserInput} />
                                                <label className="regist-checkbox-label" htmlFor="isChecked">

                                                    <span className="regist-checkbox-span"></span>
                                                    <span>

                                                            אני מאשר/ת שקראתי ושהסכמתי ל<a href={clientUrl + "/policy"} target="_blank" rel="noopener noreferrer">תנאי השימוש ומדיניות</a> של <strong>Bucard</strong>.
                                                    </span>

                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="register-button" variant="primary" type="submit" disabled={!this.state.formValid}>
                                        הירשמו
                                        </Button>

                                    <div className="links-div registration-login-link">
                                        יש לכם כבר משתמש? <Link className="login-link " to="/login">היכנסו לחשבון »</Link>
                                    </div>

                                    {
                                        this.state.msg !== "" &&
                                        <div className='register-msg error-msg'>
                                            {this.state.msg}
                                        </div>
                                    }
                                </Form >
                        }
                    </>
                }
            </Container >
        )
    }
}

export default Registration;