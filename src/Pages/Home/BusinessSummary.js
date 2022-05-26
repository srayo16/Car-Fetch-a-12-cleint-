import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { AiTwotoneLike } from 'react-icons/ai';
import { FaLaptopCode } from 'react-icons/fa';
import { BsFlagFill } from 'react-icons/bs';

const BusinessSummary = () => {

    return (
        <div className='container mx-auto mt-28'>
            <h1 className='text-center text-primary font-semibold text-4xl mb-3'>Business Summary</h1>
            <h4 className='text-center mb-3 font-semibold'>MILLIONS DEALERS TRUST US</h4><hr className='w-60  mx-auto' />

            <div className='mx-10'>
                <div class="stats  stats-vertical lg:stats-horizontal container mx-auto my-14 shadow">

                    <div class="stat  place-items-center">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div class="stat-title text-8xl text-primary"><BsFlagFill></BsFlagFill></div>
                        <div class="stat-value">80+</div>
                        <div class="stat-desc text-2xl text-primary font-semibold">Countries</div>
                    </div>

                    <div class="stat  place-items-center">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div class="stat-title text-8xl text-primary"><IoIosPeople></IoIosPeople> </div>
                        <div class="stat-value">700+</div>
                        <div class="stat-desc text-2xl text-primary font-semibold">Happy Clients</div>
                    </div>

                    <div class="stat  place-items-center">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div class="stat-title text-8xl text-primary"><FaLaptopCode></FaLaptopCode></div>
                        <div class="stat-value">800+</div>
                        <div class="stat-desc text-2xl text-primary font-semibold">Projects</div>
                    </div>

                    <div class="stat  place-items-center">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div class="stat-title text-8xl text-primary"><AiTwotoneLike></AiTwotoneLike></div>
                        <div class="stat-value">500+</div>
                        <div class="stat-desc text-2xl text-primary font-semibold">Feedbacks</div>
                    </div>
                </div>
            </div>

        </div>



    );
};

export default BusinessSummary;