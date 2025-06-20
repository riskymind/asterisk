"use server"
// import { PrismaClient } from "@/app/generated/prisma";
import { convertToPlainObject } from "@/utils/convertToPlainObject";
import { insertExperienceSchema, updateExperienceSchema } from "@/utils/validators";
import { revalidatePath } from "next/cache";
import {z} from "zod"
import { formatError } from "../utils";
import { prisma } from "@/db/prisma"

export async function getAllExperience() {
    // const prisma = new PrismaClient()
    const data = await prisma.experience.findMany({})

    return convertToPlainObject(data)
}

// Get single experience by it's ID
export async function getExperienceById(expId: string) {
    // const prisma = new PrismaClient()
    const data =  await prisma.experience.findFirst({
        where: {id: expId}
    })

    return convertToPlainObject(data)
}

// Create a Experience
export async function createExperience(data: z.infer<typeof insertExperienceSchema>) {
  try {
    const { startDate, endDate, ...rest } = insertExperienceSchema.parse(data);

    await prisma.experience.create({
      data: {
        ...rest,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    });

    revalidatePath("/admin/experience");

    return {
      success: true,
      message: "Experience created successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}


// Update a experience
export async function updateExperience(data: z.infer<typeof updateExperienceSchema>) {
  try {
    const { id, startDate, endDate, ...rest } = updateExperienceSchema.parse(data);

    await prisma.experience.update({
      where: { id },
      data: {
        ...rest,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    });

    revalidatePath("/admin/experience");

    return {
      success: true,
      message: "Experience updated successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Delete a experience
export async function deleteExperience(id: string) {
    try {
    //   const prisma = new PrismaClient()
      const expExists = await prisma.experience.findFirst({
      where: { id },
    });

    if (!expExists) throw new Error('Experience not found');

    await prisma.experience.delete({ where: { id } });

    revalidatePath('/admin/experience');

    return {
      success: true,
      message: 'Experience deleted successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}