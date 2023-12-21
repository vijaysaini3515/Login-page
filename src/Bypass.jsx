import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Routing/layout/Navbar';
import Home from './components/Routing/pages/Home';
import About from './components/Routing/pages/About';
import Contact from './components/Routing/pages/Contact';

const Bypass = () => {
  return (
    <div className='container'>
    {/* <BrowserRouter> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    {/* </BrowserRouter> */}
    </div>
  )
}

export default Bypass;
