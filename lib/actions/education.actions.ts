"use server"
import { convertToPlainObject } from "@/utils/convertToPlainObject";
import { insertEducationSchema, updateEducationSchema } from "@/utils/validators";
import { revalidatePath } from "next/cache";
import {z} from "zod"
import { formatError } from "../utils";
import { prisma } from "@/db/prisma"

export async function getAllEducation() {
    // const prisma = new PrismaClient()
    const data = await prisma.education.findMany({})

    return convertToPlainObject(data)
}

// Get single experience by it's ID
export async function getEducationById(eduId: string) {
    // const prisma = new PrismaClient()
    const data =  await prisma.education.findFirst({
        where: {id: eduId}
    })

    return convertToPlainObject(data)
}

// Create a Education
export async function createEducation(data: z.infer<typeof insertEducationSchema>) {
    try {
        // const prisma = new PrismaClient()
        const education = insertEducationSchema.parse(data)
        await prisma.education.create({data: education})

        revalidatePath("/admin/education")

        return {
            success: true,
            message: "Education created successfully"
        }
    } catch (error) {
        return {success: false, message: formatError(error)}
    }
}

// Update a Education
export async function updateEducation(data: z.infer<typeof updateEducationSchema>) {
  try {
    // const prisma = new PrismaClient()
    const education = updateEducationSchema.parse(data);
    const eduExists = await prisma.education.findFirst({
      where: { id: education.id },
    });

    if (!eduExists) throw new Error('Education not found');

    await prisma.education.update({
      where: { id: education.id },
      data: education,
    });

    revalidatePath('/admin/education');

    return {
      success: true,
      message: 'Education updated successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Delete a Education
export async function deleteEducation(id: string) {
    try {
    //   const prisma = new PrismaClient()
      const eduExists = await prisma.education.findFirst({
      where: { id },
    });

    if (!eduExists) throw new Error('Education not found');

    await prisma.education.delete({ where: { id } });

    revalidatePath('/admin/education');

    return {
      success: true,
      message: 'Education deleted successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}