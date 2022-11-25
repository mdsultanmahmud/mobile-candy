import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Banner from '../pages/Home/Banner/Banner';
import Footer from '../sharedPages/Footer/Footer';
import Navbar from '../sharedPages/Navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link className='text-sm font-bold' to={'/dashboard'}>My Orders</Link></li>
                        <li><Link className='text-sm font-bold' to={'/dashboard/addProducts'}>Add Products</Link></li>
                        <li><Link className='text-sm font-bold' to={'/dashboard/myProducts'}>My Products</Link></li>
                        <li><Link className='text-sm font-bold' to={'/dashboard/allsellers'}>All Sellers</Link></li>
                        <li><Link className='text-sm font-bold' to={'/dashboard/allbuyers'}>All Buyers</Link></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard; 