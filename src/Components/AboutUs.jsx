import React from 'react'

const AboutUs = () => {
  return (<>
  
  <section id='aboutus' className=' bg-[url(data:image/jpeg;base64,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)] bg-cover'>
    <h2 className=' ml-140 max-sm:ml-13 max-md:ml-50 max-lg:ml-45 text-7xl max-sm:text-6xl max-md:text-6xl pt-20 max-md:pt-10 font-bold text-white'>About Us</h2>
      

    <div className='grid grid-cols-2 max-sm:grid-cols-1 pt-25 max-sm:pt-10 pb-15 max-sm:pb-30 pl-15 max-sm:pl-2 max-md:pt-10 '>
<img className='h-85 w-140 ml-20 max-sm:h-70 max-sm:w-80 max-sm:ml-5 max-md:h-70 max-md:ml-5 rounded-lg outline-1 outline-black shadow-lg max-md:mb-10 max-lg:ml-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rb3kSwAQ8kOrZoAHe8cKehACyjO5ZqssXw&s" alt="" />
      <p className=' font-bold ml-30 max-sm:ml-8 max-sm:text-xl md:text-xl max-lg:text-2xl max-xl:text-xl pt-5 text-white max-sm:mb-4 max-sm:pr-5 max-md:mb-10 max-md:pl-5 max-lg:mb-10 max-lg:pl-10 text-wrap '>“The best among you is he who learns the Quran and <br /> teaches it (Bukhari) We aim to  provide quality Quranic <br /> and Islamic education online. 
         The main focus is on <br />reciting the Holy Quran with the rules of Tajweed. <br /> Tajweed is necessary for reverence and
          submission <br /> in Salah (Namaz). Moreover, Tajweed is one of the <br /> etiquettes to read the holy Quran.
           Online Quran academy <br /> considers that the basic knowledge of Islam should reach <br /> every Muslim.
            The “online” aspect of the academy is an <br /> extension of that goa
            “The best among you is he who <br /> learns the Quran and teaches it” (Bukhari) We aim 
      </p>
      <div>

      </div>
    </div>
  </section>
 
  
  
  
  
  
  
  
   
  
  </>

  )
}

export default AboutUs