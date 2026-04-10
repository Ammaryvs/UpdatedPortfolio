import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

const bgVariants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%' }),
  center: { x: 0 },
  exit:  (dir) => ({ x: dir > 0 ? '-100%' : '100%' }),
}

const textVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const project = projects[activeIndex]

  const handleSelect = (i) => {
    if (i === activeIndex) return
    setDirection(i > activeIndex ? 1 : -1)
    setActiveIndex(i)
  }

  return (
    <section id="projects" className={styles.section}>
      <span className="section-label">Projects</span>

      {/* Sliding background image */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={activeIndex}
          className={styles.bg}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={project.bgImage
            ? { backgroundImage: `url(${project.bgImage})` }
            : { backgroundColor: '#1a1a1a' }
          }
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className={styles.overlay} />

      {/* Fading text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className={styles.content}
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <div className={styles.meta}>
            <span className={styles.year}>{project.year}</span>
            <span className={styles.tag}>{project.tag}</span>
          </div>

          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.linkRow}>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewLink}
              >
                View Project <FiArrowRight />
              </a>
            )}
            {project.videoLink && (
              <a
                href={project.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewLink}
              >
                See Video <FiPlay />
              </a>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={styles.tabBar}>
        {projects.map((p, i) => (
          <button
            key={p.id}
            className={`${styles.tab} ${i === activeIndex ? styles.active : ''}`}
            onClick={() => handleSelect(i)}
            aria-label={p.title}
          >
            {p.logo
              ? <img src={p.logo} alt={p.company} className={styles.tabLogo} />
              : p.company
            }
          </button>
        ))}
      </div>
    </section>
  )
}
