import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { Link } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner'
const Myorder = () => {
    const { user, Logout } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const [loading, setLoding] = useState(true)
    useEffect(() => {
        setLoding(true)
        fetch(`http://localhost:5000/booking?email=${user?.email}`, {
            headers: {
                authorization_token: `Bearer ${localStorage.getItem('AccessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                setLoding(false)
            })
    }, [user?.email])

    if (loading) {
        <div className='h-[500px] w-[100%] grid place-items-center'>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }
        return (
            <div className='my-8'>
                {
                    bookings.length > 0 ?
                        <h1 className='text-center text-2xl text-red-400 font-semibold my-4'>Your All Orders</h1>
                        :
                        <h1 className='text-center text-2xl text-red-400 font-semibold my-4'>No products addeded.</h1>
                }
                {
                    bookings.length > 0 &&
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>Product Info</th>
                                    <th>Price</th>
                                    <th>Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookings.map(book => <tr key={book._id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={book.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{book.productsName}</div>
                                                    <div className="text-sm opacity-50">{book.metLocation}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            ${book.price}
                                        </td>
                                        <td>
                                            <Link to={`/dashboard/payment/${book._id}`}><button className={`btn btn-outline btn-sm btn-success`} disabled={book?.status === 'sold'}>{book?.status ? 'paid' : 'pay'}</button></Link>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        );
    };

    export default Myorder;