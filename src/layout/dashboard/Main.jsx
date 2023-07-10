import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <section>
            <Outlet></Outlet>
        </section>
    );
};

export default Main;