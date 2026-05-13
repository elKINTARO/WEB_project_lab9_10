import styles from './SeatMap.module.css'

function Seat({ seat, isSelected, onToggle }) {
  const isBooked = seat.status === 'booked'
  let cls = styles.seat
  if (isBooked) cls += ` ${styles.booked}`
  else if (isSelected) cls += ` ${styles.selected}`
  else cls += ` ${styles.free}`

  return (
    <button
      className={cls}
      onClick={() => !isBooked && onToggle(seat.id)}
      disabled={isBooked}
      type="button"
      title={`Місце ${seat.number}`}
    >
      {seat.number}
    </button>
  )
}

function SeatMap({ seats, selectedSeats, onToggle }) {
  if (!seats.length) return null

  // Купейні місця 1-36: парні = верхні, непарні = нижні
  const mainUpper = seats.filter((s) => s.number % 2 === 0 && s.number <= 36).sort((a, b) => a.number - b.number)
  const mainLower = seats.filter((s) => s.number % 2 !== 0 && s.number <= 36).sort((a, b) => a.number - b.number)

  // Бічні місця 37-54: один ряд, від 37 до 54
  const side = seats.filter((s) => s.number > 36).sort((a, b) => a.number - b.number)

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Схема місць</h3>

      <div className={styles.legend}>
        <span className={`${styles.legendDot} ${styles.free}`}>Вільне</span>
        <span className={`${styles.legendDot} ${styles.selected}`}>Обране</span>
        <span className={`${styles.legendDot} ${styles.booked}`}>Заброньоване</span>
      </div>

      <div className={styles.wagon}>

        {/* Купейна секція: іконка + 2 ряди + іконка */}
        <div className={styles.mainSection}>
          <div className={styles.iconCol}><span className={styles.icon}>👥</span></div>
          <div className={styles.berthsGrid}>
            <div className={styles.row}>
              {mainUpper.map((s) => <Seat key={s.id} seat={s} isSelected={selectedSeats.includes(s.id)} onToggle={onToggle} />)}
            </div>
            <div className={styles.row}>
              {mainLower.map((s) => <Seat key={s.id} seat={s} isSelected={selectedSeats.includes(s.id)} onToggle={onToggle} />)}
            </div>
          </div>
          <div className={styles.iconCol}><span className={styles.icon}>👥</span></div>
        </div>

        {/* Горизонтальний роздільник */}
        <div className={styles.hDivider} />

        {/* Бічна секція: 1 ряд під купейними */}
        <div className={styles.sideSection}>
          <div className={styles.row}>
            {side.map((s) => <Seat key={s.id} seat={s} isSelected={selectedSeats.includes(s.id)} onToggle={onToggle} />)}
          </div>
        </div>

      </div>
    </div>
  )
}

export default SeatMap
