import { useState } from 'react'
import TrainList from '../components/TrainList'
import trains from '../data/trains'
import styles from './Home.module.css'

function Home() {
  const [query, setQuery] = useState('')

  const filteredTrains = trains.filter((train) => {
    const q = query.toLowerCase().trim()
    return (
      train.number.toLowerCase().includes(q) ||
      train.from.toLowerCase().includes(q) ||
      train.to.toLowerCase().includes(q)
    )
  })

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Розклад потягів</h1>
      <div className={styles.searchWrapper}>
        <input
          className={styles.search}
          type="text"
          placeholder="Пошук за маршрутом або номером потяга..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <TrainList trains={filteredTrains} />
    </main>
  )
}

export default Home
