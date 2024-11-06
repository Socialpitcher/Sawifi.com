import React from 'react'
import BlogCard from './home/BlogCard'
import Heading from './home/Heading'
import { Link } from 'react-router-dom'

const Blogs = () => {
    const blogsData = [
        {
            link: '/blogs/the-complete-telus-vs-rogers-internet-comparison-which-provider-is-right-for-you?',
            img: '../images/blogimg4.webp',
            title: 'The Complete Telus vs. Rogers Internet Comparison: Which Provider Is Right for You?',
            para: "Choosing between Telus and Rogers for your internet provider can be challenging, especially with so many factors to consider. In this Telus vs. Rogers internet comparison, we’ll explore pricing, speed..."
        },
        {
            link: '/blogs/best-affordable-home-internet-for-students-in-canada-compare-and-save-with-SaWiFi',
            img: '../images/blogimg5.webp',
            title: 'Best Affordable Home Internet for Students in Canada | Compare & Save with SaWifi',
            para: "In today’s highly digital environment, affordable home internet is a necessity for students in Canada. From attending virtual classes to accessing online resources and..."
        },
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
        },

    ]


    return (
        <div className='w-[95%] md:w-[90%] mx-auto mt-2'>
            <nav className='flex items-center justify-between mt-5 mb-12 px-2 md:px-7'>
                <Link to='/'><img src="../images/logo.svg" alt="blog-logo" className='w-24' /></Link>
                <Link to='/ContactUs' className='w-fit flex justify-center items-center gap-x-5 bg-[var(--mainColor)] px-5 py-2 rounded-[10px] text-white text-sm md:text-[1.302vw]'>
                    ContactUs <img src="../images/arrow.svg" alt="arrow-right" className='hidden md:w-8 md:block' />
                </Link>
            </nav>
            <Heading text={'Our Blogs'} />
            <div className='flex flex-col gap-y-5 md:flex-row md:gap-x-5 flex-wrap mt-5 md:mt-8'>
                {blogsData.map((e, i) => <BlogCard data={e} key={i * 3 * i} />)}
            </div>
        </div>
    )
}

export default Blogs