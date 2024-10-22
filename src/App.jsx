import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import Error from './components/Error';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ContactUs" element={<Contact />} />
      <Route path="/ContactUs/ClientInfo" element={<Contact />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default App;
