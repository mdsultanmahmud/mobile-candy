import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import BookModal from '../Bookings/BookModal';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';
import useRole from '../Hooks/useRole';
const SingleProduct = ({ prodcut }) => {
    const [bookedPro, setBookedPro] = useState({})
    const { user } = useContext(AuthContext)
    const { productsName, resalePrice, sellerEmail, sellerLocation, sellerName, usedTime,
        postTime, postDate, phone, originalPrice, image, condition } = prodcut
    const [dbUser] = useRole(sellerEmail)
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-[300px] w-full md:w-3/4 md:rounded' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-gray-500 uppercase">{productsName}</h2>
                <div className='grid gap-3 grid-cols-1 md:grid-cols-2 text-sm font-bold'>
                    <div>
                        <h3 className='text-lg font-semibold text-orange-700'>Porducts Information</h3>
                        <p><strong className='font-bold text-gray-500'>Resale Price:</strong> ${resalePrice}</p>
                        <p><strong className='font-bold text-gray-500'>Original Price:</strong> ${originalPrice}</p>
                        <p><strong className='font-bold text-gray-500'>Used Time:</strong> {usedTime} yr.</p>
                        <p><strong className='font-bold text-gray-500'>Condition: </strong>{condition}</p>
                        <p><strong className='font-bold text-gray-500'>Post Time: </strong>{postTime}</p>
                        <p><strong className='font-bold text-gray-500'>Post Date: </strong>{postDate}</p>
                    </div>
                    <div>
                        <h4 className='text-lg font-semibold text-orange-700'>Seller Information</h4>
                        <p><strong className='font-bold text-gray-500'>Seller: </strong>{sellerName}
                            {
                                dbUser?.isVerified &&
                                <span><FontAwesomeIcon className='text-green-600 ml-2' icon={faCircleCheck}></FontAwesomeIcon></span>
                            }
                        </p>
                        <p><strong className='font-bold text-gray-500'>Email: </strong>{sellerEmail}</p>
                        <p><strong className='font-bold text-gray-500'>Phone: </strong>{phone}</p>
                        <p><strong className='font-bold text-gray-500'>Location: </strong>{sellerLocation}</p>
                    </div>
                </div>
                <p className='text-sm text-semibold text-gray-400'>{prodcut?.description}</p>
                <div className="card-actions justify-end">
                    {
                        user.email ?
                            <label onClick={() => setBookedPro(prodcut)} htmlFor="book-product" className="btn btn-success font-bold btn-outline" >Book Now</label >
                            :
                            <Link to={'/login'} className='text-red-500 text-sm font-semibold'>Please Login to Book</Link>
                    }
                </div>
            </div>
            <div>
                {
                    bookedPro.productsName && <BookModal key={prodcut._id} bookedProduct={bookedPro}></BookModal>
                }
            </div>
        </div>
    );
};

export default SingleProduct;