'use server'

import { uploadFile } from '@/lib/file'
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

export async function uploadFileAction(data: FormData) {
  const file = data.get('file');
  if (!file) return
  await uploadFile(file as Blob)
  revalidatePath('/')
}
