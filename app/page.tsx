import { getTodos } from '@/lib/todos'
import styles from './page.module.css'

export default async function Home() {
  const { todos } = await getTodos()

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ul className='mt-4 flex flex-col gap-1'>
          {todos?.map(todo => (
            <p key={todo.id}>{todo.name}</p>
          ))}
        </ul>
      </div>
    </main>
  )
}
