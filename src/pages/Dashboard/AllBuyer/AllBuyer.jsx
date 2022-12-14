import React from 'react';
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { ThreeDots } from 'react-loader-spinner'
const AllBuyer = () => {
    const { data: buyers = [], isLoading, refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-candy-server.vercel.app/buyers`)
            const data = await res.json()
            return data
        }
    })
    const handleDeleteUser = id =>{
        fetch(`https://mobile-candy-server.vercel.app/users/${id}`, {
            method: 'delete'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                toast.success('Items deleted successfully!!')
                refetch()
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
        <div className='my-5'>
            {
                buyers.length> 0 ?
                <h1 className='text-center my-4 text-2xl font-bold text-red-500'>All Buyers</h1>
                :
                <h1 className='text-center text-2xl font-bold text-red-500'>No seller addeded!</h1>
            }
            {
                buyers.length > 0 &&
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buyers.map((buyer, index) => <tr className='hover' key={buyer._id}>
                                    <th>{index + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td><button onClick={() => handleDeleteUser(buyer._id)} className='btn btn-sm btn-outline btn-secondary'>Delete</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default AllBuyer;