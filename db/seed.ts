import { PrismaClient } from "@/app/generated/prisma";
import sampleData from "./sample-data";

async function main() {
    const prisma = new PrismaClient()
    await prisma.project.deleteMany()
    await prisma.experience.deleteMany()
    await prisma.education.deleteMany()
    await prisma.skills.deleteMany()

    await prisma.project.createMany({data: sampleData.projects})
    await prisma.experience.createMany({data: sampleData.experience})
    await prisma.education.createMany({data: sampleData.education})
    await prisma.skills.createMany({data: sampleData.skills})

    console.log("Database seeded successfully!");
    
}

main()