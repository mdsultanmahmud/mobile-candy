import React from 'react';
import loginPic from '../../assets/login.jpg'
const Login = () => {
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target 
        const email = form.email.value 
        const password = form.password.value 
        console.log(email, password)
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${loginPic}")`, backgroundAttachment:'fixed' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content">
            <div className="max-w-md">
                <form onSubmit={handleLogin}>
                    <h1 className='text-center mb-4 font-semibold text-xl text-red-500'>Please Login!</h1>
                    <div>
                        <label className='text-sm font-bold text-green-500' htmlFor="email">Your Email</label>
                        <br />
                        <input name='email' required className='bg-transparent border-b-2 border-green-500 outline-none focus:border-b-2 mt-2 text-red-400 w-full' type="email" placeholder='Email' id='email' />
                    </div>
                    <div>
                        <label className='text-sm font-bold text-green-500' htmlFor="password"> Password</label>
                        <br />
                        <input name='password' required className='bg-transparent border-b-2 border-green-500 outline-none focus:border-b-2 mt-2 text-red-400 w-full' type="password" placeholder='Password' id='password' />
                    </div>
                    <button type='submit' className="btn btn-outline btn-success w-full my-4">Login</button>
                </form>
            </div>
        </div>
    </div>
    );
};
export default Login; 