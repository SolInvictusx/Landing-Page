import React from 'react'

// import global styles
import {
    PaddingContainer,
    Heading,
    FlexContainer,
    ParaText,
    IconContainer,
    Button,
} from '../../styles/Global.styled';

// import project styles
import {
    TechStackCard,
} from '../../styles/MyProject.styled';

// import assets
import { FaGithub } from 'react-icons/fa';

const Project = () => {
    return (
        <FlexContainer fullWidthChild>

            {/* --left-section-project-content-- */}
            <div>
                <FlexContainer align='center' gap='1rem'>
                    <Heading as='h3' size='h3' bottom='1rem'>
                        Project Name
                    </Heading>

                    <IconContainer color='blue' size='2rem'>
                        <FaGithub />
                    </IconContainer>
                </FlexContainer>

                <PaddingContainer top='1rem'>
                    <FlexContainer gap='1.5rem'>
                        <TechStackCard>Technology</TechStackCard>
                        <TechStackCard>Technology</TechStackCard>
                    </FlexContainer>
                </PaddingContainer>

                <ParaText top='1.5rem' bottom='2rem'>
                    Project Description
                </ParaText>

                <Button>
                    Visit Website
                </Button>

            </div>

            <div>

            </div>
        </FlexContainer>
    )
}

export default Project