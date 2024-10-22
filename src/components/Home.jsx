import React from 'react'
import HomeFrom from './home/HomeFrom'
import Review from './home/Review'
import Header from './home/Header'
import Blogs from './home/Blogs'
import Footer from './home/Footer'

const Hero = () => {
      document.title = 'Sawifi | Home'
  return (
    <div className='w-full relative'>
      <Header />
      <HomeFrom/>
      <Review />
      <Blogs />
      <Footer />
    </div>
  )
}

export default Hero