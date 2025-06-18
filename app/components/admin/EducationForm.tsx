"use client"
import React, { useEffect, useState } from 'react'
import { UploadButton } from '@/lib/uploadthing';
import {Education} from  "@/types/index"
import { useRouter } from 'next/navigation';
import {insertEducationSchema, updateEducationSchema} from "@/utils/validators"
import {z} from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {eduDefaultValues} from "@/lib/constants/index"
import {toast} from "sonner"
import Image from 'next/image';
import {createEducation, updateEducation} from "@/lib/actions/education.actions"


const EducationForm = ({
    type,
    edu,
    eduId
}: {
    type: "Create" | "Update"
    edu?: Education
    eduId?: string
}) => {

const router = useRouter()

const schema = type === 'Update' ? updateEducationSchema : insertEducationSchema;
type EduFormSchema = z.infer<typeof schema>;

const form = useForm<EduFormSchema>({
    resolver: zodResolver(schema),
    defaultValues: edu && type === 'Update' ? edu : eduDefaultValues,
  });

const [knowInput, setKnowInput] = useState('');
// const [technologies, setTechnologies] = useState<string[]>([]);
const [knowledge, setKnowledge] = useState<string[]>(edu?.knowledge || []);

useEffect(() => {
  setValue('knowledge', knowledge);
})

 const onSubmit = async (values: EduFormSchema) => {
    // setValue('technologies', technologies); 
    if (type === 'Create') {
      const res = await createEducation(values);
      if (!res.success) return toast.error(res.message);
      toast.success(res.message);
      router.push('/admin/education');
    }

    if (type === 'Update') {
      if (!eduId) return router.push('/admin/education');
      const res = await updateEducation({ ...values, id: eduId });
      if (!res.success) return toast.error(res.message);
      toast.success(res.message);
      router.push('/admin/education');
    }
  };

   const { register, handleSubmit, setValue, watch, formState: { isSubmitting, errors } } = form;

  const image = watch('image');

  return (
    <form className='flex flex-col gap-8' method='POST' onSubmit={handleSubmit(onSubmit)}>
        
        <div className='flex flex-col'>
            <label htmlFor="degree" className='block font-medium mb-1'>Degree</label>
            <input type="text" placeholder='Enter Education Degree' 
            className='w-full border px-3 py-2 rounded' id='degree' {...register("degree")}/>
            {errors.degree && <span className="text-red-500 text-sm">{errors.degree.message}</span>}
        </div>
        
        <div className='flex flex-col'>
            <label htmlFor="sch" className='block font-medium mb-1'>School</label>
            <textarea id="sch" placeholder='Enter School Attended' className='w-full border px-3 py-2 rounded' {...register("school")}/>
            {errors.school && <span className="text-red-500 text-sm">{errors.school.message}</span>}
        </div>
        
        <div className='flex flex-col gap-1'>
            <label className="block font-medium mb-1">Image</label>
            <div className="flex gap-4 items-center">
            <Image  src={image} alt="school logo" width={100} height={100} className="rounded" />
            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => setValue('image',  res[0].ufsUrl)}
                onUploadError={(error: Error) => {toast.error(error.message)}}
            />
            </div>
      </div>

      <div className='flex gap-2'>
          <div className='flex-1 flex-col'>
            <label htmlFor="date" className='block font-medium mb-1'>Year</label>
            <input type="date" placeholder='Choose Year' className='w-full border px-3 py-2 rounded' id='date' {...register("year")}/>
            {errors.year && <span className="text-red-500 text-sm">{errors.year.message}</span>}
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="tech" className='block font-medium mb-1'>Knowledge</label>
            <div className="flex flex-wrap gap-2">
                {knowledge.map((knw, index) => (
                <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-1 text-sm"
                >
                    {knw}
                    <button
                    type="button"
                    onClick={() =>
                        setKnowledge(knowledge.filter((_, i) => i !== index))
                    }
                    className="text-blue-500 hover:text-red-500"
                    >
                    ✕
                    </button>
                </span>
                ))}
            </div>
            <div className='flex gap-2'>
                <input type="text"  className="border border-gray-300 rounded px-3 py-2 w-full" placeholder="Type attained knowledge and press Enter"
                value={knowInput}
                onChange={(e) => setKnowInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && knowInput.trim()) {
                    e.preventDefault();
                    if (!knowledge.includes(knowInput.trim())) {
                        setKnowledge([...knowledge, knowInput.trim()]);
                        setKnowInput('');
                    }}
                }}/>
            </div>
        </div>
      </div>

    <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-6 py-2 rounded disabled:opacity-50">
        {isSubmitting ? 'Submitting...' : `${type} Education`}
      </button>
    </form>
  )
}

export default EducationForm
