import React from 'react';

const MyPortfolio = () => {
    return (
        <div className="my-h-screen container mx-auto px-10 mb-32 mt-5 bg-base-100">
            <div>
                <h1 className='text-4xl text-center font-extrabold'>MD. SAIMON SIKDER SRAYO</h1>
                <p className='text-center text-xl mt-3 mb-20 font-semibold'>Email: srayosikder@gmail.com</p>
                <h3 className='text-2xl font-bold'>Education:</h3>
                <p className='text-xl ml-32 mt-5'> BANGLADESH UNIVERSITY OF BUSINESS AND TECHNOLOGY (BUBT)
                    <p><small>B.Sc. in Computer Science & Engineering (CSE)</small></p></p>

                <h3 className='text-2xl font-bold mt-5'>Skills:</h3>
                <p className='text-xl ml-32 mt-5'><span className='font-semibold'>Expertise:</span> HTML, HTML5, CSS, Web Design, JavaScript, Bootstrap / React Bootstrap, Tailwind,
                    Daisyui, React Js, MongoDB, React-Router, API.</p>
                <p className='text-xl ml-32 mt-3'><span className='font-semibold'>Comfortable:</span> Node.JS, Express JS</p>
                <p className='text-xl ml-32 mt-3'><span className='font-semibold'>Tools:</span> Npm, Firebase, Heroku, Netlify, GitHub, Git, VS Code, Node dev tools.</p>

                <h3 className='text-2xl font-bold mt-8'>My Projects:</h3>
                <p className='text-xl ml-32 mt-5'><span className='font-semibold'>Links: </span><a target='_blank' href="https://sohag-s-service.web.app/">The Entrepreneur</a> , <a target='_blank' href="https://phoen-tech.web.app/">Phone-Fetch</a> , <a target='_blank' href="https://doctor-portal-d34a5.web.app/">Doctors Portal</a></p>

                <h3 className='text-2xl font-bold mt-8'>Courses:</h3>
                <p className='text-xl ml-32 mt-3'>Completed web development course (batch-5) in Programming Hero.</p>
            </div>
        </div>
    );
};

export default MyPortfolio;