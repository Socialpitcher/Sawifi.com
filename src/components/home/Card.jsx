import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    const renderDiscountNote = () => {
        if (data.mobility.note) {
            if (data.mobility.Provider === 'Telus') {
                return (
                    <div className='notediv mb-5 text-red-600'>
                        <h3 className='mb-2 text-base leading-[1.1]'>
                            Note: Extra discount if getting more Lines:
                        </h3>
                        {['2 Lines: $7.5 off Each Line',
                            '3 Lines: $10 off Each Line',
                            '4 Lines: $15 off Each Line'].map((discount, index) => (
                                <p className='text-sm' key={index}>{discount}</p>
                            ))}
                    </div>
                );
            } else if (data.mobility.Provider === 'Rogers') {
                return (
                    <h3 className='text-base mb-5 text-red-600 leading-[1.1]'>
                        Note: $10 additional Discount from 2nd Line
                    </h3>
                );
            }
        }
        return null;
    };

    return (
        <div className='w-full md:w-[28vw] bg-[var(--primaryWhite)] rounded-[20px] overflow-hidden pt-8 pb-6'>
            <div className='card-info px-5'>
                {renderDiscountNote()}

                <div className='Payment-info'>
                    {data.internet?.Price && (<p className='flex flex-wrap items-center gap-x-5 font-medium text-sm md:text-[1.198vw] mb-4 text-[var(--primaryBlack)]'>
                        <span className='block w-full font-normal text-sm text-[var(--lightBlack)]'>{data.internet?.title}</span>
                        <span>Our Home Services Bill: ${data.internet.Price}</span> <span className='bg-[var(--secondColor)] rounded-2xl px-3 py-1 text-sm'>{data.internet.Provider}</span>
                    </p>)}

                    <p className='flex flex-wrap items-center gap-x-5 font-medium text-sm md:text-base text-[var(--primaryBlack)]'>
                    <span className='block w-full text-sm text-[var(--lightBlack)] font-normal'>{data.mobility.title}</span>
                        <span> Our Mobility Bill: ${data.mobility.Price}</span> <span className='bg-[var(--secondColor)] rounded-2xl px-3 py-1 text-sm'>{data.mobility.Provider}</span>
                    </p>
                    <p className='font-medium text-sm md:text-base mt-8 text-[var(--lightBlack)]'>
                        Currently You Paying: <span>${data.internet?.Price ? data.InputTotalBill : data.inputmobility}</span>

                    </p>
                    <p className='font-bold text-2xl mt-2 text-green-600'>
                        Our Price: <span>${(data.mobility.Price || 0) + (data.internet?.Price || 0)}</span>
                    </p>
                </div>

                <div className='Subscription-info mt-8 text-[var(--lightBlack)]'>
                    <p className='font-medium text-sm md:text-base mt-5 text-[var(--primaryBlack)]'>Optional additional charges for these services:</p>
                    <p className='font-normal text-xs md:text-sm mt-2'>TV with NetFlix : $47 </p>
                    <p className='font-normal text-xs md:text-sm mt-2'>TV without Netflix : $37 </p>
                    <p className='font-normal text-xs md:text-sm mt-2'>Homephone : $13 </p>
                </div>

                <Link to={`/ContactUs/ClientInfo`} className='mx-auto w-fit flex items-center gap-x-5 mt-3 md:mt-6 bg-[var(--mainColor)] px-5 py-2 rounded-[10px] text-white text-xl md:text-[1.302vw]' type='submit'>
                    Get it Now <img src="../images/arrow.svg" alt="arrow-right" className='w-8 rotate-90' />
                </Link>
            </div>
        </div>
    );
};

export default Card;
