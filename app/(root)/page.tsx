import { BackendProject, FrontEndProject } from "@/types";
import { getLatestProjects } from '@/lib/actions/projects.actions'
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ViewAllButton from "../components/ViewAllButton";



export default async function Home() {

const backendData: BackendProject[] = await getLatestProjects();

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
      <Hero />
       <h2 className="text-3xl font-bold mb-2 text-center">
          Featured Projects
        </h2>
      <Projects data={transformedProjects}/>
      <ViewAllButton urlLink="projects" title="Projects"/>
    </>
  );
}
