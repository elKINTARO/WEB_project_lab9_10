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
    const entry = {
      ...booking,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }
    bookings.push(entry)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings))
    return entry
  },
}

export default BookingService
