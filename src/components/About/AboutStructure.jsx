import { motion } from 'framer-motion'
import { skills } from '../../data/projects'
import styles from './AboutStructure.module.css'
import kImg from '../../assets/K.png'

// K + mirrored-K pairs form the double diamond visual
const letters = [
  { mirror: false, label: 'Discover' },
  { mirror: true,  label: 'Define'   },
  { mirror: false, label: 'Develop'  },
  { mirror: true,  label: 'Deliver'  },
]

export default function AboutStructure() {
  return (
    <section className={styles.section}>
      <span className="section-label">About - Structure</span>

      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Project Structure
      </motion.h2>

      <div className={styles.diamond}>
        {letters.map((item, i) => (
          <div key={item.label} className={styles.letterGroup}>
            {i > 0 && <span className={styles.separator}>|</span>}
            <div className={styles.letterWrap}>
              <motion.img
                src={kImg}
                alt=""
                aria-hidden="true"
                className={styles.letterK}
                style={item.mirror ? { transform: 'scaleX(-1)' } : undefined}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.2 + i * 0.6 }}
                viewport={{ once: true }}
              />
              <span className={styles.phaseLabel}>{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      <motion.p
        className={styles.tagline}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {skills.join(' • ')}
      </motion.p>
    </section>
  )
}
