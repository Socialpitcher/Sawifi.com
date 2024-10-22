import React from 'react'

const Rvcard = ({data}) => {
    return (
        <div className='w-[49%] md:w-[23%] bg-[var(--primaryWhite)] px-3 py-5 md:px-5 md:py-8 rounded-xl md:rounded-[20px]'>
            <div className="flex items-center gap-x-3">
                <img src={data.rvimg} alt={`reviewer-img`} className='rounded-full size-12 overflow-hidden' />
                <h3 className='font-bold text-sm md:text-[1.042vw] text-[var(--primaryBlack)] leading-[1.2] w-12'>{data.title}</h3>
            </div>
            <p className='mt-5 font-normal text-[var(--lightBlack)] text-xs 2xl:text-sm'>
            {data.review}
            </p>
        </div>
    )
}

export default Rvcard