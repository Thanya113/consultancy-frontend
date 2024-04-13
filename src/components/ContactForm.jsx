import React, { useRef } from 'react';
import brand from '../assets/company.png';

import './home.css'; // Import your CSS file for styling

const ContactForm = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    // Here you can implement your own logic to handle the form submission
    const formData = new FormData(form.current);
    const email = formData.get('user_email');
    const phoneNumber = formData.get('user_phone');
    const message = formData.get('message');

    // Example of handling the form data
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Message:', message);

    // You can add your own logic here, such as sending the form data to a backend server
    // For demonstration purposes, we're just logging the form data to the console
    alert('Message sent, thank you!');
    form.current.reset(); // Clear form fields
  };

  return (
    <section className="contact">
      <div className="contact-card">
        <div className="contact-image">
          <img src={brand} alt="Contact" />
        </div>
        <div className="contact-fields">
          <h3>Contact Us</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                id="phoneNumber"
                name="user_phone"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="comments"
                name="message"
                rows="4"
                placeholder="Comments"
                required
              ></textarea>
            </div>
            <button type="submit" value="Send">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
