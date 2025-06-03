import {z} from "zod"

export const insertProjectSchema = z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    images: z.array(z.string()),
    githubLink: z.string(),
    demoLink: z.string(),
    image: z.string()
})


export const insertSkillSchema = z.object({
    title: z.string(),
    level: z.number(),
    image: z.string(),
    category: z.string()
})

export const insertExperienceSchema = z.object({   
    role :     z.string(),
    company:   z.string(),
    location:  z.string(),
    image:     z.string(),
    startDate: z.date(),
    endDate:  z.date().optional(),
    duties:  z.array(z.string())
})

export const insertEducationSchema = z.object({   
  degree:    z.string(),
  school:    z.string(),
  image:     z.string(),
  year:      z.date(),
  knowledge: z.array(z.string())
})