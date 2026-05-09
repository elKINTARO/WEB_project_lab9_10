import { useState } from 'react'
import styles from './BookingForm.module.css'

const initialFields = { name: '', phone: '', email: '' }
const initialErrors = { name: '', phone: '', email: '' }

function validate(fields) {
  const errors = { name: '', phone: '', email: '' }

  if (!fields.name.trim()) {
    errors.name = "Ім'я обов'язкове"
  } else if (fields.name.trim().length < 2) {
    errors.name = "Ім'я має містити щонайменше 2 символи"
  }

  if (!fields.phone.trim()) {
    errors.phone = "Телефон обов'язковий"
  } else if (!/^\+?[\d\s\-()]{7,15}$/.test(fields.phone.trim())) {
    errors.phone = "Невірний формат телефону"
  }

  if (!fields.email.trim()) {
    errors.email = "Email обов'язковий"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Невірний формат email"
  }

  return errors
}

function BookingForm({ onSubmit }) {
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState(initialErrors)
  const [touched, setTouched] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, ...validate({ ...fields, [name]: value }) }))
    }
  }

  function handleBlur(e) {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors(validate({ ...fields, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(fields)
    setErrors(validationErrors)
    setTouched({ name: true, phone: true, email: true })
    const hasErrors = Object.values(validationErrors).some(Boolean)
    if (!hasErrors) {
      onSubmit(fields)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h3 className={styles.title}>Персональні дані</h3>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">Ім'я</label>
        <input
          id="name"
          name="name"
          type="text"
          className={`${styles.input} ${touched.name && errors.name ? styles.invalid : ''}`}
          value={fields.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Іван Петренко"
        />
        {touched.name && errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="phone">Телефон</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className={`${styles.input} ${touched.phone && errors.phone ? styles.invalid : ''}`}
          value={fields.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="+38 099 123 45 67"
        />
        {touched.phone && errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className={`${styles.input} ${touched.email && errors.email ? styles.invalid : ''}`}
          value={fields.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="example@mail.com"
        />
        {touched.email && errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <button type="submit" className={styles.submit}>Забронювати</button>
    </form>
  )
}

export default BookingForm
