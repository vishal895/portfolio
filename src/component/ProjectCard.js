import React from 'react'
import ProjectInsideCard from './ProjectInsideCard'
import googlepic from '../assets/Screenshot (258).png'
import weather from '../assets/Screenshot (256).png'
import moviepic from '../assets/Screenshot (257).png'
import netflix from '../assets/Screenshot (259).png'
import ardencie from '../assets/Screenshot (260).png'
import miniecommerce from "../assets/Screenshot (261).png"
import foodapp from "../assets/Screenshot (263).png"
import NetflixGPT from "../assets/Screenshot (264).png"



const ProjectCard = () => {
  return (
    <div className="w-3/4 bg-teal-900  p-4 py-3 m-auto mt-10 shadow-2xl box-shadow" id='project'>
      
        <div className="content">
          <h2 className="text-5xl  text-white font-bold">projects</h2>
          <p className="sm:text-2xl text-lg text-white font-normal mt-6 w-11/12">
           Check out some of my work right here
          </p>
          <div className='grid sm:grid-cols-3 grid-cols-1 gap-8  sm:px-2 text-white font-bold text-lg mt-10'>
            <ProjectInsideCard ImageProject={foodapp} ProjectHeading={"Food Delivery App"} demo={"https://food-delivery-app-weld.vercel.app/"}  gitcode={"https://github.com/vishal895/food-delivery-app"}/>
            <ProjectInsideCard ImageProject={moviepic} ProjectHeading={"Movei Trailer"} demo={"https://entertainmenthub.netlify.app/"}  gitcode={"https://github.com/vishal895/movie-trailer"}/>
            <ProjectInsideCard ImageProject={googlepic} ProjectHeading={"Google clone"} demo={"https://browser-clone.vercel.app/"}  gitcode={"https://github.com/vishal895/browser-clone"}/>
            <ProjectInsideCard ImageProject={weather} ProjectHeading={"Weather app"} demo={"https://weatherapp-zeta-one.vercel.app/"}  gitcode={"https://github.com/vishal895/weather-app-react"}/>
            <ProjectInsideCard ImageProject={miniecommerce} ProjectHeading={"Mini E-commerce"} demo={"https://shopping-app-six-flax.vercel.app/"}  gitcode={"https://github.com/vishal895/M.e-commerce"}/>
            <ProjectInsideCard ImageProject={NetflixGPT} ProjectHeading={"NETFLIX GPT"} demo={"https://netflix-gpt-nine-mauve.vercel.app/"}  gitcode={"https://github.com/vishal895/netflix-gpt"}/>
            {/* <ProjectInsideCard ImageProject={netflix} ProjectHeading={"Netflix clone"} demo={"https://vishal895.github.io/netflix-clone/"}  gitcode={"https://github.com/vishal895/netflix-clone/tree/main"}/>
            <ProjectInsideCard ImageProject={ardencie} ProjectHeading={"ARDENSI clone"} demo={"https://vishal895.github.io/ardensi-landingpage/"}  gitcode={"https://github.com/vishal895/ardensi-landingpage"}/> */}
            
            {/* {ProjectData.length && ProjectData.map((key,index)=>{
              return(
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={key.image} alt='' className='rounded-md duration-200 hover:scale-105'/>
                <h3 className='text-xs sm:text-lg mt-2 text-center font-bold'>{key.title}</h3>
                <div className='flex justify-center items-center'>
          
                  <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 text-xs sm:text-lg'>Demo</button>
                  <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 text-xs sm:text-lg'>Code</button>
                </div>
              </div>
              )
            })} */}
         
           
          </div>
        </div>
      
    </div>
  )
}

export default ProjectCard