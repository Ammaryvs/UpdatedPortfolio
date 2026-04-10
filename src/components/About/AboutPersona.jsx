import { useRef } from 'react'
import { motion } from 'framer-motion'
import { personaCards } from '../../data/projects'
import styles from './AboutPersona.module.css'

function PersonaCard({ card, i }) {
  const videoRef = useRef(null)

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play()
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <motion.div
      className={styles.cardWrapper}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.card}>
        {card.video
          ? <video
              ref={videoRef}
              src={card.video}
              className={styles.cardImage}
              muted
              loop
              playsInline
            />
          : card.image
            ? <img src={card.image} alt={card.title} className={styles.cardImage} />
            : <div className={styles.cardImage} />
        }
        <div className={styles.cardBar} />
        <div className={styles.cardBar} />
      </div>
      <div className={styles.cardText}>
        <p className={styles.cardTitle}>{card.title}</p>
        <p className={styles.cardDesc}>
          <strong>Experience:</strong> {card.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function AboutPersona() {
  return (
    <section id="about" className={styles.section}>
      <span className="section-label">About - Persona</span>

      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Born to <span>Build</span>
      </motion.h2>

      <div className={styles.cardRow}>
        {personaCards.map((card, i) => (
          <PersonaCard key={card.id} card={card} i={i} />
        ))}
      </div>
    </section>
  )
}
