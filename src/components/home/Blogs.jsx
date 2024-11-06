import React from 'react'
import Heading from './Heading'
import BlogCard from './BlogCard'
import { Link } from 'react-router-dom'

const Blogs = () => {
    const blogsData = [
        {
            link: '/blogs/which-is-the-best-internet-provider-in-canada-2024',
            img: '../images/blogimg1.webp',
            title: 'Which is the Best Internet Provider in Canada 2024?',
            para: "In the search for the best internet provider in Canada 2024, customers look for factors like speed, price, coverage, and service reliability. In Canada, providers..."
        },
        {
            link: "/blogs/discover-the-Best-internet-plans-canada-has-to-offer-in-2024",
            img: '../images/blogimg2.webp',
            title: 'Discover the Best Internet Plans Canada Has to Offer in 2024',
            para: 'Finding the best internet plans Canada offers is a task that requires comparing multiple providers, packages, and promotions. Fortunately, Sawifi.com is designed to help you easily...'
        },
        {
            link: "/blogs/top-mobile-phone-deals-in-canada-2024",
            img: '../images/blogimg3.webp',
            title: 'Top Mobile Phone Deals in Canada 2024',
            para: "If you're looking for the best deals on phones in Canada, you’re in the right place. Whether you're upgrading to the latest smartphone or searching for budget-friendly options..."
        }
    ]


    return (
        <div className='w-[95%] md:w-[90%] mx-auto mt-20 md:mt-32'>
            <Heading text={'Our Blogs'} />
            <div className='flex flex-col gap-y-5 md:flex-row justify-between flex-wrap mt-5 md:mt-8'>
                {blogsData.map((e, i) => <BlogCard data={e} key={i * 3 * i} />)}
            </div>
            <Link to='/blogs' className='w-5/6 md:w-fit mx-auto flex justify-center items-center gap-x-5 mt-8 bg-[var(--mainColor)] px-5 py-2 rounded-[10px] text-white text-xl md:text-[1.302vw]' type='submit'>
                See All Blogs <img src="../images/arrow.svg" alt="arrow-right" className='w-8' />
            </Link>
        </div>
    )
}

export default Blogs