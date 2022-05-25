import React from 'react';
import notfound from '../../Images/Na_Nov_26.jpg';

const Notfound = () => {
    return (
        <div class="hero my-h-screen bg-base-100" style={{ height: '700px' }}>
            <div class="hero-content flex-col lg:flex-col">
                <img src={notfound} class="max-w-sm rounded-lg shadow-2xl w-full h-auto" alt='notFound' />
                <div>
                    <h1 class="text-5xl text-center mt-5 lg:mt-8 text-red-500 font-bold">404 Not Found!</h1>
                    <p class="py-6 text-center text-xl font-semibold">Webpage not found.</p>
                </div>
            </div>
        </div>
    );
};

export default Notfound;