'use client'

import { useRef, useTransition } from 'react'
import { createUserAction } from '@/app/_actions'

const NewTodoForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isPending, startTransition] = useTransition()

  async function action(data: FormData) {
    const name = data.get('name')
    if (typeof name !== 'string' || !name) return

    await createUserAction(name)
    formRef.current?.reset()
  }

  return (
    <form ref={formRef} action={(data) => startTransition(() => action(data))}>
      <h2>Create new user</h2>
      <input
        type='text'
        name='name'
      />
      <button
        type='submit'
      >
        Add User
      </button>
      {isPending && <>Добавляем...</>}
    </form>
  )
}

export default NewTodoForm
