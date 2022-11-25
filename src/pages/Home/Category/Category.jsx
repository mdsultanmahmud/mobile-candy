import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory';

const Category = () => {
    const [categories, setCategories] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[])
    return (
        <div className='my-6'>
            <h1 className='text-center font-bold text-2xl text-green-600 my-4'>Our All Categories</h1>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(cat => <SingleCategory key={cat._id} singleCat = {cat}></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default Category;