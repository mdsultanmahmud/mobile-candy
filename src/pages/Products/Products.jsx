import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import { ThreeDots } from 'react-loader-spinner'
const Products = () => {
    const prodcutsCategory = useLoaderData()
    const {category, name} = prodcutsCategory
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() =>{
        setLoader(true)
        fetch(`https://mobile-candy-server.vercel.app/products?category=${category}`)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setLoader(false)
        })
    } ,[category])
    if(loader){
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
            <h3 className='text-center font-bold my-5 text-2xl text-green-500'>All Products of {name}</h3>
            <div className='p-5 grid gap-5 grid-cols-1 md:grid-cols-2'>
                {
                    products.map(product => <SingleProduct 
                        key={product._id}
                        prodcut = {product}
                        ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Products;