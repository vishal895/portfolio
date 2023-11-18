import React from 'react'

const SkillCard = ({SkillImage,heading,className}) => {
  return (
   <div className={`bg-teal-900 text-white shadow-md hover:scale-105 duration-500 py-5 rounded-lg  text-center w-full ${className}`}>
    <div className='image'>
        <img src={SkillImage} alt="" className='h-full w-1/5 object-cover m-auto'/>
    </div>
    <h3 className='text-xs sm:text-lg'>{heading}</h3>
   </div>
  )
}

export default SkillCard