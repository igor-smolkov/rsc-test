'use client'

import { useRef, useTransition } from 'react'
import { uploadFileAction } from '@/app/_actions'

const UploadForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isPending, startTransition] = useTransition()

  async function action(data: FormData) {
    await uploadFileAction(data)
    formRef.current?.reset()
  }

  return (
    <form ref={formRef} action={(data) => startTransition(() => action(data))}>
      <h2>Загрузить пикчу</h2>
      <input
        type='file'
        name='file'
      />
      <button
        type='submit'
      >
        Загрузить
      </button>
      {isPending && <>Добавляем...</>}
    </form>
  )
}

export default UploadForm
