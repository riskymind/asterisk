// 'use client'

import { getAllExperience } from '@/lib/actions/exp.actions';
import Skills from '../components/Skills'
import { getAllSkills } from '@/lib/actions/skills.actions';
import { BackendEducation, BackendExperience, BackendSkill, FrontEndEducation, FrontEndExperience, FrontEndSkill } from '@/types';
import { getAllEducation } from '@/lib/actions/education.actions';
import Experience from '../components/Experience';
import Education from '../components/Education';


export default async function About() {

  // const backendSkillsData: BackendSkill[] = await getAllSkills();
  // const backendExpData: BackendExperience[] = await getAllExperience()
  // const backendEduData: BackendEducation[] = await getAllEducation()

  // ✅ Fetch all in parallel
  const [backendSkillsData, backendExpData, backendEduData]:[
    BackendSkill[], BackendExperience[], BackendEducation[]
  ] = await Promise.all([
    getAllSkills(),
    getAllExperience(),
    getAllEducation(),
  ]);
  
  const transformedFrontEnd: FrontEndSkill[] = backendSkillsData
  .filter(project => project.category === "frontend")
  .map(project => ({
    title: project.title,
    level: project.level,
    image: project.image,
    category: project.category,
  }));

 const transformedBackEnd: FrontEndSkill[] = backendSkillsData
  .filter(project => project.category === "backend")
  .map(project => ({
    title: project.title,
    level: project.level,
    image: project.image,
    category: project.category,
  }));

  const transformedExp: FrontEndExperience[] = backendExpData.map((exp)=> ({
    role: exp.role,
    company: exp.company,
    location: exp.location,
    image: exp.image,
    startDate: exp.startDate,
    endDate: exp.endDate ?? undefined,
    duties: exp.duties
  }))

   const transformedEdu: FrontEndEducation[] = backendEduData.map((edu)=> ({
    degree: edu.degree,
    school: edu.school,
    image: edu.image,
    year: edu.year,
    knowledge: edu.knowledge
  }))


  return (
    <div className="container max-w-7xl mx-auto py-12">
      
      <h1 
        className="text-4xl font-bold mb-8 text-center shadow-xl text-shadow-lg drop-shadow-lg"
      >
        About Me
      </h1>
      
      {/* Bio Section */}
      <section 
        className="mb-16"
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
        </p>
      </section>

      {/* Skills Section */}
       <Skills frontEnd={transformedFrontEnd} backEnd={transformedBackEnd}/>
      
      <div className='flex justify-between flex-wrap md:flex-nowrap gap-4'>
        {/* Experience Section */}
        <Experience exp={transformedExp}/>

        {/* Education Section */}
        <Education education={transformedEdu}/>
      </div>
      

    </div>
  )
} 