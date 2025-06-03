"use server"
import { PrismaClient } from "@/app/generated/prisma";
import { convertToPlainObject } from "@/utils/convertToPlainObject";

export async function getAllEducation() {
    const prisma = new PrismaClient()
    const data = await prisma.education.findMany({})

    return convertToPlainObject(data)
}