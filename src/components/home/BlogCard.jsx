import React from 'react'

const BlogCard = ({ data }) => {
    return (
        <div className='w-full md:w-[32%] bg-[var(--primaryWhite)] rounded-[20px] overflow-hidden'>
            <img src={data.img} alt={data.title} className='w-full h-60 object-cover' />
            <div className='px-7 py-6'>
                <h3 className='font-bold text-xl md:text-[1.302vw] text-[var(--primaryBlack)] leading-[1.2]'>{data.title}</h3>
                <p className='mt-3 font-normal text-[var(--lightBlack)] text-sm'>
                    {data.para}
                </p>
            </div>
        </div>
    )
}

export default BlogCard