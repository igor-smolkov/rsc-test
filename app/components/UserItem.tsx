'use client'

import { useTransition } from 'react'

import { Users } from '@prisma/client'
import { deleteUserAction } from '@/app/_actions'

type Props = {
  user: Users
}

const UserItem = ({ user }: Props) => {
  const [isPending, startTransition] = useTransition()

  return (
    <div key={user.id}>
      <p>{user.name}</p>
      <button onClick={() => startTransition(() => deleteUserAction(user.name))}>Delete</button>
      {isPending && <>Удаляем...</>}
    </div>
  )
}

export default UserItem
