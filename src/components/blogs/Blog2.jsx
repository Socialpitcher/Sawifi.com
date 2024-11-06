import React from 'react'
import { Link } from 'react-router-dom';

const Blog2 = () => {

    const listItems = [
        'Introduction',
        'Top Internet Providers in Canada 2024',
        'How to Compare the Best Internet Plans in Canada',
        'Affordable and High-Speed Internet Options',
        'How Sawifi Simplifies Your Search for the Best Internet Plans',
        'Conclusion'
    ];

    const sections = [
        {
            title: 'Top Internet Providers in Canada 2024',
            providers: ['Bell Canada', 'Rogers', 'Telus', 'Shaw Communications', 'Regional Providers']
        },
        {
            title: 'How to Compare the Best Internet Plans in Canada',
            para: "Finding the best internet plans Canada offers can be overwhelming. Some key factors to consider are:",
            line: `Instead of visiting every provider’s website, use  <a href='/' class='text-[var(--mainColor)] font-bold' >SaWiFI</a> to easily compare packages, prices, and promotions. The platform simplifies your search for the best internet plans in Canada by giving you all the information in one place.`,
            factors: [
                'Speed: Determine how much speed you need for streaming, gaming, or working from home.',
                'Price: Make sure to check for special promotions and bundles.',
                'Data: Look for unlimited data plans if you have multiple devices connected or consume lots of bandwidth.'
            ]
        },
        {
            title: 'Affordable and High-Speed Internet Options',
            para: `For those looking for a balance between speed and affordability, providers like Bell, Telus, and Rogers offer competitive high-speed internet plans. However, if you’re specifically searching for affordable internet plans in Canada or cheap internet providers, Shaw is a great choice. To ensure you’re getting the best deal,  <a href='/' class='text-[var(--mainColor)] font-bold' >SaWiFI</a> lets you compare different plans side by side.`,
            line: `By using  <a href='/' class='text-[var(--mainColor)] font-bold' >SaWiFI</a>, you can quickly identify affordable, high-speed internet options tailored to your location and needs.`
        },
        {
            title: `How <a href='/' class='text-[var(--mainColor)] font-bold'>SaWiFI</a> Simplifies Your Search for the Best Internet Plans`,
            para: `At <a href='/' class='text-[var(--mainColor)] font-bold'>SaWiFI</a>, the process of finding the best internet plans in Canada has never been easier. The platform brings together plans from the top providers, including Bell, Rogers, Telus, and Shaw, allowing you to:`,
            line: `Whether you need high-speed internet, <b>unlimited data plans</b>, or affordable packages, <a href='/' class='text-[var(--mainColor)] font-bold'>SaWiFI</a> ensures that you don’t miss out on the best deals. Avoid the hassle of browsing multiple websites—let <a href='/' class='text-[var(--mainColor)] font-bold'>SaWiFI</a> do the work for you and save you both time and money.`,
            factors: [
                'Compare prices: See which provider offers the best value for your specific needs.',
                'Check promotions: Get up- to - date information on bundles and discounts.',
                "Customize your search: Filter by speed, data, and price to find exactly what you're looking for."

            ]
        },
        {
            title: 'Conclusion',
            conclusionText: `Choosing the best internet plans in Canada can feel overwhelming with so many options. That’s why <a href='/' class='text-[var(--mainColor)] font-bold'>SaWiFI</a> is here to simplify your search. By comparing plans from top providers like Bell, Rogers, Telus, and Shaw, <a href='/' class='text-[var(--mainColor)] font-bold'>SaWiFI</a> ensures you get the right combination of speed, data, and cost. Whether you’re after a fast fiber connection or a budget-friendly unlimited data plan, <a href='/' class='text-[var(--mainColor)] font-bold'>SaWiFI</a> is your go-to platform for finding the best internet plans Canada has to offer in 2024.Best deals on mobile phones in Canada.`

        },
    ];

    document.title = 'Discover the Best Internet Plans Canada Has to Offer in 2024'

    return (
        <div className='w-full px-3 mb-5'>
            <nav className='flex items-center justify-between mt-3 px-2 md:px-7'>
                <Link to='/'><img src="../images/logo.svg" alt="blog-logo" className='w-24' /></Link>
                <Link to='/blogs' className='flex bg-[var(--secondColor)] items-center justify-center px-5 py-2 rounded-xl gap-x-2 font-medium text-base'>
                    <img src="../images/back.svg" alt="backarrow" />Back
                </Link>
            </nav>

            <div className='grid place-items-center gap-y-5 mt-8 md:mt-16'>
                <span className='text-base bg-[var(--primaryWhite)] text-center inline-block px-4 py-1 rounded-3xl'>Plans Canada</span>
                <h1 className='font-bold text-2xl md:text-[3.906vw] leading-[1.3] text-center mb-2 w-full md:w-[65%] mx-auto'>
                    Discover the Best Internet Plans Canada Has to Offer in 2024
                </h1>
            </div>

            <div className='banner h-40 md:h-[30rem] w-full bg-zinc-400 mt-3 rounded-3xl overflow-hidden'>
                <img src="../images/blogimg2.webp" className='w-full h-full object-cover' alt="blogimage2" title='Discover the Best Internet Plans Canada Has to Offer in 2024' />
            </div>

            <div className='content mt-6 flex flex-col md:flex-row gap-x-7'>
                <div className='w-full md:w-1/4 relative'>
                    <div className='md:sticky md:top-5 h-fit bg-[var(--primaryWhite)] px-7 py-8 rounded-[20px]'>
                        <h2 className='text-center mb-5 font-bold text-xl'>Table Of Content</h2>
                        <ul className="">
                            {listItems.map((item, index) =>

                                <a href={`#section-${index}`}
                                    className='cursor-pointer mb-3 flex gap-x-2 items-start leading-[1.1] text-base'
                                    key={index}>
                                    <span className='shrink-0 size-[6px] rounded-full bg-[var(--mainColor)] inline-block'></span>
                                    {item}
                                </a>)}
                        </ul>
                    </div>
                </div>
                <div className='w-full md:w-3/4'>
                    <p className='text-base mt-8' id='section-0'>
                        Finding the <b>best internet plans Canada</b> offers is a task that requires comparing multiple providers, packages, and promotions. Fortunately, <a href='/' className='text-[var(--mainColor)] font-bold'>SaWiFI</a> is designed to help you easily navigate this process. Whether you're looking for high-speed internet, unlimited data, or the most affordable options, <a href='/' className='text-[var(--mainColor)] font-bold'>SaWiFI</a> makes it simple to compare internet plans from Canada’s leading providers. This guide will break down the top providers and show you how  <a href='/' className='text-[var(--mainColor)] font-bold'>SaWiFI</a> helps you find the best internet plans in Canada
                    </p>

                    {sections.map((c, i) =>
                        <div className='mt-12' key={i} id={`section-${i + 1}`}>
                            <h2 className='font-bold text-xl md:text-2xl mb-4' dangerouslySetInnerHTML={{ __html: c.title }}></h2>
                            {c.para && <p className='text-base mb-4' dangerouslySetInnerHTML={{ __html: c.para }}></p>}

                            {c.providers && c.providers.map((p, j) =>
                                <p key={j} className='flex gap-x-2 items-center font-base font-medium mt-0.5'><span className='shrink-0 size-[6px] rounded-full bg-[var(--mainColor)] inline-block'></span>{p}</p>
                            )}
                            {c.factors &&
                                <ul>
                                    {c.factors.map((t, k) =>
                                        <li className='flex gap-x-2 items-center leading-[1.1] text-base mt-2' key={k}>
                                            <span className='shrink-0 size-[6px] rounded-full bg-[var(--mainColor)] inline-block'></span>
                                            {t}
                                        </li>
                                    )}
                                </ul>
                            }
                            {c.line && <p className='text-base mt-2' dangerouslySetInnerHTML={{ __html: c.line }}></p>}
                            {c.conclusionText && <p className='text-base mt-2' dangerouslySetInnerHTML={{ __html: c.conclusionText }}></p>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Blog2