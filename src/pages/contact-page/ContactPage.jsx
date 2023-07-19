import React from 'react';
import useTitle from '../../hooks/useTitle';
import ContactSection from '../../components/contact-section/ContactSection';

const ContactPage = () => {
    useTitle("Contact Page")
    return (
        <section>
            <ContactSection></ContactSection>
        </section>
    );
};

export default ContactPage;