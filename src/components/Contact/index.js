import React, { useRef, useState } from 'react';
import styled from 'styled-components';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  padding: 0 1rem;
  gap: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  width: 80vw;
  // background-color: red;
`;

const ContactCard = styled.div`
  background-color: ${({ theme }) => theme.background_light};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 280px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
  }
`;

const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const ContactTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactDetail = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 0.5rem;
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.background_light};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.background_light};
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 1rem;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  background-color: ${({ theme }) => theme.background_light};
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 1rem;
  resize: vertical;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const FormButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  font-weight: 600;
  border: none;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary_dark};
  }
`;

const GifContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  width: 100%;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ContactFormContainer = styled.div`
  display: flex;
  gap: 5em;
  margin-bottom: 2em;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_oztbtf2', 'template_iakje9p', formRef.current, 'user_ibiZsSHmzJLcSHLFR')
      .then(() => {
        setOpenSnackbar(true);
        formRef.current.reset();
      })
      .catch((error) => console.error('Failed to send email:', error));
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact Us</Title>
        <Desc>Get in touch with us for any inquiries or opportunities!</Desc>
        
        <ContactInfoWrapper>
          <ContactCard>
            <IconWrapper><PhoneIcon style={{ fontSize: 36 }} /></IconWrapper>
            <ContactTitle>Contact Phone Number</ContactTitle>
            <ContactDetail>+91 9561342753</ContactDetail>
          </ContactCard>
          
          <ContactCard>
            <IconWrapper><EmailRoundedIcon style={{ fontSize: 36 }} /></IconWrapper>
            <ContactTitle>Email Address</ContactTitle>
            <ContactDetail>mbkhole@gmail.com</ContactDetail>
          </ContactCard>
          
          <ContactCard>
            <IconWrapper><LocationOnRoundedIcon style={{ fontSize: 36 }} /></IconWrapper>
            <ContactTitle>Location</ContactTitle>
            <ContactDetail>Shivneri Colony, Pimple Gurav, Pune</ContactDetail>
          </ContactCard>
        </ContactInfoWrapper>
        
        <ContactFormContainer>
          <GifContainer>
            <img src="https://i.pinimg.com/originals/cd/59/d6/cd59d626dc86397fe45080e6e9c7027d.gif" alt="Contact us" />
          </GifContainer>
          
          <ContactForm ref={formRef} onSubmit={handleSubmit}>
            <FormInput type="email" name="from_email" placeholder="Your Email" required />
            <FormInput type="text" name="from_name" placeholder="Your Name" required />
            <FormInput type="text" name="subject" placeholder="Subject" required />
            <FormTextarea name="message" placeholder="Message" rows="4" required />
            <FormButton type="submit">Send Message</FormButton>
          </ContactForm>

        </ContactFormContainer>
        
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          message="Message sent successfully!"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;






