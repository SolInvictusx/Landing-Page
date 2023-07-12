import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

        const userName = form.current['user_name'].value;
        const userEmail = form.current['user_email'].value;
        const message = form.current['message'].value;

        if (!userName || !userEmail || !message) {
            toast.error('All fields are required!', {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }

        emailjs.sendForm('service_58yhfde', 'template_z33p5c8', form.current, 'PNTEgjs3kAbtluPDe')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                toast.success('Message sent successfully!', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }, (error) => {
                console.log(error.text);
                toast.error('Something went wrong. Please try again!', {
                    position: toast.POSITION.TOP_CENTER
                });
            });
    };

    return (
        <div>
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
            <ToastContainer />
        </div>
    )
}

export default Footer;
