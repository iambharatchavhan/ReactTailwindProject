import React from 'react'
import Hero from '../components/Hero'
import Story from '../components/Story'
import Members from '../components/Membars'
import Bottom from '../components/Bottom'

const LandingPage = () => {
  return (
    <main className='flex flex-col items-center justify-center'>
        <div className='border-t-[1px] border-white w-screen flex-col justify-center items-center'>
        <Hero/>
        </div>
        <div className='border-t-[1px] border-white w-screen flex flex-col justify-center items-center'>
        <Story/>
        </div>
        <div className='bg-[#fefefe] w-screen flex justify-center items-center'>
        <Members/> 
        </div>
        <div className='bg-[#BCDEFF] w-screen flex justify-center items-center'>
        <Bottom/> 
        </div>
    </main>
  )
}

export default LandingPage