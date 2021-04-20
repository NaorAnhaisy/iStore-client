import React, { useState } from "react";
import "./ContactUs.css";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { FormLabel } from "@material-ui/core";
// import axios from 'axios';

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
    fontFamily: "inherit"
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const contactData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      askType: askType,
      message: message,
    };

    console.log(contactData);

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
  };

  return (
    <div className="p-3">
      <h1 className="form-title contact-us-header">Contact Us</h1>
      <p className="contact-us-subtitle">
        Any questions or remarks? Just write us a message!
      </p>

      <div className="contact-us-form-main account-forms-container contact-us-form-container-width signup-content">
        <div className="signup-image contact-us-info-panel">
          <h4>Contact Information</h4>
          <p>Fill up the form and our team will back to you within 24 hours.</p>
          <table cellPadding={5} className="contact-us-info-table">
            <tbody>
              <tr>
                <td>
                  <PhoneIcon />
                </td>
                <td>
                  <a href="tel:0525561128">+972 5561128</a>
                </td>
              </tr>
              <tr>
                <td>
                  <EmailIcon />
                </td>
                <td>
                  <a href="mailto:naor.anhaisy123@gmail.com?subject=Mail from iStore">
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
                  type="text"
                  spellCheck="false"
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
              <FormLabel className={classes.radioFormLabel} component="legend">What type of ask you need?</FormLabel>
              <RadioGroup
                className={classes.radioGroup}
                aria-label="quiz"
                name="quiz"
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

            <div className="form-actions">
              <button className="form-btn" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
