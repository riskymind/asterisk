"use client"

import { FrontEndEducation } from '@/types'
import { cardHoverSmall, fadeIn, fadeInUp, staggerContainer } from '@/utils/animations'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { formatDate } from '@/lib/utils'

const Education = ({education}: {education: FrontEndEducation[]}) => {
  return (
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title text-shadow-lg drop-shadow-lg"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {education.map((edu, index)=> (
            <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md md:flex items-center md:justify-start gap-4"
            variants={fadeInUp}
            {...cardHoverSmall}
            key={index}
          >
            
            <Image src={edu.image} alt={edu.school} width={80} height={80} className='rounded-lg'/>
            <div className=''>
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-primary mb-2">{edu.school} • {formatDate(edu.year.toString())}</p>
                {edu.knowledge.map((know, index)=> (
                <p className="text-secondary" key={index}>
                    {know}
                </p>))}
            </div>
          </motion.div>
          ))}
        </motion.div>
      </motion.section>
  )
}

export default Education
