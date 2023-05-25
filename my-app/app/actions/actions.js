"use server";

import { revalidatePath } from "next/cache";

import UsersRepo from "../api/users/users-repo"
const repo = new UsersRepo()


export const getOrganizers = async () => {
    const organizers = await repo.getOrganizers()
    return organizers
}