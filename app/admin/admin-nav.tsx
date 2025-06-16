"use client"

import Link from 'next/link'
import {AnimatePresence, motion} from "framer-motion"
import { Bars3Icon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { MoonIcon } from '@heroicons/react/24/outline'


const Navbar = () => {
    const {theme, toggleTheme} = useTheme()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const menuItems = [
        {href: "/admin/projects", label: "Project"},
        {href: "/admin/experience", label: "Experience"},
        {href: "/admin/education", label: "Education"},
        {href: "/admin/skill", label: "Skill"},
    ]

  return (
    <nav className='w-full bg-white/88 dark:bg-dark/88 backdrop-blur-sm z-50 fixed'>
      <div className='container'>
        <div className='h-16 flex items-center justify-between'>
            <Link href="/" className='text-xl font-bold dark:text-primary text-black/70'>
                Asterisk&trade;
            </Link>

            {/* Desktop menu */}
            <div className='space-x-8 md:flex items-center hidden'>
                {menuItems.map((item)=> (
                    <Link href={item.href} key={item.label} className='hover:text-primary transition-colors'>
                        {item.label}
                    </Link>
                ))}
                <motion.button
                onClick={toggleTheme}
                className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
                whileHover={{scale:1}}
                whileTap={{scale: 0.8}}>
                     {theme === 'dark' ? (
                    <SunIcon className="h-5 w-5" />
                    ) : (
                     <MoonIcon className="h-5 w-5" />
                    )}
                </motion.button>
            </div>

            {/* Mobile menu button*/}
            <motion.button
            onClick={toggleMobileMenu}
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}>
                {isMobileMenuOpen ? (
                    <XMarkIcon className='h-6 w-6'/>
                ) : (
                    <Bars3Icon className='h-6 w-6'/>
                )}
            </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.button 
                initial={{opacity: 0, height:0}}
                animate={{opacity: 1, height:"auto"}}
                exit={{opacity: 0, height: 0}}
                transition={{duration: 0.3}}
                className='space-y-4 py-4'>
                        {menuItems.map((item, index)=> (
                            <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}>
                                <Link href={item.href}
                                className='py-2 hover:text-primary transition-colors flex justify-start'
                                onClick={()=> setIsMobileMenuOpen(false)}>
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: menuItems.length * 0.2 }}
                        whileHover={{scale: 1}}
                        whileTap={{scale: .7}}>
                            <button onClick={()=> {
                                toggleTheme()
                                setIsMobileMenuOpen(false)
                            }}
                            className='flex items-center py-2 hover:text-primary transition-colors'>
                                {theme === 'dark' ? (
                                <>
                                    <SunIcon className="h-5 w-5 mr-2" />
                                    Light Mode
                                </>
                                ) : (
                                <>
                                    <MoonIcon className="h-5 w-5 mr-2" />
                                    Dark Mode
                                </>
                                )}
                            </button>
                        </motion.div>
                </motion.button>
            )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
