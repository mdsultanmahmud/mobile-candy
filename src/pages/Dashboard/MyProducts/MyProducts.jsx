import React from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
const MyProducts = () => {

    const { data: myPorducts = [], isLoading } = useQuery({
        queryKey: ['email'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/productsByGmail?email=sultan@gmail.com`)
            const data = await res.json()
            return data
        }
    })

    console.log(myPorducts)
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
                                myPorducts.map(myPrd => <tr>
                                    <td className='text-sm font-bold'>{myPrd.productsName}</td>
                                    <td>${myPrd.resalePrice}</td>
                                    <td><button className='btn btn-secondary btn-outline btn-xs'>Available</button></td>
                                    <td><button className='btn btn-secondary btn-outline btn-xs'>Advertise</button></td>
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