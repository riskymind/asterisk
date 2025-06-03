"use client"

import {  FrontEndSkill } from '@/types'
import { cardHover, fadeIn, fadeInUp, staggerContainer } from '@/utils/animations'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa'

type Skill = {
  title: string;
  level: number;
  image: string;
  category: string;
};

const Skills = ({frontEnd, backEnd}: {frontEnd: FrontEndSkill[], backEnd: FrontEndSkill[]}) => {
  return (
    <motion.section 
            className="mb-16"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <motion.h2 
              className="section-title"
              {...fadeInUp}
            >
              Skills
            </motion.h2>
            <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
                {frontEnd.map((skill:Skill, index:number)=> (
                <li key={index}>
                    <div className='flex justify-start gap-2 items-center'>
                        <Image src={skill.image} alt={skill.title} width={30} height={30} className='object-cover'/>
                        {skill.title}
                    </div>
                </li>      
                ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
                 {backEnd.map((skill:Skill, index:number)=> (
                <li key={index}>{skill.title}</li>      
                ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>CI/CD</li>
            </ul>
          </motion.div>
            </motion.div>
    </motion.section>
    
  )
}

export default Skills
