import React from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top:3rem;
    background-color:#F9F9F9;
`;

const LeftSection = styled.div`
    display: none; /* Hide on mobile devices */
    @media (min-width: 769px) {
       
        justify-content: center;
        align-items: center;
        flex: 1;
    }
`;

const RightSection = styled.div`
    display: none; /* Hide on mobile devices */
    @media (min-width: 769px) {
        
        justify-content: center;
        align-items: center;
        flex: 1;
    }
`;


const MiddleSection = styled.div`
    flex: 3;
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
    padding: 0 20px;
`;

export const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    width: 100%;
    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
    width: 100%;
    max-width: 1100px; /* Updated max-width for responsiveness */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Skill = styled.div`
    width: 100%;
    max-width: 800px; /* Adjusted max-width for the card */
    background: ${({ theme }) => theme.card};
    border: 0.1px solid #854ce6;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    padding: 18px 36px;
    margin-bottom: 40px; /* Increased bottom margin for better separation */
    margin-left: auto; /* Align card to the center */
    margin-right: auto; /* Align card to the center */
`;

const SkillTitle = styled.h2`
    font-size: 28px;
    font-weight: 600;
    
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 20px;
    text-align: center;
    width: 100%; /* Ensure title spans the full width */
`;


const SkillList = styled.div`
    display: flex;
    flex-wrap: wrap; /* Allow items to wrap onto multiple lines */
    justify-content: center; /* Center items horizontally */
    gap: 12px; /* Add some horizontal spacing between items */
`;

const SkillItem = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 80};
    border: 1px solid ${({ theme }) => theme.text_primary + 80};
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px; /* Add some bottom margin for spacing */
    text-align: center; /* Center text */
    flex: 0 0 calc(20% - 12px); /* Adjust item width for five items per row */
    
    @media (max-width: 768px) {
        flex: 0 0 auto; /* Reset item width for one item per row */
        width: 100%; /* Set width to 100% for full width on smaller screens */
    }
`;

const SkillImage = styled.img`
    flex-direction: column;
    width: 24px;
    height: 24px;
`;


const Gif = styled.img`
    width:10rem;
    margin-left: 0;
`
const Skills = () => {
    return (
        <Container id="skills">
            <LeftSection>
                <Gif src='https://raw.githubusercontent.com/VatsalJagani/VatsalJagani/develop/resources/skills.gif' />
            </LeftSection>
            <MiddleSection>
                <Wrapper>
                    <Title>Skills</Title>
                    <Desc>
                        Here are some of my skills on which I have been working for the past 2 years.
                    </Desc>

                    <SkillsContainer>
                        {skills.map((skill) => (
                            <Skill key={skill.title}>
                                <SkillTitle>{skill.title}</SkillTitle>
                                <SkillList>
                                    {skill.skills.map((item, index) => (
                                        <SkillItem key={index}>
                                            <SkillImage src={item.image} />
                                            {item.name}
                                        </SkillItem>
                                    ))}
                                </SkillList>
                            </Skill>
                        ))}
                    </SkillsContainer>
                </Wrapper>
            </MiddleSection>
            <RightSection>
                <Gif src='https://raw.githubusercontent.com/VatsalJagani/VatsalJagani/develop/resources/skills.gif' />
            </RightSection>
        </Container>
    );
};

export default Skills;
