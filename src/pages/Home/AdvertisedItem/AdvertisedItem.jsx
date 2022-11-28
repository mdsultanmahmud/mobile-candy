import React from 'react';
import { useQuery } from '@tanstack/react-query'
import SingleAdvProd from './SingleAdvProd';
const AdvertisedItem = () => {
    const { data: advertisedItems = [], isLoading } = useQuery({
        queryKey: ['advertisedItems'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-candy-server.vercel.app/productsAdvertised`)
            const data = await res.json()
            return data
        }
    })

    console.log(advertisedItems)

    return (
        <div className='my-10'>
            {
                advertisedItems.length > 0 &&
                <div>
                    <h3 className='text-center text-2xl font-bold text-green-600 my-5'>Our advertised items</h3>
                    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            advertisedItems.map(advprod => <SingleAdvProd
                                key={advprod._id}
                                advprod = {advprod}
                            ></SingleAdvProd>)
                        }
                    </div>
                </div>
            }

        </div>
    );
};

export default AdvertisedItem;