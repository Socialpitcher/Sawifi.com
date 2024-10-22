import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='w-full h-screen grid place-items-center'>
            <div className='w-[90%] md:w-[50%] mx-auto'>
                <img alt="error-img" src="../images/404.svg" className='w-full md:w-2/3 mx-auto mb-12' />
                <h1 className='text-xl md:text-4xl font-bold text-center'>Sorry! The page isn't found here</h1>
                <p className='text-center text-sm mt-5'>The page you’re looking for might have been moved or deleted. Click the button below to return to our homepage and continue your journey."</p>
                <Link to='/' className='w-full md:w-fit mx-auto flex justify-center items-center gap-x-5 mt-8 bg-[var(--mainColor)] px-5 py-2 rounded-[10px] text-white text-xl md:text-[1.302vw]' type='submit'>
                   <img src="./images/arrow.svg" alt="arrow-right" className='w-8 rotate-180' />
                   Back To Home
                </Link>
            </div>

        </div>
    )
}

export default Error