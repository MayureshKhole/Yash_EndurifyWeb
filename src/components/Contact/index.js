import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  // background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  // box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 16px;
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  height:6rem;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 16px;
  }
`;

const GifContainer = styled.div`
  width: 50%; /* Adjust as needed */
  display: flex;
  margin-top:3rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;


const Per = styled.div`
  display: flex;
  gap: 6rem;
  background-color: none;
  border-radius: 3rem;
  width: 80rem;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    width: auto;
    gap: 1rem; /* Reduce gap on smaller screens */
  }
`;


const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: #FFC470;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`
const CCard = styled.div`
  display: flex;
  width:24.4rem;
  height:10rem;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);


  @media (max-width: 768px) {
    max-width: 100%;  // Allow the card to fill the container on small screens
    padding: 10px;
  }
  
  @media (min-width: 950px) and (max-width: 1200px) {
    width: 20rem;  // Reduce width for medium screens
    padding: 15px;  // Adjust padding if necessary
  }

`;

const Mcard = styled.div`
display:flex;
gap: 3rem;
padding: 20px;
padding-right:4.2rem;

@media (max-width: 960px) {
  display: none;  // Hides the Mcard on smaller screens
}
`

const Tit = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Description = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;


const Contact = () => {

  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }



  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <Mcard>

          <CCard>
            <PhoneIcon style={{ fontSize: 36, color: '#FFC470' }} />
            <Tit>Contact Phone Number</Tit>
            <Description>+91 9561342753</Description>
          </CCard>

          <CCard>
            <EmailRoundedIcon style={{ fontSize: 36, color: '#FFC470' }} />
            <Tit>My Email Address</Tit>
            <Description>mbkhole@gmail.com</Description>
          </CCard>
          
          <CCard>
            <LocationOnRoundedIcon style={{ fontSize: 36, color: '#FFC470' }} />
            <Tit>My Location</Tit>
            <Description>Shivneri Colony , Pimple Gurav, Pune</Description>
          </CCard>

          
        </Mcard>
        <Per>
          <GifContainer>
            <img src="https://i.pinimg.com/originals/cd/59/d6/cd59d626dc86397fe45080e6e9c7027d.gif" alt="Contact us" />
          </GifContainer>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactInput placeholder="Your Email" name="from_email" />
            <ContactInput placeholder="Your Name" name="from_name" />
            <ContactInput placeholder="Subject" name="subject" />
            <ContactInputMessage placeholder="Message" rows="2" name="message" />
            <ContactButton type="submit" value="Send Email" />
          </ContactForm>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            message="Email sent successfully!"
            severity="success"
          />

        </Per>
      </Wrapper>
    </Container>
  )
}

export default Contact