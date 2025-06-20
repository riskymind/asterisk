"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { scaleIn, fadeInUp, fadeIn } from "@/utils/animations"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {  FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'


const Hero = () => {
  return (
    <section className='py-22'>
        <div className='container max-w-7xl mx-auto px-4'>
            <div className='max-w-3xl mx-auto text-center'>
                <motion.div
                className='flex justify-center items-center'
                {...scaleIn}
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.9}}
                >
                    <Image 
                    src="/profile_img.jpg"
                    alt="profile"
                    width={100}
                    height={100}
                    className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary'/>
                </motion.div>

                <motion.h1
                className='text-3xl md:text-6xl font-bold mt-4'
                {...fadeInUp}
                transition={{delay: 0.3}}>
                    Hi, I&apos;m <motion.span className='text-primary'
                    {...fadeIn}
                    transition={{delay: 0.8}}>
                        Opara Kelechi
                    </motion.span>
                </motion.h1>

                <motion.p
                className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-6'
                {...fadeInUp}
                transition={{delay: 0.4}}>
                    Full Stack Developer 
                    <motion.span className='text-primary mx-2'{...fadeIn}
                    transition={{delay: 0.6}}>
                        |
                    </motion.span>
                    AI Enthusiast
                </motion.p>

                <motion.div className='flex justify-center gap-6 mt-8'
                {...fadeInUp}
                transition={{delay: 0.5}}>
                    <motion.a
                    href='https://github.com/riskymind'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors cursor-pointer'
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.9}}>
                        <FaGithub />
                    </motion.a>
                    
                    <motion.a
                    href='https://www.linkedin.com/in/kelechi-opara-b3a565127/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors cursor-pointer'
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.9}}>
                        <FaLinkedin />
                    </motion.a>

                    <motion.a
                    href='https://x.com/kaylayshii'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors cursor-pointer'
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.9}}>
                        <FaXTwitter />
                    </motion.a>
                </motion.div>
                <motion.div
                {...fadeInUp}
                transition={{delay: 0.6}}
                className='flex flex-col md:flex-row justify-center gap-4 mt-8'>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        <Link href="/projects" className='bg-primary w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-block'>
                            View Projects
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        <Link href="/contact" className=" inline-block w-full bg-gray-500  md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                            Contact Me
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero
