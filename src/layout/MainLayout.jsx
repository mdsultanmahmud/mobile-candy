import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../sharedPages/Footer/Footer';
import Navbar from '../sharedPages/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout; 