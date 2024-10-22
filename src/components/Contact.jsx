import React, { useContext, useState } from 'react'
import SocialMedia from './SocialMedia'
import { Link } from 'react-router-dom'
import { cardData } from '../utiles/CardData'
import { handleSubmission } from '../utiles/mailfc'


const Contact = () => {
    const [data] = useContext(cardData)
    const [clientHome, setClientHome] = useState(data[0].client?.homePrice || "70");
    const [clientMobility, setclientMobility] = useState(data[0].client?.mobilityPrice || "37");

    document.title = 'Sawifi | ContactUs'
    const contactInfo = [

        {
            svg: (<svg className='size-4' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black" />
            </svg>),
            link: 'https://maps.app.goo.gl/TakR5L12hNrmoVdE7',
            text: '105 3600 Townline Road, Abbotsford, BC, V2T 5W8, Canada'
        },
        {
            svg: (<svg className='size-4' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.95 18C14.8667 18 12.8083 17.546 10.775 16.638C8.74167 15.73 6.89167 14.4423 5.225 12.775C3.55833 11.1077 2.271 9.25767 1.363 7.225C0.455 5.19233 0.000666667 3.134 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0793332 5.725 0.238C5.90833 0.396667 6.01667 0.584 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.704 9.11233 5.162 9.687C5.62 10.2617 6.12433 10.816 6.675 11.35C7.19167 11.8667 7.73333 12.346 8.3 12.788C8.86667 13.23 9.46667 13.634 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1377 17.775 12.313C17.925 12.4883 18 12.684 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="black" />
            </svg>
            ),
            link: 'tel:(778)-372-9346',
            text: '(778)-372-9346'
        },
        {
            svg: (<svg className='size-4' width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196667 15.0217 0.000666667 14.5507 0 14V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196666 1.45067 0.000666667 2 0H18C18.55 0 19.021 0.196 19.413 0.588C19.805 0.98 20.0007 1.45067 20 2V14C20 14.55 19.8043 15.021 19.413 15.413C19.0217 15.805 18.5507 16.0007 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V14V4Z" fill="black" />
            </svg>
            ),
            link: 'mailto:info@sawifi.com',
            text: 'info@sawifi.com'
        },

    ]


    const handleClienthome = (e) => {
        const value = e.target.value;

        if (value === "" || /^[0-9]*$/.test(value)) {
            setClientHome(value);
        }
    };


    const handleClientMobility = (e) => {
        const value = e.target.value;

        if (value === "" || /^[0-9]*$/.test(value)) {
            setclientMobility(value);
        }
    };



    return (
        <div className='w-full'>
            <div className='Contact-header w-full'>
                <Link to='/'>
                    <img src="../images/logo.svg" alt="logo-contact" className='w-28 mx-auto mt-3 mb-8' />
                </Link>
                <div className='flex flex-col md:flex-row w-[95%] mx-auto mb-5'>

                    <div className='bg-[var(--secondColor)] rounded-xl md:rounded-r-none md:rounded-l-[20px] py-5 md:py-20 w-full md:w-2/5 px-6 md:pl-6 mb-3 md:mb-0'>
                        <h1 className='text-2xl text-center md:text-left md:text-[3.906vw] font-bold'>Contact Us</h1>
                        <div className='mt-3 md:mt-8 grid gap-y-4 mb-8'>

                            {contactInfo.map((info, i) => <a href={info.link} key={i * 3} target='_blank' className='flex items-start gap-x-2 text-sm md:text-[1.042vw] leading-none md:w-[70%]'>
                                {info.svg}
                                <span className='inline-block leading-[1.1]'>
                                    {info.text}
                                </span>
                            </a>)}
                        </div>
                        <p className='mb-3 text-sm'>Follow Us</p>
                        <SocialMedia position="unset" />
                    </div>

                    <div className='bg-[var(--primaryWhite)] w-full md:w-3/5 px-5 md:px-12 2xl:px-[5vw] py-8 md:py-[3vw] rounded-xl md:rounded-l-none md:rounded-r-[20px]'>
                        <p className='text-center mb-5 text-xl'>
                            Fill Your Details:
                        </p>
                        <form className='grid gap-y-5 md:gap-y-7' onSubmit={handleSubmission}>

                            <div className='flex flex-col md:flex-row items-center justify-between gap-y-5 md:gap-0'>
                                <div className='w-full md:w-[32%]'>
                                    <label className='block mb-2 text-sm md:text-[1.042vw] font-normal text-[var(--lightBlack)]'>Name<span className='text-xl leading-none text-red-600'>*</span></label>
                                    <input type="text" name='name' className='w-full bg-[var(--lightWhite)] h-12 rounded-[10px] px-2 py-2 text-[16px] font-normal outline-[var(--mainColor)]' />
                                </div>
                                <div className='w-full md:w-[32%]'>
                                    <label className='block mb-2 text-sm md:text-[1.042vw] font-normal text-[var(--lightBlack)]'>Address<span className='text-xl leading-none text-red-600'>*</span></label>
                                    <input type="text" name='address' className='w-full bg-[var(--lightWhite)] h-12 rounded-[10px] px-2 py-2 text-[16px] font-normal outline-[var(--mainColor)]' />
                                </div>
                                <div className='w-full md:w-[32%]'>
                                    <label className='block mb-2 text-sm md:text-[1.042vw] font-normal text-[var(--lightBlack)]'>Phone No.<span className='text-xl leading-none text-red-600'>*</span></label>
                                    <input type="tel" name='phone' className='w-full bg-[var(--lightWhite)] h-12 rounded-[10px] px-2 py-2 text-[16px] font-normal outline-[var(--mainColor)]' />
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row items-center justify-between gap-y-5 md:gap-0'>
                                <div className='w-full md:w-[48%]'>
                                    <label className='block mb-2 text-sm md:text-[1.042vw] font-normal text-[var(--lightBlack)]'>Email<span className='text-xl leading-none text-red-600'>*</span></label>
                                    <input type="text" name='email' className='w-full bg-[var(--lightWhite)] h-12 rounded-[10px] px-2 py-2 text-[16px] font-normal outline-[var(--mainColor)]' />
                                </div>
                                <div className='w-full md:w-[48%]'>
                                    <label className='block mb-2 text-sm md:text-[1.042vw] font-normal text-[var(--lightBlack)]'>Best Time To Contact<span className='text-xl leading-none text-red-600'>*</span></label>
                                    <input type='datetime-local' name='contactTime' className='w-full bg-[var(--lightWhite)] h-12 rounded-[10px] px-2 py-2 text-[16px] font-normal outline-[var(--mainColor)]' />
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row items-center justify-between gap-y-5 md:gap-0'>
                                <div className='w-full md:w-[48%]'>
                                    <label className='block mb-2 text-sm md:text-[1.042vw] font-normal text-[var(--lightBlack)]'>Home Service Provider<span className='text-xl leading-none text-red-600'>*</span></label>
                                    <select
                                        name='homeProvider'
                                        defaultValue={data[0].client && data[0].client.home || data[0].client && data[0].client.homePrice || ''}
                                        className='w-full bg-[var(--lightWhite)] h-12 rounded-[10px] px-2 py-2 text-[16px] font-normal outline-[var(--mainColor)]'
                                    >
                                        <option value="">Select Provider</option>
                                        {["Telus", "Rogers/Shaw", "Others"].map(provider => (
                                            <option key={provider} value={provider}>
                                                {provider}
                                            </option>
                                        ))}

                                        {data[0].client && !["Telus", "Rogers/Shaw", "Others"].includes(data[0].client.home) && (
                                            <option value={data[0].client.home}>
                                                {data[0].client.home}
                                            </option>
                                        )}
                                    </select>


                                </div>
                                <div className='w-full md:w-[48%]'>
                                    <label className='block mb-2 text-sm md:text-[1.042vw] font-normal text-[var(--lightBlack)]'>Home Services Bill<span className='text-xl leading-none text-red-600'>*</span></label>
                                    <div className='w-full h-fit relative'>
                                        <span className='pointer-events-none flex items-center justify-center h-fit absolute top-1/2 left-4 -translate-y-1/2 bg-[var(--lightWhite)]'>$</span>
                                        <input
                                            type="text"
                                            name='homeBill'
                                            value={clientHome}
                                            min='60'
                                            className='w-full bg-[var(--lightWhite)] h-12 rounded-[10px] pl-8 pr-2 py-2 text-[16px] font-normal outline-[var(--mainColor)]'
                                            onChange={handleClienthome}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row items-center justify-between gap-y-5 md:gap-0'>
                                <div className='w-full md:w-[48%]'>
                                    <label className='block mb-2 text-sm md:text-[1.042vw] font-normal text-[var(--lightBlack)]'>Mobility Service Provider<span className='text-xl leading-none text-red-600'>*</span></label>
                                    <select
                                        name='mobilityProvider'
                                        defaultValue={data[0].client && data[0].client.mobility || data[0].client && data[0].client.mobilityPrice || ''}
                                        className='w-full bg-[var(--lightWhite)] h-12 rounded-[10px] px-2 py-2 text-[16px] font-normal outline-[var(--mainColor)]'
                                    >
                                        <option value="">Select Provider</option>
                                        {["Telus", "Rogers/Shaw", "Others"].map(provider => (
                                            <option key={provider} value={provider}>
                                                {provider}
                                            </option>
                                        ))}

                                        {data[0].client && !["Telus", "Rogers/Shaw", "Others"].includes(data[0].client.mobility) && (
                                            <option value={data[0].client.mobility}>
                                                {data[0].client.mobility}
                                            </option>
                                        )}
                                    </select>

                                </div>
                                <div className='w-full md:w-[48%]'>
                                    <label className='block mb-2 text-sm md:text-[1.042vw] font-normal text-[var(--lightBlack)]'>Mobility Services Bill<span className='text-xl leading-none text-red-600'>*</span></label>
                                    <div className='w-full h-fit relative'>
                                        <span className='pointer-events-none flex items-center justify-center h-fit absolute top-1/2 left-4 -translate-y-1/2 bg-[var(--lightWhite)]'>$</span>
                                        <input
                                            type="text"
                                            name='mobilityBill'
                                            min='34'
                                            value={clientMobility}
                                            className='w-full bg-[var(--lightWhite)] h-12 rounded-[10px] pl-8 pr-2 py-2 text-[16px] font-normal outline-[var(--mainColor)]'
                                            onChange={handleClientMobility}
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row items-center justify-between gap-y-5 md:gap-0'>
                                <div className='w-full md:w-[48%]'>
                                    <label className='block mb-2 text-sm md:text-[1.042vw] font-normal text-[var(--lightBlack)]'>Do you have home security?</label>
                                    <select
                                        name='homesecurity'
                                        className='w-full bg-[var(--lightWhite)] h-12 rounded-[10px] px-2 py-2 text-[16px] font-normal outline-[var(--mainColor)]'
                                    >
                                        <option value="">Select Option</option>
                                        {["Yes", "No"].map(provider => (
                                            <option key={provider} value={provider}>
                                                {provider}
                                            </option>
                                        ))}

                                    </select>

                                </div>
                                <div className='w-full md:w-[48%]'>

                                    <button className='w-full flex justify-center items-center gap-x-5 bg-[var(--mainColor)] px-5 py-2 rounded-[10px] text-white text-xl md:text-[1.302vw] mt-5' type='submit'>
                                        Submit Your Info <img src="../images/arrow.svg" alt="arrow-right" className='w-8' />
                                    </button>

                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact