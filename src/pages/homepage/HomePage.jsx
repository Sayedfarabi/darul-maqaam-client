import React from 'react';
import MakeThemSmile from '../../components/make-them-smile/MakeThemSmile';
import BannerSection from '../../components/banner-section/BannerSection';
import useTitle from '../../hooks/useTitle';

const HomePage = () => {
    useTitle("Home Page")
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