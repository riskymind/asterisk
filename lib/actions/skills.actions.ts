"use server"
import { convertToPlainObject } from "@/utils/convertToPlainObject";
import { insertSkillSchema, updateSkillSchema } from "@/utils/validators";
import { revalidatePath } from "next/cache";
import {z} from "zod"
import { formatError } from "../utils";
import { prisma } from "@/db/prisma"


export async function getAllSkills() {
    // const prisma = new PrismaClient()
    const data = await prisma.skills.findMany({})

    return convertToPlainObject(data)
}

// Get single skill by it's ID
export async function getSkillById(id: string) {
    // const prisma = new PrismaClient()
    const data =  await prisma.skills.findFirst({
        where: {id: id}
    })

    return convertToPlainObject(data)
}

// Create a Skill
export async function createSkill(data: z.infer<typeof insertSkillSchema>) {
    try {
        // const prisma = new PrismaClient()
        const skill = insertSkillSchema.parse(data)
        await prisma.skills.create({data: skill})

        revalidatePath("/admin/skill")

        return {
            success: true,
            message: "Skill created successfully"
        }
    } catch (error) {
        return {success: false, message: formatError(error)}
    }
}

// Update a Skill
export async function updateSkill(data: z.infer<typeof updateSkillSchema>) {
  try {
    // const prisma = new PrismaClient()
    const skill = updateSkillSchema.parse(data);
    const skillExists = await prisma.skills.findFirst({
      where: { id: skill.id },
    });

    if (!skillExists) throw new Error('Skill not found');

    await prisma.skills.update({
      where: { id: skill.id },
      data: skill,
    });

    revalidatePath('/admin/skill');

    return {
      success: true,
      message: 'Skill updated successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Delete a Skill
export async function deleteSkill(id: string) {
    try {
    //   const prisma = new PrismaClient()
      const skillExists = await prisma.skills.findFirst({
      where: { id },
    });

    if (!skillExists) throw new Error('Skill not found');

    await prisma.skills.delete({ where: { id } });

    revalidatePath('/admin/skill');

    return {
      success: true,
      message: 'Skill deleted successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}