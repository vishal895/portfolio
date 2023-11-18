import React from 'react'
import SkillCard from './Skillcards/SkillCard'
import htmlPic from "../assets/html.2ba4fabc69a89a8f71e6.png"
import cssPic from "../assets/css.69a82c2d9e45c933a9cb.png"
import javasciptPic from "../assets/javascript.1ccd6ef9bb1f9c84ef00.png"
import reactPic from "../assets/react.0cf951a69d8e58f83f9d.png"
import tailwindPic from "../assets/tailwind.e47ac876b8d4d0bba47a.png"
import reduxPic from  "../assets/images.png"
import githubPic from "../assets/github.3b9e32903aa89111875d.png"
import bootstrapPic from '../assets/5968672.png'
import materialPic from '../assets/material-ui-icon-512x406-fhnu85xg.png'

const Skill = () => {
  return (
    <div className="w-3/4 bg-teal-900  p-4 m-auto mt-10 shadow-2xl box-shadow" id='skill'>
      
        <div className="content">
          <h2 className="text-5xl text-white font-bold">Skill</h2>
          <div className='grid gap-4 gap-y-5  sm:grid-cols-3 grid-cols-1 justify-items-center mt-4'>
            <SkillCard SkillImage={htmlPic} heading={"HTML"} className="shadow-orange-500"/>
            <SkillCard SkillImage={cssPic} heading={"CSS"} className="shadow-blue-500"/>
            <SkillCard SkillImage={javasciptPic} heading={"JAVASCRIPT"} className="shadow-yellow-500"/>
            <SkillCard SkillImage={reactPic} heading={"REACT"} className="shadow-blue-600"/>
            <SkillCard SkillImage={tailwindPic} heading={"TAILWIND"} className="shadow-blue-500"/>
            <SkillCard SkillImage={bootstrapPic} heading={"BOOTSTRAP"} className="shadow-purple-400"/>
            <SkillCard SkillImage={reduxPic} heading={"REDUX"} className="shadow-purple-400"/>
            <SkillCard SkillImage={githubPic} heading={"GITHUB"} className="shadow-gray-400"/>
            <SkillCard SkillImage={materialPic} heading={"MATERIAL-UI"} className="shadow-blue-600"/>
          </div>
        </div>
      
    </div>
  )
}

export default Skill