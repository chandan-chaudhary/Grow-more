import React from 'react'
import { GrServices } from "react-icons/gr";
import { Element } from 'react-scroll';

function Services() {
    return (
        <section className='bg-gray-100'>
            <Element name='service'>
                <div className=' flex flex-col items-center justify-center gap-y-16 px-5 pt-32 py-12 xl:px-72'>
                    <div className='flex flex-col items-center'>
                        <div className='bg-applicationIconBg p-5 rounded-full'>
                            <GrServices className='text-applicationColor text-4xl gap-y-5' />
                        </div>
                        <h5 className='text-4xl font-extrabold text-applicationColor '>Our Services</h5>
                    </div>
                    <p className='text-gray-600 text-center text-xl md:px-24'>Sales strategy development, market research and analysis, sales training and coaching, sales enablement tools and resources,
                        and sales performance measurement and optimization. Our external offerings include lead generation and appointment setting
                        services, sales outsourcing and tele sales solutions, and sales channel management and distribution network optimization. We
                        also provide sales technology solutions such as CRM implementation, sales automation tools, and sales analytics software. Our
                        comprehensive approach ensures that our clients have access to all the resources they need to succeed in their sales efforts.
                        At our company, we also offer merchant/ retail/ partner acquisitions services in various segments such as B2Retail, B2B, B2C,
                        d2d, and B2SMB. Our team specializes in identifying and acquiring high-potential merchants, retailers, partners, and small
                        businesses for our clients. We also provide merchant onboarding and payroll processing services to ensure a smooth and
                        efficient onboarding process for new merchants. Additionally, we offer background check and verification services to ensure the
                        reliability and trustworthiness of potential merchants. Our permanent staffing solutions and manpower outsourcing services
                        provide our clients with access to a talented and skilled workforce to support their business operations. These services are
                        designed to help our clients expand their customer base, increase sales, and grow their brand.</p>
                </div>
            </Element>
        </section>
    )
}

export default Services