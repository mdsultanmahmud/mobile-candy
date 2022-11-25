import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast'
const BookModal = ({ bookedProduct }) => {
    const { user } = useContext(AuthContext)
    const { productsName, resalePrice, _id } = bookedProduct
    const hangleBooking = event => {
        event.preventDefault()
        const today = new Date()
        const form = event.target
        const bookItem = {
            productsName,
            price: resalePrice,
            buyerName: user.displayName,
            email: user.email,
            time: today.getTime(),
            date: today.toLocaleDateString(),
            phone: form.phone.value,
            metLocation: form.metLocation.value,
            productId: _id
        }
        fetch('http://localhost:5000/booking', {
            method:'post', 
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(bookItem)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                toast.success('Product book successfully! Please pay for delivered.')
            }
        })
    }
    return (
        <div>
            < input type="checkbox" id="book-product" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="book-product" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='w-[300px] mx-auto' onSubmit={hangleBooking}>
                        <h1 className='text-center mb-4 font-semibold text-xl'>Book {productsName}</h1>
                        <div>
                            <label className='text-sm font-bold text-green-500' htmlFor="name">Product Name</label>
                            <br />
                            <input value={productsName} disabled type="text" className="input input-bordered input-accent w-full max-w-xs" />
                        </div>
                        <div>
                            <label className='text-sm font-bold text-green-500' htmlFor="name">Product Price</label>
                            <br />
                            <input value={'$' + resalePrice} disabled type="text" className="input input-bordered input-accent w-full max-w-xs" />
                        </div>
                        <div>
                            <label className='text-sm font-bold text-green-500' htmlFor="name">Your Name</label>
                            <br />
                            <input value={user.displayName} disabled type="text" className="input input-bordered input-accent w-full max-w-xs" />
                        </div>
                        <div>
                            <label className='text-sm font-bold text-green-500' htmlFor="name">Your Email</label>
                            <br />
                            <input value={user.email} disabled type="text" className="input input-bordered input-accent w-full max-w-xs" />
                        </div>
                        <div>
                            <label className='text-sm font-bold text-green-500' htmlFor="password"> Your Phone</label>
                            <br />
                            <input name='phone' required className='bg-transparent border-b-2 border-green-500 outline-none focus:border-b-2 mt-2 text-red-400  w-full max-w-xs' type="number" placeholder='Enter your phone number' id='password' />
                        </div>
                        <div>
                            <label className='text-sm font-bold text-green-500' htmlFor="password">Meeting Location</label>
                            <br />
                            <input required name='metLocation' className='bg-transparent border-b-2 border-green-500 outline-none focus:border-b-2 mt-2 text-red-400  w-full max-w-xs' type="text" placeholder='Meeting location' id='password' />
                        </div>
                        <label htmlFor='book-product'><button type='submit' className='w-full my-3 btn btn-outline btn-secondary'>Confirm</button></label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookModal