import { getTodos } from '@/lib/todos'
import styles from './page.module.css'

export default async function Home() {
  const { todos } = await getTodos();
  console.log(todos);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ul>
          {todos?.map(todo => (
            <p key={todo.id}>{todo.name}</p>
          ))}
        </ul>
      </div>
    </main>
  )
}
