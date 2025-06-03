"use server"
import { PrismaClient } from "@/app/generated/prisma";
import { convertToPlainObject } from "@/utils/convertToPlainObject";

export async function getAllSkills() {
    const prisma = new PrismaClient()
    const data = await prisma.skills.findMany({})

    return convertToPlainObject(data)
}