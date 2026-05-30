import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Stats from './Components/Stats/Stats';
import Footer from './Components/Footer/Footer';
import Pricing from './Components/Pricing/Pricing';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import CTA from './Components/CallToAction/CTA';

function App() {


  return (
  <>
    <Navbar />
    <Hero />
    <Stats/>
    <HowItWorks/>
    <Pricing/>
    <CTA/>
    <Footer/>
  </> 
  );
}

export default App
