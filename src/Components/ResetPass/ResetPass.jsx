import React from "react";
import "./ResetPass.css";
import { Form, Button, Container, InputGroup, Col } from 'react-bootstrap';
import AuthService from '../../Auth/AuthService'
import { Link } from 'react-router-dom';

class ResetPass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            Password: "",
            SubmitPassword: "",
            passwordValid: false,
            submitPasswordValid: true,
            msg: "",
            isSucced: false,
            loading: false
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const token = this.props.match.params.token;
        AuthService.resetPasswordGet(token)
            .then((response) => {
                this.setState({ loading: false, isSucced: true, user: response.data.message });
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

    validateField(fieldName, value) {
        let passwordValid = this.state.passwordValid;
        let submitPasswordValid = this.state.submitPasswordValid;

        switch (fieldName) {
            case 'Password':
                passwordValid = value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/);
                submitPasswordValid = value === this.state.SubmitPassword;
                break;
            case 'SubmitPassword':
                submitPasswordValid = value === this.state.Password;
                break;
            default:
                break;
        }

        this.setState({
            passwordValid: passwordValid,
            submitPasswordValid: submitPasswordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid: this.state.passwordValid &&
                this.state.submitPasswordValid
        });
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value.trim();
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
        this.setState({ loading: true })
        let token = this.props.match.params.token;
        let passwordsObj = {
            Password: this.state.Password,
            ConfirmPassword: this.state.SubmitPassword
        }

        AuthService.resetPasswordPost(token, passwordsObj)
            .then((response) => {
                this.setState({ loading: false, isSucced: true, msg: response.data.message });
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
            <Container className="reset-pass-div">
                <h2 className="authonticate-page-header">איפוס סיסמא</h2>
                {
                    !this.state.user ?
                        <div className={'register-msg forgot-password-msg ' + (this.state.isSucced ? "success-msg" : "error-msg")}>
                            {this.state.msg}
                        </div> :

                        <div>
                            <h5 className="reset-password-email">איפוס סיסמא ל: {this.state.user.Email}</h5>
                            {
                                this.state.msg ?
                                    <div>
                                        <div className={'register-msg forgot-password-msg ' + (this.state.isSucced ? "success-msg" : "error-msg")}>
                                            {this.state.msg}
                                        </div>
                                        {this.state.isSucced && <Link className="reset-password-login-link" to="/login">התחבר »</Link>}
                                    </div> :

                                    <Col xs={12} md={6} lg={4} className="forgot-password-form">
                                        <Form onSubmit={this.handleSubmit}>

                                            <Form.Group>
                                                <Form.Label>
                                                    בחר סיסמא חדשה:
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

                                            <Button className="register-button" variant="primary" type="submit" disabled={!this.state.formValid}>
                                                עדכן את הסיסמא
                                        </Button>
                                        </Form>
                                    </Col>
                            }
                        </div>
                }
            </Container>
        )
    }
}

export default ResetPass;