import {  getAllProjects } from "@/lib/actions/projects.actions";
import { BackendProject, FrontEndProject } from "@/types";
import Projects from "../components/Projects";

export default async function ProjectsPage() {
  const backendData: BackendProject[] = await getAllProjects();
  
  const transformedProjects: FrontEndProject[] = backendData.map((project) => ({
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    images: project.images,
    demoLink: project.demoLink,
    githubLink: project.githubLink,
    image: project.images[0] || '/projects/icon.png',
  }));
  return (
    <>
      <h2 className="text-3xl font-bold mb-2 text-center">
            All Projects
      </h2>
      <Projects data={transformedProjects}/>
    </>
    
  )
} 