import React from 'react'
import image from "../assets/WhatsApp Image 2023-11-07 at 00.10.15 (1).jpeg"

const IntroCard = () => {
  return (
    <div className='w-3/4 bg-teal-900  p-4 m-auto mt-10 shadow-2xl box-shadow'>
        <div className='flex justify-between  items-center flex-col sm:flex-row'>
            <div className='content'>
                <h2 className='sm:text-5xl text-3xl text-white font-bold'>Hi, I am Vishal</h2>
                <h4 className='sm:text-3xl text-2xl text-white font-medium mt-7'>I am a frontend web developer</h4>
                <p className='sm:text-2xl text-lg text-white font-normal mt-6 w-11/12'>I have 1+ year experience as a ReactJS developer. I design website, write functional code, integrate api's and much more. I love to keep on exploring latest technologies which aim to create seamless User Experience.</p>
            </div>
            <div className='image rounded-lg'>
                <img src={image} alt='' className='h-full w-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default IntroCard