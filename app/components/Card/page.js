"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { benefits } from '@/app/data/data'


const Card = () => {
  return (
    // <div className='w-[16rem] py-3 px-4 flex flex-col items-center gap-3'>
    //     <div>
    //       <img src='/card-img1.jpeg'/>
    //     </div>
    //     <div className="px-2 py-3 flex flex-col items-center gap-3">
    //       <h1 className='p-3 lobster-regular text-[1.2rem]'>Safety & Durability</h1>
    //       <p>Measuring 40x33cm, this FDA-approved PTFE-coated mat provides a non-stick surface that withstands temperatures up to 500°F, ensuring durability and safety for all your grilling needs.</p>
    //     </div>
    // </div>

    <>
     <h1 className='mt-5 text-center lobster-regular  text-4xl'>Benefits</h1>
    <section className='flex flex-wrap p-3 gap-2 items-center justify-around mt-7'>
      {benefits.map(({img,heading,desc,id})=>{
        return(
            <motion.div 
            key={id}
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className=" shadow-md rounded-lg overflow-hidden w-[20rem] py-4"style={{backgroundColor:"#f7d474"}}>
        <img
          className="w-full sm:h-64 object-contain py-4 my-5"
          src={img}
          alt='img'
          style={{marginTop:'1rem',marginBottom:"1rem"}}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800  lobster-two-bold">{heading}</h2>
          <p className="text-gray-600 mt-2 ">
          {desc}
          </p>
          <div className="mt-4">
           
           
        
          </div>
        </div>
      </motion.div>
        )
      })}
  </section>
    </>
  )
}

export default Card