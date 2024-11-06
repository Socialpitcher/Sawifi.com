import React, { startTransition, useCallback, useContext, useState } from 'react';
import Cards from './Cards';
import { cardData } from '../../utiles/CardData';
import Swal from 'sweetalert2';

const HomeForm = () => {
    const [data, setdata] = useContext(cardData);
    const [clientBill, setClientBill] = useState("");
    const [mobilityBill, setMobilityBill] = useState("");
    const [homeProvider, setHomeProvider] = useState('');
    const [mobilityProvider, setMobilityProvider] = useState('');
    const [Cdata, setCdata] = useState(null)



    const validateForm = useCallback(() => {
        if (!homeProvider || !mobilityProvider || Number(clientBill) < 60 || Number(mobilityBill) < 34) {
            Swal.fire({
                title: 'Error!',
                text: 'Ensure all fields are filled. Home Services Bill: at least 60; Mobility Bill: at least 34.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return false;
        }
        return true;
    }, [homeProvider, mobilityProvider, clientBill, mobilityBill]);

    const handleForm = useCallback((e) => {
        e.preventDefault();

        if (!validateForm()) return;

        startTransition(() => {
            const TotalPay = Number(clientBill) + Number(mobilityBill);
            const filterCards = data
                .filter(item =>
                    item.internet?.Price <= Number(clientBill) ||
                    item.mobility?.Price <= Number(mobilityBill))
                .map(item => ({
                    ...item,
                    OurTotal: (item.internet?.Price || 0) + (item.mobility?.Price || 0),
                    InputTotalBill: TotalPay,
                    inputmobility: Number(mobilityBill)
                }))
                .sort((a, b) => (a.OurTotal + a.InputTotalBill) - (b.OurTotal + b.InputTotalBill));

            setCdata(filterCards.length > 0 ? filterCards : null);

            if (filterCards.length > 0) {
                setTimeout(() => {
                    document.getElementById('service-cards').scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });

        setdata(prev => 
            prev.map(item => 
                item.id === "pack1" 
                ? {
                    ...item, 
                    client: {
                        home: homeProvider,
                        homePrice: clientBill,
                        mobility: mobilityProvider,
                        mobilityPrice: mobilityBill
                    }
                }
                : item
            )
        );

    }, [clientBill, mobilityBill, validateForm]);

    const handleClientBillChange = (e) => {
        const value = e.target.value;

        if (value === "" || /^[0-9]*$/.test(value)) {
            setClientBill(value);
        }
    };

    const handleMobilityBillChange = (e) => {
        const value = e.target.value;

        if (value === "" || /^[0-9]*$/.test(value)) {
            setMobilityBill(value);
        }
    };

    return (
        <>
            <div className='w-full bg-[var(--secondColor)] md:bg-transparent pb-3 md:pb-0'>
                <div id='sawifi-form' className='w-[95%] bg-[var(--primaryWhite)] rounded-[20px] mx-auto md:-translate-y-[7vw] overflow-hidden py-10 px-5 md:px-[3vw] md:py-[2.5vw]'>
                    <h2 className='text-sm text-center md:text-left md:text-[1.302vw] font-bold mb-5'>Fill your Details for Comparison:</h2>
                    <form className='flex flex-wrap justify-between flex-col md:flex-row' onSubmit={handleForm}>
                        <div className='w-full md:w-[19%]'>
                            <label className='block mb-2 text-sm lg:text-[1.042vw] font-normal text-[var(--lightBlack)]'>Current Home Provider</label>
                            <select
                                className='cursor-pointer w-full bg-[var(--lightWhite)] h-12 rounded-[10px] px-2 py-2 text-[16px] font-normal outline-[var(--mainColor)]'
                                value={homeProvider}
                                onChange={e => setHomeProvider(e.target.value)}
                            >
                                <option value="">Select Provider</option>
                                {["Telus", "Rogers/Shaw", "Others"].map(provider => (
                                    <option key={provider} value={provider}>{provider}</option>
                                ))}
                            </select>
                        </div>
                        <div className='w-full mt-5 md:mt-0 md:w-[19%]'>
                            <label className='block mb-2 text-sm lg:text-[1.042vw] font-normal text-[var(--lightBlack)]'>Home Service Options</label>
                            <select
                                className='cursor-pointer w-full bg-[var(--lightWhite)] h-12 rounded-[10px] px-2 py-2 text-[16px] font-normal outline-[var(--mainColor)]'
                            >
                                <option value="">Home Service Options</option>
                                {["Internet", "Internet+HomePhone", "Internet+TV", "Internet+Homephone+TV"].map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        <div className='w-full mt-5 md:mt-0 md:w-[19%]'>
                            <label className='block mb-2 text-sm lg:text-[1.042vw] font-normal text-[var(--lightBlack)]'>Home Services Bill</label>
                            <div className='w-full h-fit relative'>
                                <span className='flex items-center justify-center h-fit absolute top-1/2 left-4 -translate-y-1/2 bg-[var(--lightWhite)] pointer-events-none'>$</span>
                                <input
                                    min='60'
                                    className='w-full bg-[var(--lightWhite)] h-12 rounded-[10px] pl-8 pr-2 py-2 text-[16px] font-normal outline-[var(--mainColor)]'
                                    type="text"
                                    value={clientBill}
                                    onChange={handleClientBillChange}
                                />
                            </div>
                        </div>
                        <div className='w-full mt-5 md:mt-0 md:w-[19%]'>
                            <label className='block mb-2 text-sm lg:text-[1.042vw] font-normal text-[var(--lightBlack)]'>Mobility Provider</label>
                            <select
                                className='cursor-pointer w-full bg-[var(--lightWhite)] h-12 rounded-[10px] px-2 py-2 text-[16px] font-normal outline-[var(--mainColor)]'
                                value={mobilityProvider}
                                onChange={e => setMobilityProvider(e.target.value)}
                            >
                                <option value="">Select Provider</option>
                                {["Telus", "Rogers", "Bell", "Fido", "Koodo", "Virgin", "Freedom"].map(provider => (
                                    <option key={provider} value={provider}>{provider}</option>
                                ))}
                            </select>
                        </div>
                        <div className='w-full mt-5 md:mt-0 md:w-[19%]'>
                            <label className='block mb-2 text-sm lg:text-[1.042vw] font-normal text-[var(--lightBlack)]'>Mobility Bill (Per Line)</label>
                            <div className='w-full h-fit relative'>
                                <span className='pointer-events-none flex items-center justify-center h-fit absolute top-1/2 left-4 -translate-y-1/2 bg-[var(--lightWhite)]'>$</span>
                                <input
                                    min='34'
                                    className='w-full bg-[var(--lightWhite)] h-12 rounded-[10px] pl-8 pr-2 py-2 text-[16px] font-normal outline-[var(--mainColor)]'
                                    type="text"
                                    value={mobilityBill}
                                    onChange={handleMobilityBillChange}
                                />
                            </div>
                        </div>
                        <button className='w-full md:w-fit mx-auto flex justify-center items-center gap-x-5 mt-8 bg-[var(--mainColor)] px-5 py-2 rounded-[10px] text-white text-xl md:text-[1.302vw]' type='submit'>
                            See Comparison <img src="../images/arrow.svg" alt="arrow-right" className='w-8' />
                        </button>
                    </form>
                </div>
            </div>
            <Cards data={Cdata} />
        </>
    );
};

export default HomeForm;
