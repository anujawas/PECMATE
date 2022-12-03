import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Pecmarket from './pages/pecmarket';
import Itemlist from './pages/pankaj_Item_list';
// import rohititem from './rohit_item_list';
import Home from './pages/index';
import Assignment from './pages/assignment';
import Service from './pages/service.js';
import Contact from './pages/contact.js';
import About from './pages/about';
import Signinmain from './pages/signinmain';
import Signinfreelancer from './pages/signinfreelancer';
import Checkout from './pages/checkout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/pec_market" element={<Pecmarket/>} />
        <Route exact path="/pankaj_Item_list/:shopName" element={<Itemlist/>} />
        {/* <Route exact path="/rohit_item_list/:shopname" component={rohititem}/> */}
        <Route exact path="/assignment" element={<Assignment/>}/>
        <Route exact path="/service" element={<Service/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route path="/signup/Signinmain" element={<Signinmain/>}/>
        <Route path="/signup/signinfreelancer" element={<Signinfreelancer/>}/>
        <Route exact path="/checkout" element={<Checkout/>}/>
        
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
