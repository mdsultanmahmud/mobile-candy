import React from 'react';

const SingleAdvProd = ({advprod}) => {
    const {productsName, image,availibility, resalePrice, sellerName} = advprod
    return (
        <div className="card bg-base-100 shadow-xl">
            <p className='text-gray-400 font-bold text-sm my-2'>Add</p>
            <figure><img className='h-[200px]' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productsName}</h2>
                <p className='text-sm font-semibold text-gray-500'><strong>Status:</strong> {availibility ? 'Available' : 'Sold'}</p>
                <p className='text-sm font-semibold text-gray-500'><strong>Price:</strong> ${resalePrice}</p>
                <p className='font-bold text-sm text-green-500'><strong>Seller:</strong> {sellerName}</p>
            </div>
        </div>
    );
};

export default SingleAdvProd;