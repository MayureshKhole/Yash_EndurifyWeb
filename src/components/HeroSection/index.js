import React from 'react'
import styled from 'styled-components';

import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton, HContainer } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpeg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const HeroSection = () => {

    const SocialMediaIcons = styled.div`
display: flex;
margin-top: 1rem;

align-items: center; // Ensure items are aligned vertically in the center
justify-content: center; // Center the buttons horizontally
`;

    const SocialMediaIcon = styled.a`
display: inline-block;
margin: 0 1rem;

align-items: center; // Ensure items are aligned vertically in the center
justify-content: center; // Center the buttons horizontally
font-size: 1.5rem;
color: ${({ theme }) => theme.text_primary};
transition: color 0.2s ease-in-out;
&:hover {
  color: ${({ theme }) => theme.primary};
}
`;
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <SocialMediaIcons>
                            <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
                        </SocialMediaIcons>
                        <HContainer>
                            <Button href={Bio.resumeLink} target='display' variant="outline-primary">View Resume</Button>
                            <Button href={Bio.resumeLink} target='display' variant="outline-success">Hire Me</Button>
                        </HContainer>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src='https://media.licdn.com/dms/image/D4D03AQGTL1CcpvLOEw/profile-displayphoto-shrink_800_800/0/1671502448728?e=1718236800&v=beta&t=2viDAdITsDlP6gHR4KEEv_1Q0JuTQujhwo4jRB9EwoY' />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection