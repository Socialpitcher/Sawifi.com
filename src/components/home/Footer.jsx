import React from 'react'
import SocialMedia from '../SocialMedia'

const Footer = () => {


    return (
        <div className='w-[95%] mx-auto bg-[var(--secondColor)] mt-16 rounded-[20px] px-8 md:px-0 py-8 mb-3'>
            <SocialMedia position="auto" />
            <p className='mt-5 mb-1 font-bold text-center text-[var(--lightBlack)] text-sm md:text-[1.042vw]'>Email: <a className='font-normal' href="mailto:info@sawifi.com">info@sawifi.com</a></p>
            <p className='font-medium text-center text-[var(--lightBlack)] text-sm md:text-[1.042vw]'>
                Copyright 2024 Sawifi All rights reserved. Made by <a href="http://socialpitcher.com/" target='_blank' className='underline font-bold'>SocialPitcher.</a>
            </p>
        </div>
    )
}

export default Footer