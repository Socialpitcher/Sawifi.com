import React from 'react'
import Heading from './Heading'
import BlogCard from './BlogCard'

const Blogs = () => {

    const blogsData = [{
        img: '../images/blogimg1.webp',
        title: 'Wi-Fi: Evolution and Impact',
        para: "Wi-Fi has changed how we connect, from early slow speeds to today's fast and secure connections. Wi-Fi 6 promises even faster networks, enhanced efficiency, and better performance, shaping how homes and businesses operate. Connectivity has now become a crucial part of daily life."
    },
    {
        img: '../images/blogimg2.webp',
        title: 'IoT and Wi-Fi: Smart Life',
        para: 'The rise of the Internet of Things (IoT) has made Wi-Fi the backbone of smart homes and devices. From controlling lighting to monitoring health, Wi-Fi enables seamless interaction. This evolution of connectivity is turning homes into efficient, responsive environments.'
    },
    {
        img: '../images/blogimg3.webp',
        title: 'Protect Your Wi-Fi Network',
        para: 'As more devices connect to your Wi-Fi, security becomes vital to protect personal data from cyber threats. Strong encryption, regular updates, and smart usage of your network help prevent attacks. Staying ahead of risks ensures a safer digital experience for all users.'
    },]

    return (
        <div className='w-[95%] md:w-[90%] mx-auto mt-20 md:mt-32'>
            <Heading text={'Our Blogs'} />
            <div className='flex flex-col gap-y-5 md:flex-row justify-between flex-wrap mt-5 md:mt-8'>
                {blogsData.map((e, i) => <BlogCard data={e} key={i * 3 * i} />)}
            </div>
        </div>
    )
}

export default Blogs