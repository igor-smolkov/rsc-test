'use server'

import { createUser, deleteUser } from '@/lib/users'
import { revalidatePath } from 'next/cache'

export async function createUserAction(title: string) {
  await createUser(title)
  revalidatePath('/')
}

export async function deleteUserAction(title: string) {
  await deleteUser(title)
  revalidatePath('/')
}
