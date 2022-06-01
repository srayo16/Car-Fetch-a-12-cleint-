import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import ReviewsPro from './ReviewsPro';
import quote from './../../Images/quote.svg';
import Slider from 'react-carousel-responsive/dist';
import { Carousel } from 'react-responsive-carousel';



const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [Loadings, setLoadings] = useState(true);
    useEffect(() => {
        fetch('https://fathomless-atoll-13213.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data.reverse());
                setLoadings(false);
            })
    }, [])

    if (Loadings) {
        return <Loading></Loading>
    }

    return (
        <section className='mb-28 container mx-auto'>
            <div className='flex justify-between'>
                <div className='container lg:ml-40'>
                    <h1 className='text-center lg:mb-0 text-primary pt-20 font-semibold text-4xl'>Client's Reviews</h1>
                </div>
                <div>
                    <img src={quote} className="w-20 lg:w-44 hidden lg:flex" alt="backgroundImage" />
                </div>
            </div>


            <div className='container mx-auto h-auto'>
                <Carousel showArrows={true} autoPlay={true} dynamicHeight={false} showStatus={false} showIndicators={true} showThumbs={false} stopOnHover={true} useKeyboardArrows={true}>
                    {
                        reviews.map(review => <ReviewsPro key={review._id}
                            review={review}></ReviewsPro>)
                    }
                </Carousel>
            </div>


        </section>
    );
};

export default Reviews;