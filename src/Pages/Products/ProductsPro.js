import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsPro = ({ part }) => {
    const [expand, setExpand] = useState(false);

    const { name, img, description, price, _id, minimumOrderQuantity, availableQuantity } = part;
    // console.log(part)
    return (

        <div className="card w-80 lg:w-auto lg:mx-5 bg-base-100 shadow-xl mx-auto" style={{ height: expand ? 'auto' : '600px' }}>
            <figure>
                <img src={img} alt="Parts" />
            </figure>
            <div className="card-body">
                <h2 className="card-title mx-auto">{name}</h2>
                <p>{!expand && description?.slice(0, 65) + '...'} {!expand && <button className='text-primary font-bold' onClick={() => setExpand(true)}>Read more</button>}
                    {expand && description} {expand && <button className='text-primary font-bold' onClick={() => setExpand(false)}>Read less</button>}</p>
                <p><span className='font-semibold'>Price:</span> ${price} per unit <br />
                    <span className='font-semibold'>Minimum Order:</span> {minimumOrderQuantity}ps <br />
                    <span className='font-semibold'>In Stock:</span> {availableQuantity}ps</p>
                <div className="card-actions justify-center">
                    <Link to={`/parts/${_id}`}><button className="btn btn-primary">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsPro;