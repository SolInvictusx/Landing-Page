import React from 'react'

// import global styles
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled';

// import showcase styles
import { ShowcaseImageCard, ShowcaseParticleContainer } from '../styles/Showcase.styled';
// import react icons
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Showcase = () => {
    return (
        <PaddingContainer
            id='Home'
            left='3%'
            right='10%'
            top='15%'
            bottom='10%'
        >
            <FlexContainer align='center' fullWidthChild>
                {/* --left-content-- */}
                <div>
                    <Heading as='h4' size='h4'>Hello!</Heading>

                    <Heading
                        as='h1'
                        size='h1'
                        top='0.5rem'
                        bottom='1rem'
                    >
                        I'm <BlueText>Ryan Mebruer</BlueText>
                    </Heading>

                    <Heading as='h3' size='h3'>
                        I'm a <BlueText>Full Stack Developer</BlueText>
                    </Heading>

                    <ParaText as='p' top='2rem' bottom='4rem'>
                        Hello, my name is Ryan Mebruer and I'm a Full-Stack developer based out of New Jersey. I have experience building user-friendly websites and web applications.
                    </ParaText>

                    {/* social-icons */}
                    <FlexContainer gap='20px'>
                        <IconContainer color='white' size='1.5rem'>
                            <BsLinkedin />
                        </IconContainer>

                        <IconContainer color='white' size='1.5rem'>
                            <BsGithub />
                        </IconContainer>

                    </FlexContainer>
                </div>

                {/* --right-content-- */}
                <FlexContainer>
                    <ShowcaseParticleContainer>
                        <ShowcaseImageCard>

                        </ShowcaseImageCard>
                    </ShowcaseParticleContainer>
                </FlexContainer>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default Showcase