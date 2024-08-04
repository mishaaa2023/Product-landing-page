"client side"
import React from 'react'
import Navbar from "./components/Navbar/page";
import Card from "./components/Card/page";
import Contact from "./components/Contact/page";
import Image from 'next/image'
import { createContext } from 'react';
import { motion } from 'framer-motion'
import Footer from './components/Footer/page';

const page = () => {
  return (
    <>
      <Navbar />
      <section class="text-white body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="lobster-regular title-font sm:text-4xl text-4xl mb-4 font-medium text-black lobster-two-bold">Welcome to BBQMatPro

            </h1>
            <p class="mb-8 leading-relaxed text-black">The solution to all your grilling problems! The mat can be easily trimmed to fit your specific grill or oven, making it a versatile tool for any cooking enthusiast. Embrace healthier, cleaner, and more efficient grilling with the Non-Stick BBQ Grill Mat.</p>
            <div class="flex justify-center">

              <button class="inline-flex items-center text-black text-white border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black hover:border-4 hover:border-black rounded text-base mt-4 md:mt-0">Add to Cart
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            class="lg:max-w-lg lg:w-1/2 md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded h-full w-full" alt="hero" src="/mane-img.jpeg" />
          </motion.div>
        </div>
      </section>

      <motion.div className='flex flex-wrap items-center gap-8 justify-center py-7 my-3 px-5 ' id='about'>
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <img src="/img2.jpeg" alt="" className='shadow-md h-[20rem] lg:h-[29rem] lg:w-[29rem] w-[16rem] mt-6 object-cover  object-top' />
        </motion.div>
        <motion.div
          className='w-[29rem] h-[12rem] flex flex-col gap-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <h1 className='text-underline lobster-regular  text-[2rem] font-bold text-black'>Elevate your grilling experience with the Non-Stick BBQ Grill Mat, a versatile and essential addition to your cooking arsenal.</h1>
          {/* <p className='poppins-regular  font-bold text-black'>Elevate your grilling experience with the Non-Stick BBQ Grill Mat, a versatile and essential addition to your cooking arsenal.
          </p>
          */}
        </motion.div>

      </motion.div>

      {/* //benefits */}
      <Card />

      {/* contact */}
      <Contact />

      {/* footer */}
      <Footer />
    </>
  )
}

export default page