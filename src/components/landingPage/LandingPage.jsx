import React from 'react';
import freelancerImg from '../../assets/landingPage/freelance.png';

function LandingPage() {
    return (
        <section className='bg-gray-200'>
            <div className='text-blue-950 flex flex-col items-center justify-center  gap-y-16 py-32 '>
                <div className='w-fit'>
                    <p className='text-4xl text-center font-bold'>INDIA'S BIGGEST PLATFORM FOR FREELANCERS</p>
                </div>
                <div className='w-fit text-center'>
                    <img src={freelancerImg} alt="" className='' />
                </div>
            </div>
            <div className='flex flex-col gap-y-3 items-center justify-center px-5'>
                <input type="text" placeholder='Your Email' onChange={(e) => console.log(e.target.value)} className='outline-none border-2 border-gray-500 bg-white p-2 rounded-lg w-full' />
                <button className='p-2 px-8 bg-blue-950 text-white lowercase text-lg rounded-lg'>Subscribe</button>
            </div>
        </section>
    )
}

export default LandingPage