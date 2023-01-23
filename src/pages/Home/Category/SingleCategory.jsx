import React from 'react';
import { Link } from 'react-router-dom';
const SingleCategory = ({ singleCat }) => {
    const { name, picture, _id } = singleCat
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-[250px] w-full rounded' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/categories/${_id}`} className="btn btn-success btn-outline">Explore Categories</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;