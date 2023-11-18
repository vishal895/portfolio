import React from 'react'
import Navbar from '../component/Navbar'
import IntroCard from '../component/IntroCard'
import AboutCard from '../component/AboutCard'
import ExperienceCard from '../component/ExperienceCard'
import ProjectCard from '../component/ProjectCard'
import Skill from '../component/Skill'
import Footer from '../component/Footer'


const MainPage = () => {
  return (
    <div className='bg-teal-900 h-full'>
      <Navbar/>
     <IntroCard/>
     <AboutCard/>
     <ExperienceCard/>
     <ProjectCard/>
     <Skill/>
     <Footer/>
        
    </div>
  )
}

export default MainPage