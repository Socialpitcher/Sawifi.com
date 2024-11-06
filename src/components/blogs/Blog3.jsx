import React from 'react'
import { Link } from 'react-router-dom';

const Blog3 = () => {

    const listItems = [
        'Discover the Best Deals on Phones in Canada for 2024',
        'Top Phone Deals in Canada 2024',
        'Where to Find the Best Phone Deals',
        'How Sawifi Helps You Find the Best Deals on Phones in Canada',
        'Conclusion'
    ];

    const sections = [
        {
            title: 'Discover the Best Deals on Phones in Canada for 2024',
            para: `If you're looking for the <b> best deals on phones in Canada</b>, you’re in the right place. Whether you're upgrading to the latest smartphone or searching for budget-friendly options, Canada's major carriers and retailers are offering excellent promotions this year. This guide will explore the <b>best phone deals in Canada</b>, from flagship devices like iPhones and Samsung Galaxy to more affordable options. Plus, we'll show you how <a href='/' class='text-[var(--mainColor)] font-bold' >SaWiFI</a> can help you easily compare phone deals and promotions across different providers.
`,
        },
        {
            title: 'Top Phone Deals in Canada 2024',
            providers: [
                {
                    name: 'iPhone Deals',
                    description: `The latest iPhones are always in demand, and 2024 is no different. Apple’s newest models, such as the iPhone 15 and iPhone 15 Pro, are available with excellent trade-in offers, discounts, and financing options. You can find the <b>best deals on iPhones in Canada</b> from top carriers like Bell, Rogers, and Telus, as well as at major retailers like Best Buy. For the latest iPhone deals, head to <a href='/' class='text-[var(--mainColor)] font-bold' >SaWiFI</a> to compare prices and promotions.`
                },
                {
                    name: 'Samsung Galaxy Offers',
                    description: `Samsung fans can rejoice as there are great offers on the latest Galaxy S23 and Galaxy Z Flip models. Providers like Bell, Rogers, and Telus offer trade-in promotions, significant discounts on contract plans, and bundles that include tablets or wearables. To ensure you’re getting the <b> best deals on Samsung phones in Canada</b>, visit <a href='/' class='text-[var(--mainColor)] font-bold' >SaWiFI</a> and compare deals from all the top carriers.`

                },
                {
                    name: 'Google Pixel Discounts',
                    description: `The <b>Google Pixel</b> lineup continues to be a popular choice for those looking for a clean Android experience. With the Pixel 8 and Pixel 8 Pro now available, there are several attractive deals and discounts. Carriers and retailers are offering cashback, trade-in programs, and financing options to make the Pixel more affordable. Compare the best deals on Google Pixel phones at <a href='/' class='text-[var(--mainColor)] font-bold' >SaWiFI</a> to find the perfect offer for you.`
                },
                {
                    name: 'Affordable Phones from Motorola and Huawei',
                    description: `If you’re searching for affordable phones in Canada, Motorola and Huawei provide budget-friendly options without sacrificing quality. These brands offer high-value phones at prices much lower than the flagship devices. You can find deals for phones like the Motorola Edge or Huawei P40 at major carriers and retailers. To see how these models compare to the big brands, check <a href='/' class='text-[var(--mainColor)] font-bold' >SaWiFI</a> and get the best cheap phone deals in Canada.`
                }
            ]
        },
        {
            title: 'Where to Find the Best Phone Deals',
            para: `If you're hunting for the best deals on phones in Canada, it pays to shop around. Carriers such as Bell, Rogers, Telus, and regional providers like Fido and Koodo often run special promotions. Retailers like <a href='https://www.bestbuy.ca/' target='_blank' class="text-[var(--mainColor)]">Best Buy</a> and The Source also offer discounts, trade-in offers, and financing options, especially during major sales like Black Friday or Boxing Day.`,
            line: `Instead of visiting multiple sites, you can head to <a href='/' class='text-[var(--mainColor)] font-bold' >SaWiFI</a> to easily compare all the latest phone deals and promotions. This saves you time and helps you find the perfect plan or device..`,
        },
        {
            title: `How <a href='/' class='text-[var(--mainColor)] font-bold'>SaWiFI</a>  Helps You Find the Best Deals on Phones in Canada`,
            para: `<a href='/' class='text-[var(--mainColor)] font-bold'>SaWiFI</a> is the best tool for comparing the best deals on phones in Canada. Whether you’re looking for a new iPhone, Samsung Galaxy, or a more affordable phone option, Sawifi lets you:`,
            line: `Stop wasting time browsing through multiple websites—<a href='/' class="text-[var(--mainColor)]"> makes it simple to find the best phone deals in Canada at a glance.`,
            factors: [
                ' Compare phone prices across major carriers like Bell, Rogers, Telus, and regional providers.',
                'Discover promotions and discounts, including trade -in offers and bundled deals.',
                'Filter options by device, plan type, and data to find the perfect match.'

            ]
        },
        {
            title: 'Conclusion',
            conclusionText: `Getting the <b> best deals on phones in Canada </b> is easy when you know where to look. Major carriers like Bell, Rogers, and Telus, along with retailers like Best Buy, all have fantastic promotions on flagship devices like the iPhone 15, Samsung Galaxy S23, and Google Pixel 8.
            To make your search even easier, <a href='/' class='text-[var(--mainColor)] font-bold' >SaWiFI</a> allows you to quickly compare all the top phone deals, ensuring you find the best price, trade-in offer, or financing option available.
If you're ready to upgrade your phone and want to find the best deals on phones in Canada, visit <a href='/' class='text-[var(--mainColor)] font-bold' >SaWiFI</a> today and start comparing! `

        },
    ];

    document.title = 'Top Mobile Phone Deals in Canada 2024'

    return (
        <div className='w-full px-3 mb-5'>
            <nav className='flex items-center justify-between mt-3 px-2 md:px-7'>
                <Link to='/'><img src="../images/logo.svg" alt="blog-logo" className='w-24' /></Link>
                <Link to='/blogs' className='flex bg-[var(--secondColor)] items-center justify-center px-5 py-2 rounded-xl gap-x-2 font-medium text-base'>
                    <img src="../images/back.svg" alt="backarrow" />Back
                </Link>
            </nav>

            <div className='grid place-items-center gap-y-5 mt-8 md:mt-16'>
                <span className='text-base bg-[var(--primaryWhite)] text-center inline-block px-4 py-1 rounded-3xl'>Phone Deals</span>
                <h1 className='font-bold text-2xl md:text-[3.906vw] leading-[1.3] text-center mb-2 w-full md:w-[65%] mx-auto'>
                    Top Mobile Phone Deals in Canada 2024
                </h1>
            </div>

            <div className='banner h-40 md:h-[30rem] w-full bg-zinc-400 mt-3 rounded-3xl overflow-hidden'>
                <img src="../images/blogimg3.webp" className='w-full h-full object-cover' alt="blogimage3" title='Top Mobile Phone Deals in Canada 2024' />
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
                    {sections.map((c, i) =>
                        <div className='mt-12' key={i} id={`section-${i}`}>
                            <h2 className='font-bold text-xl md:text-2xl mb-4' dangerouslySetInnerHTML={{ __html: c.title }}></h2>
                            {c.para && <p className='text-base mb-4' dangerouslySetInnerHTML={{ __html: c.para }}></p>}

                            {c.providers && c.providers.map((p, j) =>
                                <div key={j}>
                                    <h3 className='font-base font-bold mt-3 underline underline-offset-2'>{p.name}</h3>
                                    <p className='mt-2 font-regular' dangerouslySetInnerHTML={{ __html: p.description }}></p>
                                </div>
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

export default Blog3