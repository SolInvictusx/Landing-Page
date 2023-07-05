import React from 'react'
import { motion } from 'framer-motion'

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
import {
    ShowcaseImageCard,
    ShowcaseParticleContainer,
    Particle,
} from '../styles/Showcase.styled';

// import react icons
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

// import asset
import ShowcaseImg from '../assets/showcase-img.png'
import BackgroundImg from '../assets/particle.png';

import { fadeInLeftVariant } from '../utils/Variants';

const Showcase = () => {
    return (
        <PaddingContainer
            id='Home'
            left='3%'
            right='10%'
            top='15%'
            bottom='10%'
            responsiveLeft='1rem'
            responsiveRight='1rem'
            responsiveTop='8rem'
        >
            <FlexContainer align='center' fullWidthChild>
                {/* --left-content-- */}
                <motion.div
                    variants={fadeInLeftVariant}
                    initial='hidden'
                    whileInView='visible'
                >
                    <Heading as='h4' size='h4'>Hello!</Heading>

                    <Heading
                        as='h2'
                        size='h2'
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
                    <FlexContainer gap='20px' responsiveFlex>
                        <IconContainer color='white' size='1.5rem'>
                            <BsLinkedin />
                        </IconContainer>

                        <IconContainer color='white' size='1.5rem'>
                            <BsGithub />
                        </IconContainer>

                        <IconContainer color='white' size='1.5rem'>
                            <GrMail />
                        </IconContainer>

                    </FlexContainer>
                </motion.div>

                {/* --right-content-- */}
                <FlexContainer justify='flex-end'>
                    <ShowcaseParticleContainer>
                        <ShowcaseImageCard>
                            <img src={ShowcaseImg} alt='showcase' />
                        </ShowcaseImageCard>

                        <Particle
                            src={BackgroundImg}
                            alt='particle'
                            top='-80px'
                            left='20px'
                            rotate='60deg'
                        />

                        <Particle
                            src={BackgroundImg}
                            alt='particle'
                            top='50px'
                            right='-70px'
                            rotate='0deg'
                        />

                        <Particle
                            src={BackgroundImg}
                            alt='particle'
                            bottom='10px'
                            left='-70px'
                            rotate='50deg'
                        />
                    </ShowcaseParticleContainer>
                </FlexContainer>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default Showcase