"use server"
import { PrismaClient } from "@/app/generated/prisma";
import { convertToPlainObject } from "@/utils/convertToPlainObject";

export async function getAllExperience() {
    const prisma = new PrismaClient()
    const data = await prisma.experience.findMany({})

    return convertToPlainObject(data)
}