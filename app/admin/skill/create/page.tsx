import SkillForm from '@/app/components/admin/SkillForm'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Add Education"
}

const CreateEducationPage = () => {
  return (
    <div className='container'>
        <h2 className='text-3xl font-bold'>Add Skill</h2>
        <div className='my-8'>
            <SkillForm type='Create'/>
        </div>
    </div>
  )
}

export default CreateEducationPage
