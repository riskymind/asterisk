"use client"
import { cardHoverSmall, fadeIn, fadeInUp, staggerContainer } from '@/utils/animations'
import { motion } from 'framer-motion'
import {FrontEndExperience} from "@/types"
import Image from 'next/image'
import { formatDate } from "@/lib/utils"

const Experience = ({exp}: {exp: FrontEndExperience[]}) => {
  return (
    <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title text-shadow-lg drop-shadow-lg"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
            {exp.map((ex, index)=> (
            <motion.div 
                className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md flex items-center gap-3"
                variants={fadeInUp}
                {...cardHoverSmall}
                key={index}
            >
                <Image src={ex.image} alt={ex.company} width={100} height={100} className='rounded-lg'/>
                <div>
                    <h3 className="text-xl font-semibold mb-2">{ex.role}</h3>
                    <p className="text-primary mb-2">{ex.company} • {formatDate(ex.startDate.toString())} - {ex.endDate ? formatDate(ex.endDate.toString()) : "Present"}</p>
                    <ul className="text-secondary list-disc list-inside space-y-2">
                        {ex.duties.map((duty, index) => (
                            <li key={index}>{duty}</li>
                        ))}
                    </ul>
                </div>
          </motion.div>
            ))}
          
        </motion.div>
      </motion.section>
  )
}

export default Experience
