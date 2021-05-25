import React, { useState, useEffect } from "react";
import "./ContactUs.css";
import AOS from "aos";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import RotateLoader from "../Loaders/RotateLoader/RotateLoader";
// import axios from "axios";
// import { serverApiUrl } from "../../globals";

const radioOptions = ["First Option", "Second Option", "Third Option", "Other"];

const useStyles = makeStyles((theme) => ({
  radioGroup: {
    display: "inline",
    textAlign: "left",
  },
  radioRoot: {
    marginLeft: "0px",
  },
  radioLabel: {
    fontFamily: "inherit",
  },
  radioFormLabel: {
    fontFamily: "inherit",
  },
  formControl: {
    display: "block",
    textAlign: "left",
  },
}));

export default function ContactUs() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [askType, setAskType] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSendSucced, setIsSendSucced] = useState(false);
  const [returnedMessage, setReturenedMessage] = useState(null);
  const [returnedSubMsg, setReturnedSubMsg] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);
    const contactData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      askType: askType,
      message: message,
    };

    console.log(contactData);

    setTimeout(() => {
      setIsLoading(false);
      setIsSendSucced(true);
      setReturenedMessage(
        "Message sent Succesfully!"
      );
      setReturnedSubMsg(
        "We will be back to you as soon as we can."
      );
    }, 2000);

    // try {
    //   axios
    //     .post(serverApiUrl + "/general/ContactUs", contactData)
    //     .then((response) => {
    //       setIsLoading(false);
    //       setIsSendSucced(true);
    //       setReturenedMessage(response.data.message);
    //       setReturnedSubMsg(response.data.subMessage);
    //     })
    //     .catch((err) => {
    //       const resMessage =
    //         (err.response && err.response.data && err.response.data.message) ||
    //         err.message ||
    //         err.toString();

    //       console.error(resMessage);

    //       setIsLoading(false);
    //       setIsSendSucced(false);
    //       setReturenedMessage(resMessage);
    //     });
    // } catch (error) {
    //   console.error(error);
    //   setIsLoading(false);
    //   setIsSendSucced(false);
    //   setReturenedMessage(error);
    // }
  };

  return (
    <div className="p-3"
      data-aos="fade-zoom-in"
      data-aos-once={true}
      data-aos-duration="500"
    >
      <h1 className="form-title contact-us-header">Contact Us</h1>
      <p className="contact-us-subtitle">
        Any questions or remarks? Just write us a message!
      </p>

      <div className="contact-us-form-main account-forms-container contact-us-form-container">
        <div className="contact-us-info-panel">
          <h4>Contact Information</h4>
          <p>Fill up the form and our team will back to you within 24 hours.</p>
          <table cellPadding={5} className="contact-us-info-table">
            <tbody>
              <tr>
                <td>
                  <PhoneIcon />
                </td>
                <td>
                  <a href="tel:0525561128" className="contact-us-our-info">+972 5561128</a>
                </td>
              </tr>
              <tr>
                <td>
                  <EmailIcon />
                </td>
                <td>
                  <a href="mailto:naor.anhaisy123@gmail.com?subject=Mail from iStore" className="contact-us-our-info">
                    naor.anhaisy123@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <RoomIcon />
                </td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-us-our-info"
                    href="https://www.google.com/maps/search/?api=1&query=Rabinovich St. 38, Holon, Israel"
                  >
                    Rabinovich St. 38, Holon, Israel
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="socials-contact-us">
            <ul className="socials">
              <li>
                <a href="https://example.com">
                  <i className="display-flex-center zmdi zmdi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://example.com">
                  <i className="display-flex-center zmdi zmdi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://example.com">
                  <i className="display-flex-center zmdi zmdi-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://example.com">
                  <i className="display-flex-center zmdi zmdi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="signup-form contact-us-form">
          {returnedMessage && isSendSucced ? (
            <p
              data-aos="fade-zoom-in"
              data-aos-once={true}
              data-aos-duration="600"
              className="forgot-pass-msg succes-msg succes-msg-background contact-us-succes-msg"
            >
              {returnedMessage}
              {returnedSubMsg && (
                <>
                  <br />
                  <span className="contact-us-succes-submsg">
                    {returnedSubMsg}
                  </span>
                </>
              )}
            </p>
          ) : (
            <form id="contact-card-owner-form" onSubmit={handleSubmit}>
              <fieldset className="contact-us-fieldset">
                <div
                  className="form-element form-input"
                  style={{ marginRight: "20px" }}
                >
                  <input
                    className="form-element-field"
                    placeholder=" "
                    type="text"
                    spellCheck="false"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <div className="form-element-bar"></div>
                  <label className="form-element-label">
                    <i className="fas fa-user form-account-icon"></i>
                    First Name
                  </label>
                </div>
                <div className="form-element form-input">
                  <input
                    className="form-element-field"
                    placeholder=" "
                    type="text"
                    spellCheck="false"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <div className="form-element-bar"></div>
                  <label className="form-element-label">Last Name</label>
                </div>
              </fieldset>
              <fieldset className="contact-us-fieldset contact-us-2nd-fieldset">
                <div
                  className="form-element form-input"
                  style={{ marginRight: "20px" }}
                >
                  <input
                    className="form-element-field"
                    placeholder=" "
                    type="email"
                    spellCheck="false"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="form-element-bar"></div>
                  <label className="form-element-label">
                    <i className="fas fa-at form-account-icon"></i>
                    Mail
                  </label>
                </div>
                <div className="form-element form-input">
                  <input
                    className="form-element-field"
                    placeholder=" "
                    type="tel"
                    pattern="[0-9()#&+*-=.]+"
                    title="Allowed to use only numbers & Phone Characters (#, -, *,)."
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                  <div className="form-element-bar"></div>
                  <label className="form-element-label">
                    <i className="fas fa-phone form-account-icon"></i>
                    Phone
                  </label>
                </div>
              </fieldset>
              <FormControl className={classes.formControl} component="fieldset">
                <FormLabel
                  className={classes.radioFormLabel}
                >
                  What type of ask you need?
                </FormLabel>
                <br/>
                <RadioGroup
                  className={classes.radioGroup}
                  aria-label="askType"
                  name="askType"
                  value={askType}
                  onChange={(e) => setAskType(e.target.value)}
                >
                  {radioOptions.map((value, i) => {
                    return (
                      <FormControlLabel
                        value={value}
                        key={i}
                        control={<Radio required color="primary" />}
                        label={value}
                        classes={{
                          root: classes.radioRoot,
                          label: classes.radioLabel,
                        }}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>

              <div className="form-element form-input">
                <textarea
                  className="form-element-field"
                  required
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <div className="form-element-bar"></div>
                <label className="form-element-label">
                  <i className="fas fa-comment-dots form-account-icon"></i>
                  Message
                </label>
              </div>

              {isLoading ? (
                <div
                  data-aos="fade-zoom-in"
                  data-aos-once={true}
                  data-aos-duration="1600"
                >
                  <RotateLoader className="contact-us-rotate-loader" />
                </div>
              ) : (
                <>
                  <div className="form-actions contact-us-form-submit-div">
                    <button className="form-btn" type="submit">
                      Send Message
                    </button>
                  </div>
                  {returnedMessage && !isSendSucced && (
                    <p
                      data-aos="fade-zoom-in"
                      data-aos-once={true}
                      data-aos-duration="500"
                      className="error-msg error-msg-background contact-us-error-msg"
                    >
                      {returnedMessage}
                    </p>
                  )}
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
