import prisma from './prisma'

export async function getTodos() {
  try {
    const todos = await prisma.users.findMany()
    return { todos }
  } catch (error) {
    return { error }
  }
}
