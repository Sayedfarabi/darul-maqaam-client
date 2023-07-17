import React from 'react';
import MakeThemSmile from '../../components/make-them-smile/MakeThemSmile';
import BannerSection from '../../components/banner-section/BannerSection';

const HomePage = () => {
    return (
        <section>
            <div>
                <BannerSection></BannerSection>
            </div>
            <div>
                <MakeThemSmile></MakeThemSmile>
            </div>
        </section>
    );
};

export default HomePage;