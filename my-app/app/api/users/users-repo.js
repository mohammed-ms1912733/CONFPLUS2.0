import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default class UsersRepo {
    constructor() {}   
    
    async addOrganizer(organizer) {
        return await prisma.organizer.create({
            data: organizer
        })
    }

    async getOrganizers() {
        const organizers = await prisma.organizer.findMany()
        return organizers
    }
    
}