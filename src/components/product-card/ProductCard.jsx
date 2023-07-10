import React from 'react';

const ProductCard = () => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure><img src="https://i.pinimg.com/originals/09/83/77/098377222318e9007d396bd78b6d6033.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">AL-Quran</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, nisi.</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-green-600 text-white rounded-none capitalize">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;