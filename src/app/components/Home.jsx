'use client'

import Lottie from 'lottie-react'
import React from 'react'
import qur from '../../../public/qurani.json'
import Card from './Card'

function Home({}) {
  return (
    <div className='container mx-auto p-2
    flex flex-col md:flex-row justify-center items-center md:items-start
    '>
        <div className='w-[94%] h-[200px]  md:w-[50%] flex justify-center  items-center
        bg-red-400 rounded-lg shadow-md shadow-gray-700 m-14 
        md:fixed md:right-0 md:h-[100%] md:top-0 fixed top-3'>
            <Lottie animationData={qur} className='w-[60%]  '/>
        </div>

            <div className=' h-[260px]  md:w-[60%]   '>
            </div>
            
            <div className='w-full  md:w-[45%] md:pt-28  pb-32 md:pb-40 pt-8 px-4
                   flex flex-wrap gap-[10px] justify-center items-center'>
            <Card/>
            </div>

        
    </div>
  )
}

export default Home