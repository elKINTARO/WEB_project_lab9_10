const STORAGE_KEY = 'bookings'

const BookingService = {
  getAll() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    } catch {
      return []
    }
  },

  save(booking) {
    const bookings = this.getAll()
    bookings.push(booking)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings))
  },
}

export default BookingService
