import React from 'react';

const SingleCategory = ({ singleCat }) => {
    const { name, picture } = singleCat
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img style={{height:'250px'}} src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-success btn-outline">Explore Categories</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;