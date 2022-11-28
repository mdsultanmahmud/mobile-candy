import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast'
const AddProducts = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const handleAddProducts = data => {
        const date = new Date()
        const postTime = date.toLocaleTimeString()
        const postDate = date.toLocaleDateString()
        const time = date.getTime()
        data.sellerEmail = user.email
        data.sellerName = user.displayName
        data.postDate = postDate
        data.postTime = postTime
        data.time = time
        data.availibility = true
        fetch('https://mobile-candy-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization_token: `Bearer ${localStorage.getItem('AccessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(returnData => {
                if (returnData.acknowledged) {
                    toast.success('Your products added!!')
                    navigate('/dashboard/myProducts')
                }
            })
    }
    return (
        <div className='my-10 p-5'>
            <h3 className='text-center text-2xl font-bold text-green-500 mb-4 my-4'>Add a Product to Sell</h3>
            <form  onSubmit={handleSubmit(handleAddProducts)}>
                <div  className='grid gap-5 grid-cols-1 md:grid-cols-2 my-5'>
                    <div className='text-center'>
                        <input {...register('productsName', { required: 'You have to input products name' })} type="text" placeholder="Products Name" className="input input-bordered input-success input-sm w-full max-w-xs" />
                        {errors.productsName && <span className='text-sm'>{errors?.productsName?.message}</span>}
                    </div>
                    <div className='text-center'>
                    <input disabled value={user?.displayName} type="text" placeholder="Products Name" className="input input-bordered input-success input-sm w-full max-w-xs" />
                    </div>
                    <div className='text-center'>
                    <input disabled value={user?.email} type="text" placeholder="Products Name" className="input input-bordered input-success input-sm w-full max-w-xs" />
                    </div>
                    <div className='text-center'>
                        <input {...register('resalePrice', { required: 'You have to input products resale price' })} type="number" placeholder="Products Resale Price" className="input input-bordered input-success input-sm w-full max-w-xs" />
                        {errors.resalePrice && <span className='text-red-500 text-sm'>{errors?.resalePrice?.message}</span>}
                    </div>
                    <div className='text-center'>
                        <input {...register('originalPrice', { required: 'You have to input products origina price' })} type="number" placeholder="Products Original Price" className="input input-bordered input-success input-sm w-full max-w-xs" />
                        {errors.originalPrice && <span className='text-red-500 text-sm'>{errors?.originalPrice?.message}</span>}
                    </div>
                    <div className='text-center'>
                        <input {...register('sellerLocation', { required: 'You have to input Your selles location' })} type="text" placeholder="Your location(Dhaka, Rajshahi)" className="input input-bordered input-success input-sm w-full max-w-xs" />
                        {errors.sellerLocation && <span className='text-red-500 text-sm'>{errors?.sellerLocation?.message}</span>}
                    </div>
                    <div className='text-center'>
                        <input {...register('phone', { required: 'You have to input your phone number' })} type="number" placeholder="+8801*********" className="input input-bordered input-success input-sm w-full max-w-xs" />
                        {errors.phone && <span className='text-red-500 text-sm'>{errors?.phone?.message}</span>}
                    </div>
                    <div className='text-center'>
                        <input {...register('image', { required: 'You have to input products image url' })} type="text" placeholder="Image URL" className="input input-bordered input-success input-sm w-full max-w-xs" />
                        {errors.image && <span className='text-red-500 text-sm'>{errors?.image?.message}</span>}
                    </div>
                    <div className='text-center'>
                        <input {...register('usedTime', { required: 'Enter your used time in this products' })} type="text" placeholder="Years of use" className="input input-bordered input-success input-sm w-full max-w-xs" />
                        {errors.usedTime && <span className='text-red-500 text-sm'>{errors?.usedTime?.message}</span>}
                    </div>
                    <div className='text-center'>
                    <select className='select select-success select-sm w-full max-w-xs' {...register("condition", { required: 'Please enter prodcuts condition' })}>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                    </select>
                    </div>
                    <div className='text-center'>
                    <select className='select select-success select-sm w-full max-w-xs' {...register("category", { required: 'Please select a category' })}>
                        <option value="apple">Apple</option>
                        <option value="samsung">Samsung</option>
                        <option value="huawei">Huawei</option>
                    </select>
                    </div>
                </div>
                <textarea {...register('description')} className="textarea textarea-success w-full" placeholder="Products Description"></textarea>
                <br />
                <button type='submit' className="btn btn-outline btn-accent mt-3">Add Products</button>
            </form>
        </div>
    );
};

export default AddProducts;