import { getUsers } from '@/lib/users';

import NewUserForm from './components/NewUserForm';
import UserItem from './components/UserItem';
import styles from './page.module.css'

export default async function Home() {
  const { users } = await getUsers();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <NewUserForm />
        <ul>
          {users?.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </main>
  )
}
