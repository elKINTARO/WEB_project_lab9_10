import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { useBooking } from '../context/BookingContext'
import trains from '../data/trains'
import WagonSelector from '../components/WagonSelector'
import SeatMap from '../components/SeatMap'
import BookingForm from '../components/BookingForm'
import BookingService from '../services/BookingService'
import styles from './Booking.module.css'

function generateSeats(wagonNumber) {
  return Array.from({ length: 40 }, (_, i) => ({
    id: `w${wagonNumber}-s${i + 1}`,
    number: i + 1,
    status: Math.random() < 0.2 ? 'booked' : 'free',
  }))
}

function Booking() {
  const { trainId } = useParams()
  const navigate = useNavigate()
  const { selectedWagon, setSelectedWagon, selectedSeats, toggleSeat, reset } = useBooking()

  const train = trains.find((t) => t.id === Number(trainId))

  const seats = useMemo(
    () => (selectedWagon ? generateSeats(selectedWagon) : []),
    [selectedWagon]
  )

  if (!train) {
    return (
      <div className={styles.container}>
        <p>Потяг не знайдено.</p>
        <Link to="/">Повернутися до списку</Link>
      </div>
    )
  }

  function handleSubmit(formData) {
    BookingService.save({
      train: { id: train.id, number: train.number, from: train.from, to: train.to, date: train.date },
      wagon: selectedWagon,
      seats: selectedSeats,
      passenger: formData,
    })
    reset()
    navigate('/', { state: { booked: true } })
  }

  return (
    <main className={styles.container}>
      <Link to="/" className={styles.back}>← Назад до списку</Link>

      <h1 className={styles.title}>
        Бронювання: {train.number} · {train.from} → {train.to}
      </h1>
      <p className={styles.subtitle}>{train.date} · {train.departure} – {train.arrival}</p>

      <WagonSelector
        total={train.wagons}
        selected={selectedWagon}
        onSelect={(num) => { setSelectedWagon(num) }}
      />

      {selectedWagon && (
        <SeatMap
          seats={seats}
          selectedSeats={selectedSeats}
          onToggle={toggleSeat}
        />
      )}

      {selectedWagon && selectedSeats.length > 0 && (
        <div className={styles.summary}>
          Обрано місць: <strong>{selectedSeats.length}</strong> у вагоні <strong>{selectedWagon}</strong>
        </div>
      )}

      {selectedWagon && selectedSeats.length > 0 && (
        <BookingForm onSubmit={handleSubmit} />
      )}
    </main>
  )
}

export default Booking
