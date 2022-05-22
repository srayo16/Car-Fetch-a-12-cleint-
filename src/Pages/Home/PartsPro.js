import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PartsPro = ({ part }) => {
    const [expand, setExpand] = useState(false);

    const { name, img, description, price, _id, minimumOrderQuantity, availableQuantity } = part;

    return (

        <div class="card w-80 lg:w-96 bg-base-100 shadow-xl mx-auto" style={{ height: expand ? 'auto' : '600px' }}>
            <figure>
                <img src={img} alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title mx-auto">{name}</h2>
                <p>{!expand && description.slice(0, 65) + '...'} {!expand && <button className='text-primary font-bold' onClick={() => setExpand(true)}>Read more</button>}
                    {expand && description} {expand && <button className='text-primary font-bold' onClick={() => setExpand(false)}>Read less</button>}</p>
                <p><span className='font-semibold'>Price:</span> ${price} per unit <br />
                    <span className='font-semibold'>Minimum Order:</span> {minimumOrderQuantity}ps <br />
                    <span className='font-semibold'>In Stock:</span> {availableQuantity}ps</p>
                <div class="card-actions justify-center">
                    <Link to={`/parts/${_id}`}><button class="btn btn-primary">Purchase</button></Link>
                </div>
            </div>
        </div>

    );
};

export default PartsPro;