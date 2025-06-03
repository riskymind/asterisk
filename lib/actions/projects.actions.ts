"use server"
import { PrismaClient } from "@/app/generated/prisma";
import { convertToPlainObject } from "@/utils/convertToPlainObject";

export async function getLatestProjects() {
    const prisma = new PrismaClient()

    const data = await prisma.project.findMany({
        take: 3,
        orderBy: {createdAt: "desc"}
    })

    return convertToPlainObject(data)
}

export async function getAllProjects() {
    const prisma = new PrismaClient()
    const data = await prisma.project.findMany({
        orderBy: {createdAt: "desc"}
    })

    return convertToPlainObject(data)
}