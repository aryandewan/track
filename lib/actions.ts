"use server"

import { auth } from "@/auth"
import prisma from "@/lib/prisma"

export const addSalary = async (formData: FormData) => {
    const session = await auth()
    const salary = formData.get("salary")

    if (!session?.user?.id) {
        throw new Error("Unauthorized")
    }

    await prisma.user.update({
        where: {
            id: session.user.id
        },
        data: {
            salary: Number(salary)
        }
    })
}
