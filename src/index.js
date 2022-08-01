import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/nav/index'
import Home from './components/home/index'
import Contact from './components/contact/index'
import About from './components/about/index'
import Work from './components/work/index'
import ScrollToTop from './helpers/ScrollToTop'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav/>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/work" element={<Work />}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

