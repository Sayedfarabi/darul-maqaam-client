import React from 'react';
import ProjectGallerySection from '../../components/project-gallery-section/ProjectGallerySection';
import ImagesSection from '../../components/images-section/ImagesSection';
import ContactSection from '../../components/contact-section/ContactSection';
import useTitle from '../../hooks/useTitle';

const Gallery = () => {
    useTitle("Gallery Page")
    return (
        <section>
            <ProjectGallerySection></ProjectGallerySection>
            <ImagesSection></ImagesSection>
            <ContactSection></ContactSection>
        </section>
    );
};

export default Gallery;