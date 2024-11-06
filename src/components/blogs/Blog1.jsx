import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const listItems = [
        'Introduction',
        'Top Internet Providers in Canada 2024',
        [
            'Bell Canada',
            'Rogers',
            'Telus',
            'Shaw Communications',
            'Regional Providers'
        ],
        'How to Choose the Best Internet Provider in Canada 2024',
        'Conclusion'
    ];

    const sections = [
        {
            title: 'Top Internet Providers in Canada 2024',
            providers: [
                {
                    name: 'Bell Canada',
                    description: "Bell is one of the strongest contenders for the best internet provider in Canada 2024. Bell's Fiber to the Home (FTTH) service delivers blazing fast internet speeds, which is perfect for power users or families who stream and game a lot. Major urban areas like Toronto, Ottawa, and Montreal are well covered, and Bell's unlimited data plans provide great flexibility for households."
                },
                {
                    name: 'Rogers',
                    description: "Rogers is another leading player offering high-speed internet across Canada. Their Ignite Internet service boasts speeds up to 1 Gbps, making them a strong option for people who want reliability and fast speeds. In provinces like Ontario and Atlantic Canada, Rogers is often seen as the best internet provider in Canada 2024 for users looking for high-speed options and excellent customer service."
                },
                {
                    name: 'Telus',
                    description: "In Western Canada, Telus is highly regarded. With their PureFibre network, Telus offers speeds and service reliability that rivals Bell. Their growing fiber network and solid customer service make Telus a great choice, especially in cities like Vancouver, Calgary, and Edmonton. Telus continues to expand, solidifying its spot as one of the best internet providers in Canada 2024."
                },
                {
                    name: 'Shaw Communications',
                    description: "For those in Western Canada on a budget, Shaw's Fiber+ Gig plans provide excellent value. Shaw offers no-contract plans, which gives more flexibility to users. If you're looking for a good balance between cost and performance, Shaw might be the best internet provider in Canada 2024 for affordable high-speed service."
                },
                {
                    name: 'Regional Providers',
                    description: "In Quebec and Atlantic Canada, regional providers like Videotron and Eastlink hold strong positions. Videotron, with its affordable plans and good speeds, is a great choice for customers in Quebec. Eastlink, known for its excellent customer service, serves the Maritime provinces. Depending on your location, these regional players might be the best internet providers in Canada 2024 for you."
                }
            ]
        },
        {
            title: 'How to Choose the Best Internet Provider in Canada 2024',
            para: "To select the best internet provider in Canada 2024, consider these factors:",
            factors: [
                "Speed: Determine if your household needs high-speed internet for streaming and gaming, or if a basic plan will suffice.",
                "Price: Compare the cost of the plans. Some providers offer great discounts for bundling services.",
                "Customer Service: Opt for a provider known for good customer support."
            ]
        },
        {
            title: 'Conclusion',
            conclusionText: "The best internet provider in Canada 2024 will vary based on your specific needs. Bell, Rogers, Telus, and Shaw are all strong choices, but regional providers like Videotron and Eastlink also offer excellent service in their areas. Whether you prioritize speed, budget, or customer service, there’s an option for everyone in the Canadian internet market."
        }
    ];

    document.title='Which is the Best Internet Provider in Canada 2024?'

    return (
        <div className='w-full px-3 mb-5'>
            <nav className='flex items-center justify-between mt-3 px-2 md:px-7'>
                <Link to='/'><img src="../images/logo.svg" alt="blog-logo" className='w-24' /></Link>
                <Link to='/blogs' className='flex bg-[var(--secondColor)] items-center justify-center px-5 py-2 rounded-xl gap-x-2 font-medium text-base'>
                    <img src="../images/back.svg" alt="backarrow" />Back
                </Link>
            </nav>

            <div className='grid place-items-center gap-y-5 mt-8 md:mt-16'>
                <span className='text-base bg-[var(--primaryWhite)] text-center inline-block px-4 py-1 rounded-3xl'>Best Internet</span>
                <h1 className='font-bold text-2xl md:text-[3.906vw] leading-[1.3] text-center mb-2 w-full md:w-[60%] mx-auto'>
                    Which is the Best Internet Provider in Canada 2024?
                </h1>
            </div>

            <div className='banner h-40 md:h-[30rem] w-full bg-zinc-400 mt-3 rounded-3xl overflow-hidden'>
                <img src="../images/blogimg1.webp" className='w-full h-full object-cover' alt="blogimage1" title='Which is the Best Internet Provider in Canada 2024?' />
            </div>

            <div className='content mt-6 flex flex-col md:flex-row gap-x-7'>
                <div className='w-full md:w-1/4 relative'>
                    <div className='md:sticky md:top-5 h-fit bg-[var(--primaryWhite)] px-7 py-8 rounded-[20px]'>
                        <h2 className='text-center mb-5 font-bold text-xl'>Table Of Content</h2>
                        <ul className="">
                            {listItems.map((item, index) =>
                                Array.isArray(item) ? (
                                    <ul className="pl-5 mb-3" key={index}>
                                        {item.map((subItem, subIndex) => (
                                            <a href={`#provider-${subItem.replace(/\s+/g, '-').toLowerCase()}`}
                                                className='cursor-pointer mb-1 flex items-center gap-x-2 text-base'
                                                key={subIndex}>
                                                <span className='shrink-0 size-[5px] rounded-full bg-[var(--mainColor)] inline-block'></span>
                                                {subItem}
                                            </a>
                                        ))}
                                    </ul>
                                ) : (
                                    <a href={`#section-${index > 1 ? index - 1 : index}`}
                                        className='cursor-pointer mb-3 flex gap-x-2 items-start leading-[1.1] text-base'
                                        key={index}>
                                        <span className='shrink-0 size-[6px] rounded-full bg-[var(--mainColor)] inline-block'></span>
                                        {item}
                                    </a>
                                )
                            )}
                        </ul>
                    </div>
                </div>
                <div className='w-full md:w-3/4'>
                    <p className='text-base mt-8' id='section-0'>
                        In the search for the <span className='font-bold'>best internet provider in Canada 2024</span>, customers look for factors like speed, price, coverage, and service reliability. In Canada, providers such as Bell, Rogers, Telus, Shaw, and regional players compete to offer the best internet services. Here's a breakdown of the top internet providers to help you decide which might be the best for your home.
                    </p>

                    {sections.map((c, i) =>
                        <div className='mt-12' key={i} id={`section-${i + 1}`}>
                            <h2 className='font-bold text-xl md:text-2xl'>{c.title}</h2>
                            {c.para && <p className='text-base mt-2 mb-4'>{c.para}</p>}

                            {c.providers && c.providers.map((p, j) =>
                                <div key={j} id={`provider-${p.name.replace(/\s+/g, '-').toLowerCase()}`}>
                                    <h3 className='font-base font-bold mt-3 underline underline-offset-2'>{p.name}</h3>
                                    <p className='mt-2 font-regular'>{p.description}</p>
                                </div>
                            )}
                            {c.factors &&
                                <ul>
                                    {c.factors.map((t, k) =>
                                        <li className='flex gap-x-2 items-start leading-[1.1] text-base mt-2' key={k}>
                                            <span className='shrink-0 size-[6px] rounded-full bg-[var(--mainColor)] inline-block'></span>
                                            {t}
                                        </li>
                                    )}
                                </ul>
                            }
                            {c.conclusionText && <p className='text-base mt-2'>{c.conclusionText}</p>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Blog;
