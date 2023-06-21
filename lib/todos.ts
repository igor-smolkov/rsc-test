import prisma from './prisma'

export async function getTodos() {
  try {
    console.log('getTodosstart');
    // console.log(prisma);
    console.log('afprisma');
    const todos = await prisma.users.findMany()
    console.log('getTodos', todos);
    return { todos }
  } catch (error) {
    console.log(error);
    return { error }
  }
}
