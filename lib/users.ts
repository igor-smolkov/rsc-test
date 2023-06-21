import prisma from './prisma'

export async function getUsers() {
  try {
    const users = await prisma.users.findMany()
    return { users }
  } catch (error) {
    return { error }
  }
}

export async function createUser(name: string) {
  try {
    const user = await prisma.users.create({ data: { name } })
    return { user }
  } catch (error) {
    return { error }
  }
}

export async function deleteUser(name: string) {
  try {
    const user = await prisma.users.deleteMany({ where: { name: { in: name } } })
    return { user }
  } catch (error) {
    return { error }
  }
}
