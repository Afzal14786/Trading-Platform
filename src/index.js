import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import ScrollToTop from './landing_page/ScrollToTop'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import OpenAccount from './landing_page/signup/OpenAccount'
import SignUp from './landing_page/signup/SignUp'
import About from './landing_page/about/AboutPage'
import Product from './landing_page/products/ProductPage'
import Pricing from './landing_page/pricing/PricingPage'
import Support from './landing_page/support/SupportPage'

import Home from './landing_page/home/HomePage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar/>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/open-account' element={<OpenAccount/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/support' element={<Support/>}/>
    </Routes>
    <Footer/>
  </Router>
);
