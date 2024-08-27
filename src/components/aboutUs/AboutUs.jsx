import React from "react";
import teamImg from "../../assets/aboutUs/team.png";
import aboutImg1 from "../../assets/aboutUs/connecting-teams.png";
import aboutImg2 from "../../assets/aboutUs/teamLeader.png";
import missionImg from "../../assets/aboutUs/mission.png";
// import aboutImg2 from "../../assets/aboutUs/teamLeader.png";
import visionImg from "../../assets/aboutUs/vision2.png";

import vision from "./vision";

function AboutUs() {
    return (
        <section className="bg-gray-200">
            <div className=" flex flex-col items-center justify-center py-32 px-5">
                <div className="flex items-center gap-x-8">
                    <img src={teamImg} alt="" className="w-12" />
                    <h5 className="text-3xl font-semibold text-black">Who We Are</h5>
                </div>
                <div className="py-10 text-center  text-xl text-gray-600">
                    <div>
                        {/* <img src={aboutImg1} alt="" /> */}
                        <p>
                            We accelerate our clients’ revenue through innovative solutions
                            and empowered employees, and we’ve been doing it expertly since
                            2021. We’ve supported the vision, and promoted the success, of 10+
                            companies.
                        </p>
                    </div>
                    <br />
                    <div>
                        <img src={aboutImg2} alt="" />
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
            <div className="flex flex-col items-center justify-center px-5">
                <div className="flex flex-col  items-center gap-y-5">
                    <img src={visionImg} alt="" className="w-12 text-blue-900" />
                    <h5 className="text-blue-950 font-extrabold text-4xl">Our Vision</h5>
                </div>
                <div>
                    {vision.map((vision, idx) => (
                        <div
                            key={idx}
                            className="border-2  bg-gray-100 rounded-2xl hover:bg-[#1c2e4a] group p-5  my-7"
                        >
                            <p className="text-xl text-gray-600 text-center group-hover:text-white">
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
            <div className="flex flex-col items-center justify-center px-5 my-10 gap-y-8">
                <div className="flex flex-col items-center gap-y-5 ">
                    <img src={missionImg} alt="" className="w-12" />
                    <h5 className="text-blue-950 font-extrabold text-4xl">Our Mission</h5>
                </div>
                {/* <div className="border-2 bg-gray-100 rounded-2xl hover:bg-[#1c2e4a] group text-white p-5  my-7"> */}
                <p className="text-xl text-gray-600 px-5 text-center">
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
