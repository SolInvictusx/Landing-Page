import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

// Import your CSS file
import '../styles/ContactForm.css';

// import global styles
import {
    PaddingContainer,
    Heading,
    BlueText,
    FlexContainer,
} from '../styles/Global.styled';

import { fadeInBottomVariant } from '../utils/Variants';

const Footer = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_58yhfde', 'template_z33p5c8', form.current, 'PNTEgjs3kAbtluPDe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <PaddingContainer
            id='Contact'
            top='5%'
            bottom='10%'
        >
            <Heading
                as={motion.h4}
                variants={fadeInBottomVariant}
                initial='hidden'
                whileInView='visible'
                size='h4'
                align='center'
            >
                MY CONTACT
            </Heading>

            <Heading
                as={motion.h2}
                variants={fadeInBottomVariant}
                initial='hidden'
                whileInView='visible'
                size='h2'
                align='center'
                top='0.5rem'
            >
                Contact <BlueText>Me Here</BlueText>
            </Heading>

            <PaddingContainer top='3rem'>
                <FlexContainer justify='center'>

                    <motion.form
                        ref={form}
                        className="contactForm"
                        onSubmit={sendEmail}
                        variants={fadeInBottomVariant}
                        initial='hidden'
                        animate='visible'
                    >
                        <label className="contactFormLabel">Name</label>
                        <input type="text" name="user_name" className="contactFormInput" />
                        <label className="contactFormLabel">Email</label>
                        <input type="email" name="user_email" className="contactFormInput" />
                        <label className="contactFormLabel">Message</label>
                        <textarea name="message" className="contactFormInput" />
                        <input type="submit" value="Send Message" className="contactFormButton" />

                    </motion.form>

                </FlexContainer>
            </PaddingContainer>
        </PaddingContainer>
    )
}

export default Footer;
