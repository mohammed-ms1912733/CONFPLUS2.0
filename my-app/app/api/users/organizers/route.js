import UsersRepo from "../users-repo"
const repo = new UsersRepo()




export async function GET (request) {
    const organizers = await repo.getOrganizers()
    return Response.json(organizers, {status: 200})
}

export async function POST (request) {
    const organizer = await request.json()
    const newOrganizer = await repo.addOrganizer(organizer)
    return Response.json(newOrganizer, {status: 201})
}