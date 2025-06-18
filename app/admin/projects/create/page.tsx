import ProjectForm from '@/app/components/admin/ProjectForm'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Create Project"
}

const CreateProjectPage = () => {
  return (
    <div className='container'>
        <h2 className='text-3xl font-bold'>Create Project</h2>
        <div className='my-8'>
            <ProjectForm type='Create'/>
        </div>
    </div>
  )
}

export default CreateProjectPage
