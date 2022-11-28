import React from 'react';
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'
const AllSeller = () => {
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sellers`)
            const data = await res.json()
            return data
        }
    })

    const handleVerified = (id) => {
        fetch(`http://localhost:5000/users/verify/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount){
                toast.success('Seller Verified!')
                refetch()
            }
        })
    }

    return (
        <div className='my-5'>
            {
                sellers.length > 0 ?
                    <h1 className='text-center my-4 text-2xl font-bold text-red-500'>All Sellers</h1>
                    :
                    <h1 className='text-center text-2xl font-bold text-red-500'>No seller addeded!</h1>
            }
            {
                sellers.length > 0 &&
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Verify</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sellers.map((seller, index) => <tr className='hover' key={seller._id}>
                                    <th>{index + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td><button onClick={() => handleVerified(seller._id)} className={`text-sm font-bold btn btn-sm ${seller?.isVerified ? 'btn-success' : 'btn-secondary'}`}>{seller?.isVerified ? 'verified' : 'verify'}</button></td>
                                    <td><button className='btn btn-sm btn-outline btn-secondary'>Delete</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default AllSeller;