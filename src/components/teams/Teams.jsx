import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import teams from './teams';

function Teams() {
    return (
        <section>
            <div className='flex flex-col items-center justify-center py-32 '>
                <div className='flex flex-col items-center'>
                    <div className='bg-applicationIconBg p-5 rounded-full'>
                        <RiTeamFill className='text-applicationColor text-4xl gap-y-5' />
                    </div>
                    <h5 className='text-4xl font-extrabold text-applicationColor '>Teams</h5>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 gap-5 py-10'>
                {
                        teams.map((team, idx) =>
                            <div key={idx} className='flex flex-col text-2xl border-2  bg-applicationColor text-gray-50 cursor-pointer hover:text-applicationColor hover:bg-white p-5  rounded-lg '>
                                <div>
                                    <a href={team.linkdInId} target='_blank' rel="noopener noreferrer" className='text-4xl' ><FaLinkedin /></a>
                                </div>
                                <h4 className='font-bold'>{team.name}</h4>
                                <p className=' italic'>{team.profession}</p>
                            </div>
                        )
                    }

                </div>
            </div>
        </section >
    )
}
// Founder & Ceo Vivek singh 

// Co-founder Pawan pal 

// Rahul Yadav Affiliate

//  marketing Specialist

// Operations Manager Madhu Kumari 

// priyanshi srivastava Senior

//  Affiliate Marketing Manager
// akanksha patel Affiliate Relations Manager

// Komal Awasthi Affiliate Manager 

// Arti Kumari Affiliate Sales Manager

export default Teams
// Company linkedin https://www.linkedin.com/company/86389496/admin/page-posts/published/
// Vivek Singh Linkedin https://www.linkedin.com/in/vivek-singh-674985250
// Pawan pal linkedin.com/in/pawan-pal-66162a166 
// Rahul Yadav linkedin.com/in/rahul-yadav-05834a29a
// Madhu Kumari linkedin.com/in/madhu-k-9aa3482a4
// Priyanshi srivastava linkedin.com/in/priyanshi-srivastava-a92452301
// akanksha patel linkedin.com/in/akanksha-patel-356632310
// Komal Awasthi linkedin.com/in/komal-awasthi-733a88237
// Arti kumari https://www.linkedin.com/in/arti-kumari-733a88237