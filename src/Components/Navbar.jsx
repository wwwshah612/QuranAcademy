import React from 'react'


const Navbar = () => {

    return (<>
  
        <nav className='bg-blue-700 text-white w-full z-10'>
            <div className='flex justify-between p-2 h-20 '>
            
                <img className='min-h-60 w-80 pb-35' src="logo2.png" alt="" />
                


                <ul className='flex gap-2 pt-5 pr-10 font-bold text-xl hidden lg:flex space-x-6 lg:gap-2 font-serif'>
                    <a href='#home'><li className='bg-blue-700 hover:bg-blue-500 h-8 w-20 pl-2.5 pt-0.5 cursor-pointer rounded-lg'>Home</li></a>
                    <div id="dropdown">

                    <button id="dropbtn">Courses</button>
                    <div id="dropdown-contant">
                        <a href="#paid">Qaida Course</a>
                         <a href="#paid">Nazra e Quran</a>
                          <a href="#paid">Hifz e Quran</a>
                           <a href="#paid">Tajweed Course</a>
                            <a href="#piad">Qirat course</a>
                             <a href="#paid">Tafseer e Quran</a>
                              <a href="#paid">Namaz Course</a>
                               <a href="#paid">Istekhara Course</a>
                    </div>
                    </div>
                   <a href='#fess'> <li className='bg-blue-700 hover:bg-blue-500 h-8 w-37 pl-2.5 p t-0.5 cursor-pointer rounded-lg'>Fees Section</li></a> 
                    <a href='#donat'> <li className='bg-blue-700 hover:bg-blue-500 h-8 w-24 pl-2.5 pt-0.5 cursor-pointer rounded-lg'>Donate</li></a>
                    <a href='#aboutus'><li className='bg-blue-700 hover:bg-blue-500 h-8 w-28 pl-2.5 pt-0.5 cursor-pointer rounded-lg'>About Us</li></a>
                   <a href='#contact'> <li className='bg-blue-700 hover:bg-blue-500 h-8 w-32 pl-2.5 pt-0.5 cursor-pointer rounded-lg'>Contact Us</li></a>
                  
                </ul>
                

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15 pt-4 lg:hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>

            </div> 
        </nav>



        <section id='home' className='flex justify-between flex-wrap flex-row-reverse bg-sky-100 pb-10'>
            <div className=''>
                <img className='h-130 mb-4 mr-15 pl-20 mt-35 max-sm:h-90 max-sm:pr-5 max-sm:pl-5 max-md:pl-15 ' src="https://alnooronlinequranacademy.net/wp-content/uploads/2025/02/Asset-2.png" alt="" /></div>

           <div className='mt-8 pl-15 max-sm:pl-15 max-md:pl-15 max-lg:pl-10 '>
            <h1 className=' mt-40 mb-10 mr-15 font-bold text-6xl max-lg:text-5xl max-lg:mt-22 max-sm:mt-5 max-sm:text-5xl'>Unlock the Beauty of <br /> the Quran from Home</h1>
            <p className='pt-10 text- mr-10 text-lg max-sm:pt-6 '>Join Our Global Quran Academy: Flexible, Affordable, and Tailored for All <br /> Ages. Start Your Free Trial Today!</p>
            <div className='mt-5 text-xl '>
                <p className=''>✔  Skilled & Qualified Teachers</p>
                <p>✔  1-on-1 & Group Classes</p>
                <p>✔  3-Days Free Trial Class</p>
            </div>
            <div className='flex flex-wrap mt-7 gap-6 lg:mt-10 md:flex-nowrap'>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSck6oOujG0IK-9QDv9WlGhLoY3ilE9rMcXwOmXElKirQqkf_w/viewform?usp=header'> <button className='bg-orange-600 hover:bg-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black  h-9 w-65 rounded-md text-amber-50 font-bold max-md:w-70 max-sm:mr-8 max-sm:w-75 max-lg:w-40 animate__animated animate__bounceInRight animat__slow'>Admission Form</button></a>
                <button className='bg-blue-700 hover:bg-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black  h-9 w-65 rounded-md text-amber-50 font-bold max-md:w-70 max-sm:w-75 max-lg:w-40 animate__animated animate__bounceInLeft animat__slow'>Fess & Packiges</button>
            </div>
        </div>
           </section>


        <h1 className='text-6xl ml-40 mt-20 text-fuchsia-950 font-bold text-wrap max-sm:text-5xl max-sm:ml-12 max-md:ml-15 max-lg:ml-35 animate__animated animate__fadeInUp  '>WelCome To Shah Online Quran Academy</h1>
        <div className='flex justify-center sm:flex flex-wrap pb-10'>
            <div className='animate__animated animate__backInLeft animat__slow'>

                <h1 className='ml-12 font-bold pt-20 text-3xl text-blue-950 text-wrap max-sm:pt-10 max-sm:text-3xl max-sm:ml-4'>Why Choose Our Online Quran Academy?</h1>
                <p className='font-bold text-3xl ml-15 pr-8 pt-15 max-sm:text-leading-8 max-sm:pr-10 max-sm:ml-6 max-sm:pl-4 text-wrap '>
                    We take responsibility for good results. <br />
                    We take you step by step with your children at <br />
                    the highest level to learn to read the Quran <br />
                    online with tajweed. The comfort of home and <br />
                    your selected timings, supervision of parents <br />
                    and guidance of expert Quran Teachers makes online <br />
                    Quran learning a lot. Therefore you can rely on us.</p>
            </div>

            <div className='animate__animated animate__bounceInRight animt__slow py-5'>
                <h1 className='pr-3 font-bold text-wrap pt-15 text-3xl max-sm:text-3xl text-blue-950 max-sm:ml-30 max-sm:pr-20 max-lg:text-4xl'>Watch how our online Quran classes work!</h1>
                <iframe className='pt-13' width="550" height="350"  src="https://www.youtube.com/embed/rtsbFWixX70?si=Gi2NHkrx8dKgJZb7 " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div>
            </div>
        </div>
        <section id='paid' className=' bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqzV4h5EW2y95Mz689uS2-hsPGvq8nhGaRWQ&s)] bg-cover'>
            <div >
                <h2 className=' ml-140 mt-25 font-bold text-6xl max-sm:text-5xl pt-10 pb-8 text-white max-sm:ml-10 max-md:ml-40  max-xl:ml-100 max-lg:ml-60'>Free Coursse</h2>
                <div className='flex ml-40 mt-8 gap-15 pb-20 flex-wrap max-sm:ml-6  '>
                    <div className='h-90 w-80 shadow-md shadow-neutral-900 rounded-lg bg-amber-100 outline-2 outline-offset-2 outline-solid hover:outline-red-800 md:w-60 animate__animated animate__zoomInLeft animate__slow'>
                        <img className='h-50 w-78 ml-1 mt-1 rounded-shadow-xl/30 md:w-58 shadow-neutral-900' src="basic-quran.jpg" alt="" />
                        <h4 className='pt-2 pl-25 font-bold text-orange-600 text-xl hover:text-indigo-700 cursor-pointer md:pl-15'>Qaida Course</h4>
                        <p className='pl-20 pt-1 font-bold md:pl-10'>"Will basic Qaida be <br /> taught in this course?"</p>
                        <button className='mt-3 ml-25 bg-purple-900 hover:bg-purple-500 h-8 w-30 text-white font-bold cursor-pointer rounded-lg md:ml-15 md:mt-8'>Course Details</button>
                    </div>
                    <div className='h-90 w-80 shadow-md shadow-neutral-900 rounded-lg bg-amber-100 outline-2 outline-offset-2 outline-solid hover:outline-red-800 md:w-60 animate__animated animate__zoomInLeft animate__slow'>
                        <img className='h-50 w-78 ml-1 mt-1 rounded-sm md:w-58 shadow-xl/30 shadow-neutral-900' src="quran.jfif" alt="" />
                        <h4 className='pt-2 pl-25 font-bold text-orange-600 text-xl hover:text-indigo-700 cursor-pointer md:pl-15 '>Nazra Quran </h4>
                        <p className='pl-11 pt-1 font-bold dm:pl-10'>"Will the last Sipara be taught in this course?"</p>
                        <button className='mt-4 ml-25 bg-purple-900 hover:bg-purple-500 h-8 w-30 text-white font-bold cursor-pointer rounded-lg md:ml-15 md:mt-8'>Course Details</button>
                    </div>
                    <div className='h-90 w-80 shadow-md shadow-neutral-900 rounded-lg bg-amber-100 outline-2 outline-offset-2 outline-solid hover:outline-red-800 md:w-60 animate__animated  animate__zoomInLeft  animate__slow'>
                        <img className='h-50 w-78 ml-1 mt-1 rounded-sm md:w-58 shadow-xl/30 shadow-neutral-900' src="tafseer.jpg" alt="" />
                        <h4 className='pt-2 pl-23 font-bold text-orange-600 text-xl hover:text-indigo-700 cursor-pointer md:pl-15'>Tafseer e Quran</h4>
                        <p className='pl-10 pt-1 font-bold sm:pl-7'>"Will the complete Tafseer of the Quran be taught in this course?"</p>
                        <button className='mt-3 ml-25 bg-purple-900 hover:bg-purple-500 h-8 w-30 text-white font-bold cursor-pointer rounded-lg md:ml-15 md:mt-2'>Course Details</button>
                    </div>
                    <div className='h-90 w-80 shadow-md shadow-neutral-900 rounded-lg bg-amber-100 outline-2 outline-offset-2 outline-solid hover:outline-red-800 md:w-60 animate__animated animate__zoomInRight animate__slow'>
                        <img className='h-50 w-58 ml-1 mt-1 rounded-sm max-sm:w-78 max-md:w-58 shadow-xl/30 shadow-neutral-900' src="data:image/jpeg;base64,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" alt="" />
                        <h4 className='pt-2 pl-25 font-bold text-orange-600 text-xl hover:text-indigo-700 cursor-pointer md:pl-15'>Namaz Course</h4>
                        <p className='pl-6 pt-1 font-bold md:pl-4'>"Will the complete method of prayer (Namaz) be taught in this course?"</p>
                        <button className='mt-4 ml-25 bg-purple-900 hover:bg-purple-500 h-8 w-30 text-white font-bold cursor-pointer rounded-lg md:ml-15 md:mt-2'>Course Details</button>
                    </div>

                </div>
            </div>
        </section>

        <div className=''>
            <div className='' >
                <h2 className='ml-140 font-bold text-6xl max-sm:text-5xl pt-10 pb-8  max-sm:ml-10 max-lg:ml-60 max-md:ml-40  max-xl:ml-100 '>Paid Courses</h2>
                <div className='flex ml-40 mt-8 gap-15 pb-20 flex-wrap max-sm:ml-6'>
                    <div className='h-90 w-80 shadow-xl/30 shadow-neutral-900 rounded-lg bg-amber-100 outline-2 outline-offset-2 outline-solid hover:outline-blue-800 md:w-60'>
                        <img className='h-50 w-78 ml-1 mt-1 rounded-sm shadow-md shadow-neutral-900 md:w-58' src="basic-quran.jpg" alt="" />
                        <h4 className='pt-2 pl-25 font-bold text-orange-600 text-xl hover:text-indigo-700 cursor-pointer sm:pl-15'>Qaida Course</h4>
                        <p className='pl-20 pt-1 font-bold md:pl-10'>"Will basic Qaida be <br /> taught in this course?"</p>
                        <button className='mt-4 ml-25 bg-purple-900 hover:bg-purple-500 h-8 w-30 text-white font-bold cursor-pointer rounded-lg md:ml-15 md:mt-8'>Course Details</button>
                    </div>
                    <div className='h-90 w-80 shadow-xl/30 shadow-neutral-900 rounded-lg bg-amber-100 outline-2 outline-offset-2 outline-solid hover:outline-blue-800 md:w-60'>
                        <img className='h-50 w-78 ml-1 mt-1 rounded-sm shadow-md shadow-neutral-900 md:w-58' src="quran.jfif"></img>
                        <h4 className='pt-2 pl-25 font-bold text-orange-600 text-xl hover:text-indigo-700 cursor-pointer sm:pl-15'>Nazra Quran </h4>
                        <p className='pl-10 pt-1 font-bold md:pl-4'>"Will the complete Quran with Tajweed be taught in this course?"</p>
                        <button className='mt-4 ml-25 bg-purple-900 hover:bg-purple-500 h-8 w-30 text-white font-bold cursor-pointer rounded-lg md:ml-15 md:mt-2'>Course Details</button>
                    </div>
                    <div className='h-90 w-80 shadow-xl/30 shadow-neutral-900 rounded-lg bg-amber-100 outline-2 outline-offset-2 outline-solid hover:outline-blue-800 md:w-60'>
                        <img className='h-50 w-78 ml-1 mt-1 rounded-sm shadow-md shadow-neutral-900 md:w-58' src="tafseer.jpg" alt="" />
                        <h4 className='pt-2 pl-25 font-bold text-orange-600 text-xl hover:text-indigo-700 cursor-pointer sm:pl-15'>Tafseer e Quran</h4>
                        <p className='pl-10 pt-1 font-bold md:pl-4'>"Will the complete Tafseer of the Quran be taught in this course?"</p>
                        <button className='mt-4 ml-25 bg-purple-900 hover:bg-purple-500 h-8 w-30 text-white font-bold cursor-pointer rounded-lg md:ml-15 md:mt-2'>Course Details</button>
                    </div>
                    <div className='h-90 w-80 shadow-xl/30 shadow-neutral-900 rounded-lg bg-amber-100 outline-2 outline-offset-2 outline-solid hover:outline-blue-800 md:w-60'>
                        <img className='h-50 w-58 ml-1 mt-1 rounded-sm max-sm:w-78 shadow-md shadow-neutral-900 max-md:w-58' src="data:image/jpeg;base64,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"></img>
                        <h4 className='pt-2 pl-25 font-bold text-orange-600 text-xl hover:text-indigo-700 cursor-pointer md:pl-15'>Namaz Course</h4>
                        <p className='pl-7 pt-1 font-bold md:pl-4'>"Will the complete method of prayer (Namaz) be taught in this course?"</p>
                        <button className='mt-4 ml-25 bg-purple-900 hover:bg-purple-500 h-8 w-30 text-white font-bold cursor-pointer rounded-lg md:ml-15 md:mt-2'>Course Details</button>
                    </div>
                    <div className='h-90 w-80 shadow-xl/30 shadow-neutral-900 rounded-lg bg-amber-100 outline-2 outline-offset-2 outline-solid hover:outline-blue-800 md:w-60'>
                        <img className='h-50 w-78 ml-1 mt-1 rounded-sm shadow-md shadow-neutral-900 md:w-58' src="quran-image.jfif" alt="" />
                        <h4 className='pt-2 pl-25 font-bold text-orange-600 text-xl hover:text-indigo-700 cursor-pointer md:pl-15'>Tajweed Course</h4>
                        <p className='pl-8 pt-1 font-bold md:pl-4'>"Will the complete Tajweed rules be taught in this course?"</p>
                        <button className='mt-4 ml-25 bg-purple-900 hover:bg-purple-500 h-8 w-30 text-white font-bold cursor-pointer rounded-lg md:ml-15 md:mt-2'>Course Details</button>
                    </div>
                    <div className='h-90 w-80 shadow-xl/30 shadow-neutral-900 rounded-lg bg-amber-100 outline-2 outline-offset-2 outline-solid hover:outline-blue-800 md:w-60'>
                        <img className='h-50 w-78 ml-1 mt-1 rounded- shadow-md shadow-neutral-900 md:w-58' src="new-quran.jpg" alt="" />
                        <h4 className='pt-2 pl-20 font-bold text-orange-600 text-xl hover:text-indigo-700 cursor-pointer md:pl-10'>Farz Uloom Course</h4>
                        <p className='pl-3 pt-1 font-bold'>"Will Fard Uloom (obligatory religious knowledge) be taught in this course?"</p>
                        <button className='mt-4 ml-25 bg-purple-900 hover:bg-purple-500 h-8 w-30 text-white font-bold cursor-pointer rounded-lg md:ml-15 md:mt-2'>Course Details</button>
                    </div>
                    <div className='h-90 w-80 shadow-xl/30 shadow-neutral-900 rounded-lg bg-amber-100 outline-2 outline-offset-2 outline-solid hover:outline-blue-800 md:w-60'>
                        <img className='h-50 w-78 ml-1 mt-1 rounded-sm shadow-md shadow-neutral-900 md:w-58' src="new2-quran.jpg" alt="" />
                        <h4 className='pt-2 pl-23 font-bold text-orange-600 text-xl hover:text-indigo-700 cursor-pointer md:pl-15'>istekhara Course</h4>
                        <p className='pl-12 pt-1 font-bold md:pl-4 '>"Will the method of Istikhara be taught in this course?"</p>
                        <button className='mt-4 ml-25 bg-purple-900 hover:bg-purple-500 h-8 w-30 text-white font-bold cursor-pointer rounded-lg md:ml-15 md:mt-8'>Course Details</button>
                    </div>
                    <div className='h-90 w-80 shadow-xl/30 shadow-neutral-900 rounded-lg bg-amber-100 outline-2 outline-offset-2 outline-solid hover:outline-blue-800 md:w-60'>
                        <img className='h-50 w-78 ml-1 mt-1 rounded-sm shadow-md shadow-neutral-900 md:w-58' src="namaz.jfif" alt="" />
                        <h4 className='pt-2 pl-23 font-bold text-orange-600 text-xl hover:text-indigo-700 cursor-pointer md:pl-15'>Other Coursses</h4>
                        <p className='pl-4 pt-1 font-bold'>"Apart from these courses, many other courses are also conducted."</p>
                        <button className='mt-4 ml-25 bg-purple-900 hover:bg-purple-500 h-8 w-30 text-white font-bold cursor-pointer rounded-lg md:ml-15 md:mt-2'>Course Details</button>
                    </div>

                </div>
            </div>
        </div>

        <h2 className=' text-purple-950 ml-140 max-sm:ml-11 font-bold text-6xl max-sm:text-5xl pt-10 pb-8 max-md:ml-60 max-lg:ml-60 max-xl:ml-100 '>Fess Section</h2>
        <section id='fess' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 pb-20 pt-20 max-sm:pl-5 bg-[url(https://ejazulquran.com/wp-content/uploads/2022/12/5517053-scaled.jpg)] bg-cover'>
            <div className=' mt-4 ml-7 max-sm:mr-10 bg-blue-300 rounded-lg shodow-lg max-sm:text-center max-sm:pr-20 max-lg:text-center '>
                <h4 className='pl-20 pt-8 font-bold text-xl'>6 Days/Week</h4>
                <h3 className='pl-18 pt-6 font-bold text-4xl'>RS:3000</h3>
                <p className='pl-30'>Per Month</p>
                <p className='pl-15 pt-10 font-bold'>✔  24 Classes</p>
                <p className='pl-15 pt-5 font-bold'>✔  30 minutes per class</p>
                <p className='pl-15 pt-5 font-bold'>✔  Concession Available</p>
                <p className='pl-15 pt-5 font-bold'>✔  Premium 1-on-1 class</p>
                <button className='ml-20 mt-7 mb-7 bg-blue-700 hover:bg-blue-950 h-10 w-30 font-bold rounded-lg text-white cursor-pointer'>Start Trail</button>

            </div>
            <div className=' mt-4 ml-7 max-sm:mr-10 max-md:mr-4 max-lg:mr-4  bg-blue-300 rounded-lg shodow-lg max-sm:text-center max-sm:pr-20 max-lg:text-center '>
                <h4 className='pl-20 pt-8 font-bold text-xl'>6 Days/Week</h4>
                <h3 className='pl-18 pt-6 font-bold text-4xl'>RS:5000</h3>
                <p className='pl-30'>Per Month</p>
                <p className='pl-15 pt-10 font-bold'>✔  24 Classes</p>
                <p className='pl-15 pt-5 font-bold'>✔  30 minutes per class</p>
                <p className='pl-15 pt-5 font-bold'>✔  Concession Available</p>
                <p className='pl-15 pt-5 font-bold'>✔  Premium 1-on-1 class</p>
                <button className='ml-20 mt-7 mb-7 bg-blue-700 hover:bg-blue-950 h-10 w-30 font-bold rounded-lg text-white cursor-pointer'>Start Trail</button>

            </div>
            <div className=' mt-4 ml-7 max-sm:mr-10 bg-blue-300 rounded-lg shodow-lg max-sm:text-center max-sm:pr-20 max-lg:text-center '>
                <h4 className='pl-20 pt-8 font-bold text-xl'>6 Days/Week</h4>
                <h3 className='pl-18 pt-6 font-bold text-4xl'>RS:6000</h3>
                <p className='pl-30'>Per Month</p>
                <p className='pl-15 pt-10 font-bold'>✔  24 Classes</p>
                <p className='pl-15 pt-5 font-bold'>✔  30 minutes per class</p>
                <p className='pl-15 pt-5 font-bold'>✔  Concession Available</p>
                <p className='pl-15 pt-5 font-bold'>✔  Premium 1-on-1 class</p>
                <button className='ml-20 mt-7 mb-7 bg-blue-700 hover:bg-blue-950 h-10 w-30 font-bold rounded-lg text-white cursor-pointer'>Start Trail</button>

            </div>
            <div className=' mt-4 ml-7 mr-4 max-sm:mr-10  bg-blue-300 rounded-lg shodow-lg max-sm:text-center max-sm:pr-20 max-lg:text-center'>
                <h4 className='pl-20 pt-8 font-bold text-xl'>6 Days/Week</h4>
                <h3 className='pl-18 pt-6 font-bold text-4xl'>RS:6000</h3>
                <p className='pl-30'>Per Month</p>
                <p className='pl-15 pt-10 font-bold'>✔  24 Classes</p>
                <p className='pl-15 pt-5 font-bold'>✔  30 minutes per class</p>
                <p className='pl-15 pt-5 font-bold'>✔  Concession Available</p>
                <p className='pl-15 pt-5 font-bold'>✔  Premium 1-on-1 class</p>
                <button className='ml-20 mt-7 mb-7 bg-blue-700 hover:bg-blue-950 h-10 w-30 font-bold rounded-lg text-white cursor-pointer'>Start Trail</button>

            </div>
        </section>


        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 gap-10 pr-10 max-sm:gap-10 max-md:gap-10 mb-15 max-lg:gap-10 max-sm:ml-10'>
            <div className=' bg-green-300 ml-15 rounded-lg shadow-xl/30 hover:outline-2 outline-offset-2 outline-solid max-sm:ml-1'>
                <div className='flex pt-6'>

                    <img className='h-15 w-15 pl-2' src="https://ejazulquran.com/wp-content/uploads/2022/12/24-hours-100x100.png" alt="" />
                    <h2 className='pl-5 font-bold text-3xl'>Classes Around The Clock</h2>
                </div>
                <p className='pl-16 pt-4 text-xl font-bold'>Take classes at any time that suit you</p>

            </div>

            <div className=' bg-green-300 ml-15 rounded-lg shadow-xl/30 hover:outline-2 outline-offset-2 outline-solid max-sm:ml-1'>
                <div className='flex pt-5'>

                    <img className='h-15 w-15 pl-2' src="https://ejazulquran.com/wp-content/uploads/2022/12/free-100x100.png" alt="" />
                    <h2 className=' pl-5 font-bold text-4xl'> Free Trial Class</h2>
                </div>
                <p className='pl-14 pt-4 text-xl font-bold'>Get free trial class for any course</p>

            </div>
            <div className=' bg-green-300 ml-15 rounded-lg shadow-xl/30 hover:outline-2 outline-offset-2 outline-solid max-sm:ml-1'>

                <div className='flex pt-6'>
                    <img className='h-15 w-15 pl-2' src="https://ejazulquran.com/wp-content/uploads/2022/12/certificate-100x100.png" alt="" />
                    <h2 className='pl-5 font-bold text-4xl max-xl:text-2xl'>Completion Certificates</h2>
                </div>
                <p className='pl-14 pt-4 text-xl font-bold'>Get a certificate after completing the course</p>

            </div>
        </div>




    </>

    )
}

export default Navbar