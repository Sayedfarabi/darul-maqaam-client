import React from 'react';
import OurStorySection from '../../components/our-story-section/OurStorySection';
import WorkSection from '../../components/work-section/WorkSection';
import useTitle from '../../hooks/useTitle';

const AboutPage = () => {
    useTitle("About Page")
    return (
        <section>
            <OurStorySection></OurStorySection>
            <WorkSection></WorkSection>
        </section>
    );
};

export default AboutPage;