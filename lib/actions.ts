"use server"

import { auth } from "@/auth"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

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
    revalidatePath("/dashboard")
}

export const addTransaction = async (formData: FormData) => {
    const session = await auth()
    const description = formData.get("txn-description")
    const amount = formData.get("txn-amount")
    const date = formData.get("txn-date")

    if (!session?.user?.id) {
        throw new Error("Unauthorized")
    }

    try {
        await prisma.transactions.create({
            data: {
                userId: session.user.id,
                description: String(description),
                amount: Number(amount),
                date: new Date(String(date)),
            },
            include: {
                user: true
            }
        })
        revalidatePath("/dashboard")
    } catch(error) {
        console.log(error)
    }
}

export const addLimit = async (formData: FormData) => {
    const session = await auth()
    const limit = formData.get("limit")

    if (!session?.user?.id) {
        throw new Error("Unauthorized")
    }

    await prisma.user.update({
        where: {
            id: session.user.id
        },
        data: {
            limit: Number(limit)
        }
    })
    revalidatePath("/dashboard")
}