import React from "react";
import "./ForgotPass.css";
import { Form, Button, Container, InputGroup, Col } from 'react-bootstrap';
import AuthService from '../../Auth/AuthService';
import { Link } from 'react-router-dom';
// import Loader2 from '../Loader2/Loader2';

class ForgotPass extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      Email: "",
      msg: "",
      isSucced: false,
      loading: false
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true })
    let userEmail = { Email: this.state.Email }

    AuthService.forgotPassword(userEmail)
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

    this.emailInputRef.value = ""
    this.setState({ Email: "" })
  }

  render() {
    return (
      <Container className="forgot-pass-div">
        <h2 className="authonticate-page-header">שכחתי סיסמא</h2>
        <Col xs={12} md={6} lg={4} className="forgot-password-form">
          <Form onSubmit={this.handleSubmit} className="regist-login-form">
            <Form.Group>
              <Form.Label>
                הזן את כתובת הדוא"ל שלך:
              </Form.Label>
              <InputGroup>
                <Form.Control
                  className="attached-icon-form"
                  type="text"
                  name="Email"
                  ref={(el) => this.emailInputRef = el}
                  onChange={(event) => this.handleUserInput(event)}
                  placeholder="example@example.com" />
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">
                    <img src="/images/email.png" alt="lock" className="attached-image-form" />
                  </InputGroup.Text>
                </InputGroup.Prepend>
              </InputGroup>
            </Form.Group>
            {this.state.loading ?
              <Loader2 />
              :
              <div className="forgot-password-btn-div">
                <Button type="submit" disabled={this.state.Email.trim() === ''}>
                  <span>שלח לי קישור למייל!</span>
                </Button>
                <Button variant="secondary" className="forgot-password-back-btn" as={Link} to="/login">
                  <span>חזור</span>
                </Button>
              </div>
            }
          </Form>
        </Col>
        {
          this.state.msg !== "" && !this.state.loading &&
          <div className={'register-msg forgot-password-msg ' + (this.state.isSucced ? "success-msg" : "error-msg")}>
            {this.state.msg}
          </div>
        }
      </Container>
    )
  }
}

export default ForgotPass;