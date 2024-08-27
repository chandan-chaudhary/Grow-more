import React from 'react';
import freelancerImg from '../../assets/landingPage/freelance.png';

function LandingPage() {
    return (
        <section className='bg-gray-100 flex flex-col items-center'>
            <div>
                <div className='text-blue-950 flex flex-col lg:flex-row items-center justify-center gap-y-16 py-32 w-full lg:px-24 xl:px-72 '>
                    {/* <div className=''> */}
                    <p className='text-4xl lg:w-6/12 xl:w-8/12  lg:text-6xl text-center lg:text-start font-bold'>INDIA'S BIGGEST PLATFORM FOR FREELANCERS</p>
                    {/* </div> */}
                    {/* <div className=' text-center'> */}
                    <img src={freelancerImg} alt="" className='md:w-9/12 lg:w-7/12 ' />
                    {/* </div> */}
                </div>
                <div className='flex flex-col md:flex-row gap-y-3  gap-x-3 items-center justify-center px-5 xl:pl-72 md:w-8/12 lg:w-5/12 lg:justify-start lg:items-start'>
                    <input type="text" placeholder='Your Email' onChange={(e) => console.log(e.target.value)} className='outline-none border-2 border-gray-500 bg-white p-2 rounded-lg w-full ' />
                    <button className='p-2 px-8 bg-blue-950 text-white lowercase text-lg rounded-lg'>Subscribe</button>
                </div>
            </div>
        </section>
    )
}

export default LandingPage