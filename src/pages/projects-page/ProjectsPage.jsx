import React from 'react';
import OurProject from '../../components/our-project/OurProject';
import Projects from '../../components/projects/Projects';
import Publication from '../../components/publication/Publication';
import InputSection from '../../components/input-section/InputSection';
import VideoSection from '../../components/video-section/VideoSection';
import SponsorsSection from '../../components/sponsors-section/SponsorsSection';
import useTitle from '../../hooks/useTitle';

const ProjectsPage = () => {
    useTitle("Projects")
    return (
        <section>
            <OurProject></OurProject>
            <Projects></Projects>
            <div className='py-8 bg-green-50'>
                <InputSection></InputSection>
                <Publication></Publication>
                <VideoSection></VideoSection>
            </div>
            <SponsorsSection></SponsorsSection>
        </section>
    );
};

export default ProjectsPage;