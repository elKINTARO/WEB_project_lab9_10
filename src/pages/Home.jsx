import TrainList from '../components/TrainList'
import trains from '../data/trains'
import styles from './Home.module.css'

function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Розклад потягів</h1>
      <TrainList trains={trains} />
    </main>
  )
}

export default Home
