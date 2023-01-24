import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useRole from '../../pages/Hooks/useRole';
const Navbar = () => {
    const { user, Logout } = useContext(AuthContext)
    let role
    if(user.email){
        role = useRole(user.email)
    }
    const userLogoutHandling = () => {
        Logout()
            .then(data => {
                toast.success('Logout Successfully')
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message)
            })
    }
    const menuList = <>
        <li><Link className='font-semibold text-green-600' to={'/'}>Home</Link></li>
        <li><Link className='font-semibold text-green-600' to={'/blog'}>Blog</Link></li>
        {
            user?.email &&
            <li><Link className='font-semibold text-green-600' to={'/dashboard'}>Dashboard</Link></li>
        }
        {
            !user?.email &&
            <li><Link className='font-semibold text-green-600' to={'/login'}>Login</Link></li>
        }
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
            {
                user?.email &&
                <div className="navbar-end">
                    <div>
                        <p className='text-xs mr-1 font-semibold'>{user?.displayName}</p>
                        <p className='text-xs mr-1 font-semibold text-red-500'>{role[0].role}</p>
                       
                    </div>
                    <button onClick={userLogoutHandling} className="btn btn-outline btn-sm btn-success">Logout</button>
                    <label htmlFor="dashboard-layout" className="btn drawer-button lg:hidden ml-2"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></label>
                </div>
            }
        </div>
    );
};

export default Navbar;