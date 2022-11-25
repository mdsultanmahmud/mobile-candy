import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
const Products = () => {
    const prodcutsCategory = useLoaderData()
    const {category, name} = prodcutsCategory
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:5000/products?category=${category}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[category])
    
    return (
        <div>
            <h3 className='text-center font-bold my-5 text-2xl text-green-500'>All Products of {name}</h3>
            <div>
                {
                    
                }
            </div>
        </div>
    );
};

export default Products;