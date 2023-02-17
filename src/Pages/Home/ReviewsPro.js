import React, { useState } from 'react';
import Slider from 'react-carousel-responsive';
import { DynamicStar } from 'react-dynamic-star';

const ReviewsPro = ({ review }) => {
    // console.log(review);
    const { name, description, rating } = review;
    const [expanded, setExpanded] = useState(false);
    // console.log(review);
    return (

        <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-10 lg:mx-auto my-10">

            <div className="card-body">

                <p>{!expanded && description?.slice(0, 65) + '...'} {!expanded && <button className='text-primary font-bold' onClick={() => setExpanded(true)}>Read more</button>}
                    {expanded && description} {expanded && <button className='text-primary font-bold' onClick={() => setExpanded(false)}>Read less</button>}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.image ? review.image : "https://i.ibb.co/nsKFkLH/avatar.jpg"} alt="avatar" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{name}</h4>
                        <p><DynamicStar fullStarColor='#0692B4' emptyStarColor='#D4D9E3' height={20} width={20} rating={rating} /></p>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default ReviewsPro;