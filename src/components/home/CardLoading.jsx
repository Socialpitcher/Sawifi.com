import React from 'react'

const CardLoading = () => {
  const isMobile = /Mobi|Android|Iphone|Ipad|IPod/i.test(navigator.userAgent);
  const scrollToForm = () => {
    const formElement = document.getElementById('sawifi-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  return (
    <div className='w-full relative mt-12 md:mt-0'>
      {
        !isMobile ? (<img src="../images/pdCards.webp" alt="card-preloader" />) : (<img src="../images/pdCardsmd.webp" alt="card-preloader" />)
      }


      <div className='absolute w-full px-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
        <p className='text-2xl text-center md:text-left'>Please fill out the form above to obtain your results.</p>
        <button onClick={scrollToForm} className='text-1xl bg-red-700 px-5 py-2 rounded-lg text-white mt-3'>Go to form</button>
      </div>

    </div>
  )
}

export default CardLoading