import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import styles from './Navigation.module.css'

export default function Navigation() {
  const goPrev = () => {
    const el = document.querySelector('.scroll-container')
    if (el) el.scrollBy({ top: -window.innerHeight, behavior: 'smooth' })
  }

  const goNext = () => {
    const el = document.querySelector('.scroll-container')
    if (el) el.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <div className={styles.nav}>
      <button className={styles.btn} onClick={goPrev} aria-label="Previous section">
        <FiChevronLeft />
      </button>
      <button className={styles.btn} onClick={goNext} aria-label="Next section">
        <FiChevronRight />
      </button>
    </div>
  )
}
