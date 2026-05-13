import { useNavigate } from 'react-router-dom'
import styles from './TrainCard.module.css'

function TrainCard({ train }) {
  const navigate = useNavigate()

  return (
    <div className={styles.card} tabIndex={0}>
      <div className={styles.header}>
        <span className={styles.number}>Потяг №{train.number}</span>
        <span className={styles.date}>{train.date}</span>
      </div>

      <div className={styles.route}>
        <div className={styles.city}>
          <span className={styles.time}>{train.departure}</span>
          <span className={styles.cityName}>{train.from}</span>
        </div>
        <div className={styles.arrow}>
          <span className={styles.duration}>{train.duration}</span>
          <span className={styles.line}>──────────►</span>
        </div>
        <div className={styles.city}>
          <span className={styles.time}>{train.arrival}</span>
          <span className={styles.cityName}>{train.to}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <span>Вагонів: {train.wagons}</span>
        <span className={train.seatsAvailable <= 10 ? styles.fewSeats : styles.seats}>
          Місць: {train.seatsAvailable}
        </span>
      </div>

      <button
        className={styles.bookBtn}
        onClick={() => navigate(`/booking/${train.id}`)}
        type="button"
      >
        Обрати місця
      </button>
    </div>
  )
}

export default TrainCard
