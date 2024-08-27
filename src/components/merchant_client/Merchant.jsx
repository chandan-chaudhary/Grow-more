import React from 'react'
import Marquee from 'react-fast-marquee';
import { merchantBrand, clientBrand, userBrand } from './brand';

function Merchant() {
    return (
        <section>
            <div className={'flex flex-col bg-gray-100 text-black  pt-24 mx-auto  py-8'}>
                <div>
                    <div className={'flex flex-col justify-center items-center space-y-2'}>
                        <h4 className={' uppercase font-extrabold text-4xl  text-applicationColor'}>Our Clients</h4>
                        {/* <div className={'h-0.5 w-28 bg-red-300 mt-2'}></div> */}
                        {/* <h4 className='text-applicationColor text-4xl text-center'>Merchant Client</h4> */}

                    </div>
                    <div className={'px-24 pt-24'}>
                        {/* <div> */}
                        {/* </div> */}
                        <Marquee pauseOnHover speed={100} delay={3} >
                            {/*<div className={'grid grid-cols-4 gap-x-3 gap-y-8  place-items-center py-10 px-5 '}>*/}
                            <h4 className='text-applicationColor text-4xl text-center'>Merchant Client</h4>
                            {
                                merchantBrand.map((brand, idx) =>
                                    <div key={idx} className={' pb-12 px-20'}>
                                        <img src={brand} alt={`${brand} logo`} className={'w-32'} />
                                    </div>
                                )
                            }
                            <h4 className='text-applicationColor text-4xl text-center'>Seller Client</h4>
                            {
                                clientBrand.map((brand, idx) =>
                                    <div key={idx} className={' pb-12 px-20'}>
                                        <img src={brand} alt={`${brand} logo`} className={'w-32'} />
                                    </div>
                                )
                            }
                             {/* <h4 className='text-applicationColor text-4xl text-center'>Seller Client</h4> */}
                            {/* {
                                userBrand.map((brand, idx) =>
                                    <div key={idx} className={' pb-12 px-20'}>
                                        <img src={brand} alt={`${brand} logo`} className={'w-32'} />
                                    </div>
                                )
                            } */}
                        </Marquee>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Merchant