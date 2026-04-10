import { motion } from 'framer-motion'
import styles from './Contents.module.css'

const items = [
  { num: '01.', label: 'About', id: 'about' },
  { num: '02.', label: 'Projects', id: 'projects' },
  { num: '03.', label: 'Contact', id: 'contact' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Contents() {
  return (
    <section id="contents" className={styles.contents}>
      <span className={styles.title}>Contents</span>
      <ul className={styles.list}>
        {items.map(({ num, label, id }, i) => (
          <motion.li
            key={id}
            className={styles.item}
            onClick={() => scrollTo(id)}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className={styles.number}>{num}</span>
            <span className={styles.label}>{label}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
