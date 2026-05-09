import styles from './SeatMap.module.css'

// status: 'free' | 'selected' | 'booked'
function SeatMap({ seats, selectedSeats, onToggle }) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Схема місць</h3>

      <div className={styles.legend}>
        <span className={`${styles.legendItem} ${styles.free}`}>Вільне</span>
        <span className={`${styles.legendItem} ${styles.selected}`}>Обране</span>
        <span className={`${styles.legendItem} ${styles.booked}`}>Заброньоване</span>
      </div>

      <div className={styles.grid}>
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat.id)
          const isBooked = seat.status === 'booked'

          let seatClass = styles.seat
          if (isBooked) seatClass += ` ${styles.booked}`
          else if (isSelected) seatClass += ` ${styles.selected}`
          else seatClass += ` ${styles.free}`

          return (
            <button
              key={seat.id}
              className={seatClass}
              onClick={() => !isBooked && onToggle(seat.id)}
              disabled={isBooked}
              type="button"
              title={`Місце ${seat.number}`}
            >
              {seat.number}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default SeatMap
