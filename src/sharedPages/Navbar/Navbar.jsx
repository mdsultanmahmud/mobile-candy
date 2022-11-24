import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuList = <>
        <li><Link className='font-semibold text-green-600' to={'/'}>Home</Link></li>
        <li><Link className='font-semibold text-green-600' to={'/blog'}>Blog</Link></li>
        <li><Link className='font-semibold text-green-600' to={'/dashboard'}>Dashboard</Link></li>
        <li><Link className='font-semibold text-green-600' to={'/login'}>Login</Link></li>
        <li><Link className='font-semibold text-green-600' to={'/register'}>Register</Link></li>
    </>
    return (
        <div className="navbar bg-base-200 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuList}
                    </ul>
                </div>
                <Link to={'/'} className="font-bold text-2xl text-orange-600">Mobile <span className='text-green-500'>Candy</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuList}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-success">Logout</a>
            </div>
        </div>
    );
};

export default Navbar;