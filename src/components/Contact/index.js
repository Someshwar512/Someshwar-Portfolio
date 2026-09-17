// src/components/Contact.js

import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Snackbar, Alert } from "@mui/material";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1350px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: rgb(255, 206, 99);
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: rgb(169, 137, 12);
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: rgb(122, 99, 7);
`;

const ContactInput = styled.input`
  flex: 1;
  border: 1px solid #ccc;
  outline: none;
  font-size: 18px;
  border-radius: 12px;
  padding: 12px 16px;
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  border: 1px solid #ccc;
  outline: none;
  font-size: 18px;
  border-radius: 12px;
  padding: 12px 16px;
`;

const ContactButton = styled.button`
  width: 100%;
  text-align: center;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_603cxki", // Replace with your EmailJS service ID
        "template_mbgwdso", // Replace with your EmailJS template ID
        form.current,
        "FgkINVv9NGFKta8-H" 

      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.error("Email send failed!", error.text);
          setErrorOpen(true);
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <input type="hidden" name="to_email" value="youhubtech@gmail.com" />
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" rows="4" name="message" required />
          <ContactButton type="submit">Send</ContactButton>
        </ContactForm>

        <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
          <Alert onClose={() => setOpen(false)} severity="success">
            Email sent successfully!
          </Alert>
        </Snackbar>

        <Snackbar open={errorOpen} autoHideDuration={4000} onClose={() => setErrorOpen(false)}>
          <Alert onClose={() => setErrorOpen(false)} severity="error">
            Failed to send email. Please try again.
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
