import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='md:h-[30vw] pt-3 md:px-5 md:pt-5 bg-[var(--secondColor)] relative'>
      <div className='flex items-center justify-between px-5'>
        <img src="../images/logo.svg" alt="brand-logo" className='w-28' />
        <Link to='/ContactUs' className='w-fit flex justify-center items-center gap-x-5 bg-[var(--mainColor)] px-5 py-2 rounded-[10px] text-white text-sm md:text-[1.302vw]'>
          ContactUs <img src="../images/arrow.svg" alt="arrow-right" className='hidden md:w-8 md:block' />
        </Link>
      </div>
      <div className='pt-14 pb-12 md:py-0 mx-auto md:absolute md:left-1/2 md:top-1/2 md:-translate-y-1/2 w-[90%] md:w-[50%] md:-translate-x-1/2'>
        <h1 className='font-bold text-[21px] md:text-[3.906vw] leading-[1.3] text-center mb-2'>We Compare, You save!</h1>
        <p className='text-sm text-center'>
          We Compare Prices from top service providers to find the best and most affordable plans tailored to your needs, So you can Save time, Avoid Stress and Keep More Money In your  pocket.
        </p>
      </div>
    </div>
  )
}

export default Header