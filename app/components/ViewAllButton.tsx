"use client"
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

type Props = {
  urlLink: string;
  title: string
};

const ViewAllButton = ({ urlLink, title }: Props) => {
  return (
    <motion.div 
         {...fadeInUp}
        className='flex justify-center items-center mb-4'>
      <Link
        href={`/${urlLink}`}
        className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-[200px] text-center"
      >
        View All {title}
      </Link>
    </motion.div>
  );
};

export default ViewAllButton;
