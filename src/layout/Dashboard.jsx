import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Banner from '../pages/Home/Banner/Banner';
import useRole from '../pages/Hooks/useRole';
import Footer from '../sharedPages/Footer/Footer';
import Navbar from '../sharedPages/Navbar/Navbar';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [dbUser] = useRole(user.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-layout" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-layout" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link className='text-sm font-bold' to={'/dashboard'}>My Orders</Link></li>
                        {
                            dbUser.role === 'Seller' &&
                            <>
                                <li><Link className='text-sm font-bold' to={'/dashboard/addProducts'}>Add Products</Link></li>
                                <li><Link className='text-sm font-bold' to={'/dashboard/myProducts'}>My Products</Link></li>
                            </>
                        }
                        {
                            dbUser.role === 'Admin' &&
                            <>
                                <li><Link className='text-sm font-bold' to={'/dashboard/allsellers'}>All Sellers</Link></li>
                                <li><Link className='text-sm font-bold' to={'/dashboard/allbuyers'}>All Buyers</Link></li>
                                <li><Link className='text-sm font-bold' to={'/dashboard/reported'}>Reported Items</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard; 