import React from 'react'
import emailjs from '@emailjs/browser'
import {useNavigate} from 'react-router-dom';

const ContactForm = () => {
  const navigate = useNavigate();
  
  const sendEmail = (e) =>{
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        "portfolio_page",
        e.target,
        process.env.REACT_APP_API_KEY
      )
      .then(
        () => {
          alert ('Thanks!')
          e.target.reset()
          navigate("/")
      },
        (error) => {
          alert("Can't handle message at the moment Sorry about that.")
          e.target.reset();
          navigate("/");
        }
      );
    }
  return (
    <form className="Contact-form-main" onSubmit={sendEmail}>
      <div className="Contact-form-div">
        <div className="Form-nest-div">
          <label htmlFor="form" className="Form-label">
            First Name <span className="required"> * </span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="Form-input"
            name="First Name"
            required
          />
        </div>

        <div className="Form-nest-div">
          <label htmlFor="form" className="Form-label">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="Form-input"
            name="Last Name"
          />
        </div>

        <div className="Form-nest-div">
          <label htmlFor="form" className="Form-label">
            Email <span className="required"> * </span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="Form-input"
            name="Email"
            required
          />
        </div>

        <div className="Form-nest-div">
          <label htmlFor="form" className="Form-label">
            Phone
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            className="Form-input"
            name="Number"
          />
        </div>
      </div>

      <div className="Form-message-div">
        <label className="Form-label" htmlFor="textarea">
          Message <span className="required">*</span>
        </label>

        <textarea
          type="text"
          className="Form-message"
          rows="12"
          name="Message"
          required
        />
      </div>

      <div className="Form-submit-div">
        <button type="submit" className="Form-submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default React.memo(ContactForm);
