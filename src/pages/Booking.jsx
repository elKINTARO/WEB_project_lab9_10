import { useParams } from 'react-router-dom'

function Booking() {
  const { trainId } = useParams()

  return (
    <div>
      <h1>Бронювання квитка</h1>
      <p>Потяг ID: {trainId}</p>
    </div>
  )
}

export default Booking
