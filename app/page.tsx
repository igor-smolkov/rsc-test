import { readText, readText2 } from '@/lib/text';
import { getUsers } from '@/lib/users';

import Download from './components/Download';
import NewUserForm from './components/NewUserForm';
import UploadForm from './components/UploadForm';
import UserItem from './components/UserItem';
import styles from './page.module.css'

export default async function Home() {
  const { users } = await getUsers();
  // const { text } = await readText()
  const { text: text2 } = await readText2()

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <NewUserForm />
        <ul>
          {users?.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </ul>
        {/* {text} */}
        <Download />
        <UploadForm />
        {text2}
      </div>
    </main>
  )
}
