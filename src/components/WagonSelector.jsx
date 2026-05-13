import styles from './WagonSelector.module.css'

function WagonSelector({ total, selected, onSelect }) {
  const wagons = Array.from({ length: total }, (_, i) => i + 1)

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Оберіть вагон</h3>
      <div className={styles.list}>
        {wagons.map((num) => (
          <button
            key={num}
            className={`${styles.wagon} ${selected === num ? styles.active : ''}`}
            onClick={() => onSelect(num)}
            type="button"
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  )
}

export default WagonSelector
