import React from 'react'

// import global styles
import {
    FlexContainer,
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    BlueText,
} from '../styles/Global.styled';

// import My Skills styles
import {
    SkillsCardContainer,
    SkillsCard,
} from '../styles/MySkills.styled';

import { Skills } from '../utils/Data';

const MySkills = () => {
    return (
        <PaddingContainer
            id='Skills'
            top='10'
            bottom='10%'
        >
            <FlexContainer fullWidthChild>

                {/* --left-section-- */}
                <SkillsCardContainer>
                    {Skills.map((skill) => (
                        <SkillsCard>
                            <IconContainer size='5rem' color='blue'>
                                {skill.icon}
                            </IconContainer>
                            <Heading as='h4' size='h4'>
                                {skill.tech}
                            </Heading>
                        </SkillsCard>
                    ))}
                </SkillsCardContainer>

                {/* --right-section-- */}
                <div>
                    <Heading as='h4' size='h4'>
                        MY SKILLS
                    </Heading>

                    <Heading as='h2' size='h2' top='0.5rem'>
                        What <BlueText>I can do</BlueText>
                    </Heading>

                    <ParaText top='2rem' bottom='1.5rem'>
                        As a Developer, I have a wide range of experience in full stack development. I am proficient in React, Javascript, Node, MongoDB, Formik, JQuery and other technologies. My experience in building responsive and dynanimc web applications has allowed me to create engaging user interfaces and compelling projects.
                    </ParaText>
                    <ParaText>
                        I have experience in using React for building scalable and maintainable applications. This has allowed me to create efficient and sustainable code that can adapt to the changing needs of a business.
                    </ParaText>
                </div>

            </FlexContainer>
        </PaddingContainer>
    )
}

export default MySkills