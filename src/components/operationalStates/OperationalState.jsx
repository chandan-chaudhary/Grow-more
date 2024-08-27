import React from 'react'

function OperationalState() {
    return (
        <section className='bg-gray-100'>
            <div className='flex flex-col items-center justify-center py-32'>
                <h4 className='text-3xl font-extrabold uppercase text-applicationColor text-center '>Operational States</h4>
                <div className='grid grid-cols-2 gap-5 lg:gap-12 px-5 text-center md:grid-cols-3 py-10'>
                    <h4 className='bg-applicationColor text-white rounded-lg uppercase text-xl p-3'>Delhi Ncr</h4>
                    <h4 className='bg-applicationColor text-white rounded-lg uppercase text-xl p-3'>Uttar Pradesh </h4>
                    <h4 className='bg-applicationColor text-white rounded-lg uppercase text-xl p-3'>Banglore</h4>
                    <h4 className='bg-applicationColor text-white rounded-lg uppercase text-xl p-3'>Gujrat</h4>
                    <h4 className='bg-applicationColor text-white rounded-lg uppercase text-xl p-3'>Rajasthan</h4>
                    <h4 className='bg-applicationColor text-white rounded-lg uppercase text-xl p-3'>Maharastra</h4>
                </div>
            </div>
            <TeamVendor />

        </section>
    );



    function TeamVendor() {
        return (
            <div>
                {/* <h4>Vendors</h4> */}
                <div className='flex flex-col md:flex-row gap-10 items-center justify-center px-5 py-12'>
                    <div className='bg-white border-2 p-12 '>
                        <h5 className='uppercase text-3xl font-bold text-applicationColor'>1000+ Vendors</h5>
                    </div>
                    <div className='bg-white border-2 p-12'>
                        <h5 className='uppercase text-3xl font-bold text-applicationColor'>500+ Employees</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default OperationalState