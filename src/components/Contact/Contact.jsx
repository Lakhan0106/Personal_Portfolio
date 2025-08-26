import React, { useState } from 'react';
import './Contact.css';
import theme_pattren from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "5999b106-478d-437b-bcea-fe9f477c7bc6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult("❌ " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattren} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to connect with me.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>lakhanraut709@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+91-9284247867</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Saoner, Nagpur, Maharashtra, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" required />
          
          <label>Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" required />
          
          <label>Write Your Message Here</label>
          <textarea name="message" rows="8" placeholder="Enter Your Message" required></textarea>
          
          <button type="submit" className="contact-submit">Submit Now</button>
          <p className="form-result">{result}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
