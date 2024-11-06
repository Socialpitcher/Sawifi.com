import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Error from './components/Error';
import Blogs from './components/Blogs';
import Blog1 from './components/blogs/Blog1';
import Blog2 from './components/blogs/Blog2';
import Blog3 from './components/blogs/Blog3';
import Blog4 from './components/blogs/Blog4';
import Blog5 from './components/blogs/Blog5';

const App = () => {


  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ContactUs" element={<Contact />} />
      <Route path="/ContactUs/ClientInfo" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/which-is-the-best-internet-provider-in-canada-2024" element={<Blog1 />} />
      <Route path="/blogs/discover-the-Best-internet-plans-canada-has-to-offer-in-2024" element={<Blog2 />} />
      <Route path="/blogs/top-mobile-phone-deals-in-canada-2024" element={<Blog3 />} />
      <Route path="/blogs/best-affordable-home-internet-for-students-in-canada-compare-and-save-with-SaWiFi" element={<Blog4 />} />
      <Route path="/blogs/the-complete-telus-vs-rogers-internet-comparison-which-provider-is-right-for-you?" element={<Blog5 />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </>
  );
}

export default App;
