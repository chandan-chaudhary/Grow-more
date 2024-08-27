import React, { useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
function Contact() {
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    // HANDLE FORM SUBMIT
    const handleFormData = async (e) => {
        setLoading(true);
        e.preventDefault();

        const data = {
            service_id: import.meta.env.VITE_EMAIL_SERVICE_ID,
            template_id: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            user_id: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
            template_params: {
                from_name: inputs.name,
                from_phone: inputs.phone,
                from_email: inputs.email,
                to_name: 'Grow More',
                message: inputs.message,
            }
        };
        try {
            const mailData = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
            console.log(mailData.data);
            if (mailData.data === "OK") {
                toast.success('Email sent successfully');
                setTimeout(() => {
                    window.location.replace('/');
                }, 1000);
            };
        } catch (err) {
            toast.error('something went wrong!');
            console.log(err);
        }
        setLoading(false);

    };
    return (
        <div className={' flex sm:max-lg:flex-col text-black bg-gray-100 min-h-screen py-16  px-8 md:px-0 pb-12'}>
            {/*<img src={formImg} alt={'form'} className={'sm:max-md:hidden opacity-20 '}/>*/}
            {/* <div className={' flex flex-col  justify-center space-y-12  rounded-lg bg-opacity-70 py-12 lg:w-6/12 text-white md:px-32 lg:px-8 xl:pl-20 mt-12'}>
                <span className={'text-4xl md:text-5xl font-extrabold'}>The Finest Bizness Company</span>
                <p className={'xl:text-3xl lg:text-2xl font-bold text-xl '}> We're a team of passionate innovators revolutionizing business services. We empower your success through a comprehensive suite of solutions, from custom software and mobile apps to strategic recruitment and user-centric design. Partner with us to unlock the full potential of your business and achieve industry-leading results.</p>
            </div> */}
            <div
                className={' flex flex-col items-center   text-black py-10 md:mt-24 xl:mt-40 md:px-8 w-full  md:w-6/12 lg:w-5/12 xl:w-4/12  h-fit  rounded-lg bg-blue-300 md:bg-opacity-70 mx-auto'}>
                <div className={'text-4xl font-semibold underline underline-offset-8 text-applicationColor'}>Lets Connect</div>
                <form className={'flex flex-col space-y-3 text-black w-full mt-12 lg:space-y-7 px-5 md:px-0'} onSubmit={handleFormData}>
                    <div className={'flex flex-col'}>
                        {/*<label htmlFor='name' className={'text-xl uppercase '}>Name</label>*/}
                        <input type="text" required name={'name'} placeholder={'Your name'} value={inputs.name}
                            className={'bg-blue-100 rounded-lg  pl-2 outline-none py-2'}
                            onChange={(e) => setInputs({
                                ...inputs,
                                name: e.target.value
                            })} />
                    </div>
                    <div className={'flex flex-col'}>
                        {/*<label htmlFor={'email'} className={'text-xl uppercase'}>Email</label>*/}
                        <input type="email" required name={'email'} placeholder={'Your email'} value={inputs.email}
                            className={'bg-blue-100 rounded-lg  pl-2 outline-none py-2'}
                            onChange={(e) => setInputs({
                                ...inputs,
                                email: e.target.value
                            })} />
                    </div>
                    <div className={'flex flex-col'}>
                        {/*<label htmlFor={'phone'} className={'text-xl uppercase'}>Phone</label>*/}
                        <input type="tel" required pattern='[0-9]{10}' name={'phone'} value={inputs.phone} min={'10'} placeholder={'Your contact'}
                            className={'bg-blue-100 rounded-lg  pl-2 outline-none py-2'}
                            onChange={(e) => setInputs({
                                ...inputs,
                                phone: e.target.value
                            })} />
                    </div>
                    <div className={'flex flex-col'}>
                        {/*<label htmlFor={'message'} className={'text-xl uppercase'}>Message</label>*/}
                        <textarea name={'message'} value={inputs.message} placeholder={'Message (if any)'}
                            className={'bg-blue-100 rounded-lg  pl-2 outline-none py-2 h-32'}
                            onChange={(e) => setInputs({
                                ...inputs,
                                message: e.target.value
                            })} />
                    </div>
                    {loading ?
                        <span className="loading loading-dots loading-lg ml-36 xl:ml-60 text-logoPrimaryColor"></span>
                        :
                        <button className={'p-2 rounded-full uppercase bg-applicationColor font-bold text-xl text-white mx-12 md:mx-24'}>send
                        </button>
                    }
                </form>
            </div>
        </div>
    )
}

export default Contact