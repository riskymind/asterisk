"use client"

import { FrontEndEducation } from '@/types'
import { cardHoverSmall, fadeIn, fadeInUp, staggerContainer } from '@/utils/animations'
import { motion } from 'framer-motion'
import React from 'react'

const Education = ({education}: {education: FrontEndEducation[]}) => {
  return (
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {education.map((edu, index)=> (
            <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
            key={index}
          >
            <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
            <p className="text-primary mb-2">{edu.school} • {edu.year.toString()}</p>
            {edu.knowledge.map((know, index)=> (
            <p className="text-secondary" key={index}>
                {know}
            </p>
            ))}
          </motion.div>
          ))}
        </motion.div>
      </motion.section>
  )
}

export default Education
