import React from "react";
import teamImg from "../../assets/aboutUs/team.png";
import aboutImg1 from "../../assets/aboutUs/connecting-teams.png";
import aboutImg2 from "../../assets/aboutUs/teamLeader.png";
import missionImg from "../../assets/aboutUs/mission.png";
// import aboutImg2 from "../../assets/aboutUs/teamLeader.png";
import visionImg from "../../assets/aboutUs/vision2.png";
import { GiEyeTarget } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";

import vision from "./vision";

function AboutUs() {
    return (
        <section className="bg-gray-100 xl:px-72">
            <div className=" flex flex-col items-center justify-center lg:gap-y-12 l py-32 lg:pt-44 px-5">
                <div className="flex items-center gap-x-8">
                    <img src={teamImg} alt="" className="w-12" />
                    <h5 className="text-3xl  font-extrabold text-blue-950">Who We Are</h5>
                </div>
                <div className="py-10  lg:flex items-center space-x-16 text-center lg:text-start text-xl md:text-2xl md:px-24  text-gray-600">
                    <div className="lg:flex lg:flex-col-reverse items-center ">
                        <img src={aboutImg1} alt=""  className="xs:max-lg:hidden w-9/12"/>
                        <p>
                            We accelerate our clients’ revenue through innovative solutions
                            and empowered employees, and we’ve been doing it expertly since
                            2021. We’ve supported the vision, and promoted the success, of 10+
                            companies.
                        </p>
                    </div>
                    <br />
                    <div className="lg:flex lg:flex-col items-center">
                        <img src={aboutImg2} alt="" className="" />
                        <p className="mt-8">
                            I GrowMoreServices & Consultancy is a unique agency in India of
                            outsource sales and marketing, being the first to truly offer
                            Sales as a Service to clients both large and small.
                        </p>
                    </div>
                </div>
            </div>
            <Vision />
            <Mission />
        </section>
    );

    // OUR VISIONS
    function Vision() {
        return (
            <div className="flex flex-col items-center justify-center px-5  xl:py-16">
                <div className="flex flex-col  items-center gap-y-5">
                    <div className='bg-applicationIconBg p-5 rounded-full'>
                        <GiEyeTarget className='text-4xl text-blue-950' />
                        {/* <img src={visionImg} alt="" className="w-12 text-blue-900" /> */}
                    </div>
                    <h5 className="text-applicationColor font-extrabold text-4xl">Our Vision</h5>
                </div>
                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:px-12">
                    {vision.map((vision, idx) => (
                        <div
                            key={idx}
                            className="border-2  bg-gray-100 rounded-xl hover:bg-applicationColor group p-5  my-7 drop-shadow-sm"
                        >
                            <p className="text-lg xl:font-semibold text-gray-500 text-center group-hover:text-white">
                                {vision.vision}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    function Mission() {
        return (
            <div className="flex flex-col items-center justify-center px-5 py-24 gap-y-8 ">
                <div className="flex flex-col items-center gap-y-5 ">
                    <div className='bg-applicationIconBg p-5 rounded-full'>
                        <TbTargetArrow className="text-applicationColor text-4xl " />
                        {/* <img src={missionImg} alt="" className="w-12" /> */}
                    </div>
                    <h5 className="text-blue-950 font-extrabold text-4xl">Our Mission</h5>
                </div>
                {/* <div className="border-2 bg-gray-100 rounded-2xl hover:bg-[#1c2e4a] group text-white p-5  my-7"> */}
                <p className="text-xl text-gray-600 px-5  md:px-12 xl:px-24 text-center">
                    Our recruitment process is designed to identify and attract top
                    talent in the industry, ensuring that our clients have access to the
                    most qualified andskilled professionals. We understand the
                    importance of timely and efficient hiring, which is why we
                    prioritize speed and accuracy in our recruitment efforts. Our team
                    of experienced recruiters works closely with our clients to
                    understand their specific needs and requirements, allowing us to
                    provide tailored solutions that meet their unique demands. We are
                    committed to delivering a consistent and exceptional level of
                    service to both our clients and candidates, earning us a reputation
                    as trusted and reliable partner in the industry.
                </p>
                {/* </div> */}
            </div>
        );
    }
}

export default AboutUs;
