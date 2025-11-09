import { div } from 'motion/react-client'
import React from 'react'
import { useForm } from "react-hook-form"


  
const ContactUs = () =>{

  
  return(<>

  
  
<form method='post' id='form' className=' pb-10 pl-110 max-sm:pl-3 max-md:pl-45 max-lg:pl-30 max-xl-pl-30 mb-10 bg-amber-100 bg-[url()] bg-cover'>
    <section id='contact' className=''>
        <h1 className='ml-45 pt-15 text-5xl font-bold max-sm:ml-15 max-md:ml-18'>Contact Us</h1>
        <div className='pt-15 pl-26 max-sm:pl-10 max-md:pl-2'>
         <label className='font-bold' htmlFor="Name">User Name</label>
         <br />
        <input  type='text'name='name' placeholder='Full Name' className=' border-1 mb-4 h-10 w-100 max-sm:w-70 shadow-2xs  shadow-blue-700 rounded-lg'/>
        <br />
        <label className='font-bold' htmlFor="email">Your Email</label>
        <br />
        <input type="text" name="email" id="" placeholder='Email Address' className='border-1 mb-4 h-10 w-100 max-sm:w-70 shadow-2xs  shadow-blue-700 rounded-lg'/>
        <br />
        <label className='font-bold' htmlFor="phone">Your Whatsapp No</label>
        <br />
        <input type="text" name="phone" id="" placeholder='Phone/Whatsapp' className=' border-1 mb-4 h-10 w-100 max-sm:w-70 shadow-2xs  shadow-blue-700 rounded-lg'/>
        <br />
        <label className='font-bold' htmlFor="Name">Messege</label>
        <br />
        <textarea type='text' name="massege" id="" placeholder='Your Massege' className='border-1 mb-4 h-30 w-100 max-sm:w-70 shadow-2xs  shadow-blue-700 rounded-lg'></textarea>
        </div>
        <button type='btn' className='bg-blue-900 h-10 w-25 ml-60 max-sm:ml-30 mt-6 max-md:ml-35 text-white rounded-lg shadow-lg font-bold hover:bg-gray-950'>Submit</button>
      
      <div/>
    </section>
</form>




  </>
    
    
  )
}


export default ContactUs