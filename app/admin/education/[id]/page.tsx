import EducationForm from "@/app/components/admin/EducationForm";
import { Metadata } from "next";
import {getEducationById} from "@/lib/actions/education.actions"

export const metadata: Metadata = {
    title: "Update Education"
}

import React from 'react'
import { notFound } from "next/navigation";

const UpdateExperiencePage = async (props: {
    params: Promise<{id: string}>
}) => {
    const { id } = await props.params
    const edu = await getEducationById(id)

    if(!edu) return notFound()

  return (
    <div className='container'>
        <h2 className='text-3xl font-bold'>Update Experience</h2>
        <div className='my-8'>
            <EducationForm type='Update' edu={edu} eduId={edu.id}/>
        </div>
    </div>
  )
}

export default UpdateExperiencePage
