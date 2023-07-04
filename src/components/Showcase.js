import React from 'react'


import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled';

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
                        I'm a <BlueText>FrontEnd Developer</BlueText>
                    </Heading>

                    <ParaText>
                        Hello, my name is Ryan Mebruer and I'm a front-end developer based out of New Jersey. I have experience building user-friendly websites and web applications.
                    </ParaText>

                    {/* social-icons */}
                    <FlexContainer>
                        <IconContainer color='white' size='1.5rem'>
                            <BsLinkedin />
                        </IconContainer>

                        <IconContainer color='white' size='1.5rem'>
                            <BsGithub />
                        </IconContainer>

                    </FlexContainer>
                </div>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default Showcase