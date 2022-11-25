import React, { useState } from 'react';
import {useQuery} from '@tanstack/react-query'
import toast from 'react-hot-toast'
const MyProducts = () => {
    const { data: myPorducts = [], isLoading } = useQuery({
        queryKey: ['email'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/productsByGmail?email=sultan@gmail.com`)
            const data = await res.json()
            return data
        }
    })

    const handleAdvertisement = (prod) =>{
        fetch(`http://localhost:5000/productsAdvertised`, {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(prod)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                toast.success('Products succeessfully advertised!')
            }
        })
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
                                    <td><button className='btn btn-secondary btn-outline btn-xs'>{myPrd.availibility ? 'Available' : 'Sold'} </button></td>
                                    <td><button onClick={()=> handleAdvertisement(myPrd)} className='btn btn-secondary btn-outline btn-xs' disabled={!myPrd.availibility}>Add</button></td>
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