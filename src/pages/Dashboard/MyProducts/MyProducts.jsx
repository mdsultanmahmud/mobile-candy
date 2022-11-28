import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { AuthContext } from '../../../context/AuthProvider';
import { ThreeDots } from  'react-loader-spinner'
const MyProducts = () => {
    const { user, Logout } = useContext(AuthContext)
    const { data: myPorducts = [], isLoading } = useQuery({
        queryKey: ['email'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-candy-server.vercel.app/productsByGmail?email=${user.email}`, {
                headers: {
                    authorization_token: `Bearer ${localStorage.getItem('AccessToken')}`
                }
            })
            const data = await res.json()
            console.log(data)
            return data
        }
    })

    const handleAdvertisement = (prod) => {
        prod.productId = prod._id 
        fetch(`https://mobile-candy-server.vercel.app/productsAdvertised`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(prod)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Products succeessfully advertised!')
                }
            })
    }
    if(isLoading){
        return <div className='h-[500px] w-[100%] grid place-items-center'>
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
        <div>
            {
                myPorducts.length > 0 ?
                    <h1 className='text-center text-green-400 font-bold text-2xl my-5'>Your All Products here(to sale)</h1>
                    :
                    <h1 className='text-center text-red-500 font-bold text-2xl my-5'>You have no products to sale</h1>
            }

            {
                myPorducts.length > 0 &&
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Availability</th>
                                <th>Advertise</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myPorducts.map(myPrd => <tr key={myPrd._id}>
                                    <td className='text-sm font-bold'>{myPrd.productsName}</td>
                                    <td>${myPrd.resalePrice}</td>
                                    <td><p className={`font-bold text-sm ${myPrd?.status === 'sold' ? 'text-green-500':'text-red-600'}`}>{myPrd?.status === 'sold' ? 'Sold' : 'Avaible'} </p></td>
                                    <td><button onClick={() => handleAdvertisement(myPrd)} className='btn btn-secondary btn-outline btn-xs' disabled={myPrd?.status === 'sold'}>Add</button></td>
                                    <td><button className='btn btn-secondary btn-outline btn-xs'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default MyProducts;