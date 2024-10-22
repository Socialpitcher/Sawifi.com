import React from 'react'
import Heading from './Heading'
import Rvcard from './Rvcard'

const Review = () => {
    const reviews = [
        {
            rvimg:'../images/rv-img1.webp',
            title: 'Sarah Thompson',
            review: "Sawifi has transformed my internet experience! The speed is fantastic, and I haven’t experienced any dropouts while working from home. Highly recommend!"
        },
        {
            rvimg:'../images/rv-img2.webp',
            title: 'David Martinez',
            review: "The customer service from sawifi is top-notch. They helped me with the setup and answered all my questions patiently. Plus, the mobility feature allows me to stay connected on the go!"
        },
        {
            rvimg:'../images/rv-img3.webp',
            title: 'Emily Chen',
            review: "I’ve been using sawifi for a few months now, and the performance has been outstanding. Streaming and gaming are seamless. It’s definitely worth the investment!"
        },
        {
            rvimg:'../images/rv-img4.webp',
            title: 'Michael Johnson',
            review: "Sawifi offers great value for money. The speeds are impressive, and I love the flexibility of their plans. It’s perfect for my busy lifestyle!"
        },
        {
            rvimg:'../images/rv-img5.webp',
            title: 'Jessica Lee',
            review: "Switching to sawifi was a breeze. The installation was quick, and I’ve noticed a significant improvement in my internet speed. Highly satisfied!"
        },
        {
            rvimg:'../images/rv-img6.webp',
            title: 'Brian Patel',
            review: "I’ve tried a few providers, but sawifi has been the best so far. The connection is consistent, and I love being able to connect while traveling. Definitely recommend!"
        },
        {
            rvimg:'../images/rv-img7.webp',
            title: 'Karen Adams',
            review: "The user interface of sawifi's app is very user-friendly. I can easily manage my settings and monitor my data usage. Plus, the mobility feature is fantastic!"
        },
        {
            rvimg:'../images/rv-img8.webp',
            title: 'Thomas Clark',
            review: "Sawifi is perfect for families. We have multiple devices running at once, and it handles everything smoothly. I’m very happy with the service!"
        },
    ]

    return (
        <div className='w-[95%] md:w-[85%] mx-auto mt-20 md:mt-32'>
            <Heading text='Hear It From Our Customers!' />
            <div className='flex flex-wrap justify-between mt-5 md:mt-8 gap-y-2 md:gap-y-6'>
                {reviews.map((e,i) => <Rvcard data={e} key={i * 8} />)}
            </div>
        </div>
    )
}

export default Review