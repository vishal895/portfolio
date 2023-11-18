import React from 'react'
import github from '../assets/github.3b9e32903aa89111875d.png'
import linkdin from '../assets/linkedin-icon-2048x2048-ya5g47j2.png'
import mail from '../assets/6806987.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-10  bg-black py-5 text-white'>
        <ul className='flex justify-center gap-5'>
           <Link to="https://www.linkedin.com/in/vishalsrivas/"><li>
                <img src={linkdin} alt='' className='w-8'/>
            </li></Link> 
            <Link to="https://github.com/vishal895"><li><img src={github} alt='' className='w-8'/></li></Link>
            <Link to=""><li><img src={mail} alt='' className='w-8'/></li></Link>
        </ul>
    </div>
  )
}

export default Footer