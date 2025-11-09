import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { motion } from "motion/react"
import Navbar from './Components/Navbar'
import Donat from './Components/Donat'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import 'animate.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AutoPlay from './Components/AutoPlay'



function App() {

  return (

    <>


      <Navbar />
      <Donat />
      <AboutUs />
      <ContactUs />
      <AutoPlay />




          
      <div className='flex justify-around flex-wrap bg-cyan-950 pt-20 mt-10 text-white pb-15 font-sans font-bold  '>
        <div>
          <h1 className='text-2xl pb-2 text-amber-300 font-bold font-sans'>Shah Online Quran Academy</h1> 
          <p className=' text-base/7 '> Our Quran Academy experience <br /> has taught us that online <br /> courses simply require
           a <br /> different type of approach to <br /> online Quran learning education.</p>
        </div>

        <div className=' '>

        <h3 className=' text-amber-300 text-3xl pb-5'>Quick Links</h3>
          <ul className='font-bold text-base/10'>
        <li className='hover:text-amber-200'><a href="#paid">Courses</a></li>
         <li className='hover:text-amber-200'><a href="#aboutus">About Us</a></li>
          <li className='hover:text-amber-200'><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
       
        <div>
       <h3 className='text-3xl pb-5 text-amber-300 '>Useful Links</h3>
       <ul className='font-bold text-base/10'>

        <li className='hover:text-amber-200'><a href="#fess">Fess Section</a></li>
         <li className='hover:text-amber-200'><a href="#donat">Donate</a></li>
          <li className='hover:text-amber-200'><a href="#home">Home</a></li>
       </ul>
        </div>
        <div>

          <h3 className='text-3xl text-amber-300 pb-5 '>Contact Us</h3>

            <div className='font-bold text-base/10'>
          <p>phone:0318-3019766</p>
          <p>Whatsapp:0315-4548850</p>
          <p>Hyderabad,Pakistan</p>
           </div>
        </div>
      </div>
      <hr />
        <div className='bg-cyan-950 text-white font-bold text-center py-2 text-lg pb-4'>
          <h1 > Copyright 2025 © SHAH ONLINE QURAN ACADEMY</h1>
          <a id="whatsapp" href="https://wa.me/923001234567">Whatsapp</a>
        </div>
       
 

    </>
  )
}

export default App
