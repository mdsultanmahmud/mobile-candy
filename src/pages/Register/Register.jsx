import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import register from '../../assets/register.jpg'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import useJwtToken from '../Hooks/useJwtToken';
const Register = () => {
    const { user, userRegister, userUpdated, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const role = form.role.value
        const storedUser = {
            name,
            email,
            role
        }
        const profile = {
            displayName: name
        }
        userRegister(email, password)
            .then(data => {
                const user = data.user
                if (user.uid) {
                    userUpdated(profile)
                        .then(data => {
                            storedUserData(storedUser)
                            console.log(user)
                            form.reset()
                        })
                        .catch(err => {
                            toast.error(err.message)
                            console.log(err)
                        })
                }
            })
            .catch(error => {
                toast.error(error.message)
                console.log(error)
            })

    }

    // google login 
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(data => {
                if (data.user.uid) {
                    const Saveduser = {
                        name: data.user.displayName,
                        email: data.user.email,
                        role: 'Buyer'
                    }
                    storedUserData(Saveduser)
                    useJwtToken(data.user.email)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    // stored data into server 
    const storedUserData = user => {
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('account created successfully!')
                    useJwtToken(user.email)
                    navigate('/')
                }
            })
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${register}")`, backgroundAttachment: 'fixed' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
                <div className="max-w-md">
                    <form className='w-[300px]' onSubmit={handleRegister}>
                        <h1 className='text-center mb-4 font-semibold text-xl'>Create Account!</h1>
                        <div>
                            <label className='text-sm font-bold text-green-500' htmlFor="name">Your Name</label>
                            <br />
                            <input name='name' required className='bg-transparent border-b-2 border-green-500 outline-none focus:border-b-2 mt-2 text-red-400  w-full max-w-xs' type="text" placeholder='Name' id='name' />
                        </div>
                        <div>
                            <label className='text-sm font-bold text-green-500' htmlFor="email">Your Email</label>
                            <br />
                            <input name='email' required className='bg-transparent border-b-2 border-green-500 outline-none focus:border-b-2 mt-2 text-red-400  w-full max-w-xs' type="email" placeholder='Email' id='email' />
                        </div>
                        <div>
                            <label className='text-sm font-bold text-green-500' htmlFor="password"> Password</label>
                            <br />
                            <input name='password' required className='bg-transparent border-b-2 border-green-500 outline-none focus:border-b-2 mt-2 text-red-400  w-full max-w-xs' type="password" placeholder='Password' id='password' />
                        </div>
                        <select name='role' required className="select select-accent bg-transparent  w-full max-w-xs my-3 focus:outline-none">
                            <option className='text-green-500 font-bold text-sm'>Buyer</option>
                            <option className='text-green-500 font-bold text-sm'>Seller</option>
                        </select>
                        <button type='submit' className="btn btn-outline btn-success w-full max-w-xs">Create Account</button>
                    </form>
                    <button onClick={handleGoogleSignIn} className="btn btn-secondary w-full max-w-xs mt-3">Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register; 