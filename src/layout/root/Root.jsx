import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import MainNavbar from '../../components/main-navbar/MainNavbar';

const Root = () => {
    return (
        <main>
            <section>
                <MainNavbar/>
            </section>
            <section className='min-h-screen'>
                <Outlet></Outlet>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </main>
    );
};

export default Root;