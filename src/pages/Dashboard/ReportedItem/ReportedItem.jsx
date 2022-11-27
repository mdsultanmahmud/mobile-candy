import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ReportedItem = () => {
    const { data: reportedItems = [], isLoading, refetch} = useQuery({
        queryKey: ['reported'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reported')
            const data = await res.json()
            return data
        }
    })

    const handleDeleteReportedItem = id =>{
        fetch(`http://localhost:5000/reported/${id}`, {
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
    return (
        <div className='my-10'>
            {
                reportedItems.length > 0 ?
                    <h1 className='text-center text-green-400 font-bold text-2xl my-8'>All Reported Phone</h1>
                    :
                    <h1 className='text-center text-red-400 font-bold text-2xl my-8'>No reported phone addeded</h1>
            }
            {
                reportedItems.length > 0 &&
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Phone Info</th>
                                <th>Reporter</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reportedItems.map(item => <tr className='hover' key={item._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.productsName}</div>
                                                <div className="text-sm opacity-50">Date: {item.date}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.reporter}
    
                                    </td>
                                    <td>{item.email}</td>
                                    <th>
                                        <button onClick={() => handleDeleteReportedItem(item._id)} className="btn btn-success btn-sm">Delete</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default ReportedItem;