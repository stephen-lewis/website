import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import Background from './Background';
import theme from '../data/theme.json';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('Your Message');
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs.send(
      'smtp_server',
      'website_email',
      {
        name,
        email,
        message,
      },
      'user_vmad2Z1XkFeAJjNJaXaGQ',
    ).then(() => {
      console.log('Email sent')
      setEmailSent(true);
      setEmailError(false);
    }).catch((err) => {
      console.log('Error');
      console.log(err);
      setEmailSent(false);
      setEmailError(true);
    });
  };

  return (
    <>
      <a id="contact" />
      <section>
        <Background />
        <h2>Get in Touch</h2>
        <form onSubmit={submitHandler} className={emailSent || emailError ? 'hidden' : ''}>
          <input type="text" placeholder="Your Name" name="name" value={name} onChange={(e) => { e.persist(); setName(e.target.value); }} />
          <input type="email" placeholder="Your Email" name="email" value={email} onChange={(e) => { e.persist(); setEmail(e.target.value); }} />
          <textarea name="message" value={message} onChange={(e) => { e.persist(); setMessage(e.target.value); }} />
          <ReCAPTCHA sitekey="6LevqkAUAAAAANK8U34rWksba5uOIEHvVVwPEw9e" />
          <button type="submit">Send Message</button>
        </form>
      </section>
      <style jsx>{`
      section {
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start; justify-content: center;
        position: relative;
        min-height: 100vh; width: 100%;
        padding: 10vh 10vw;
        background-color: ${theme['background-dark']}; 
        color: ${theme['primary-dark']};
        scroll-snap-align: start; scroll-snap-stop: always;
      }
      
      h2 {
        width: 100%;
        font-size: 5rem;
        color: #666666;
        text-align: right;
        z-index: 10;
      }
      
      form {
        width: 40vw;
        display: flex;
        flex-flow: column wrap;
        z-index: 10;
        mix-blend-mode: difference;
      }
      
      input {
        margin: 1rem 0 0; padding: 0.5rem;
        border: 1px solid #ffffff;
      }
      
      textarea {
        height: 20vh;
        margin: 1rem 0; padding: 0.5rem;
      }
      
      button {
        display: block;
        margin: 1rem 0; padding: 1rem;
        border: 1px solid ${theme['secondary-light']};
        color: ${theme['primary-dark']};
        background-color: transparent;
        text-transform: uppercase;
        transition: 0.5s;
      }
      
      button:hover {
        border: 1px solid ${theme['secondary-dark']};
        color: ${theme['neutral-highlight']};
        transition: 0.5s;
        cursor: pointer;
      }
    `}
      </style>
    </>
  );
};

export default Contact;
