import fs from "fs-extra";
import path from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const organizersPath = path.join(process.cwd(), "data/organizers.json");

async function main() {
    try {
        const organizers = await fs.readJSON(organizersPath);
        for (const organizer of organizers)
            await prisma.organizer.create({ data: organizer });
    } catch (error) {
        console.log(error);
        return { error: error.message };
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        await prisma.$disconnect();
        process.exit(1);
    });
