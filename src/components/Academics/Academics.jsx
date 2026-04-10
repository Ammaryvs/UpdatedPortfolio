import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import styles from './Academics.module.css'

// Listed bottom-up → display top-down (reverse)
const modules = [
  {
    name: 'Algorithms',
    tag: 'Year 1',
    skills: ['Big-O Analysis', 'Dynamic Programming', 'Graph Theory'],
  },
  {
    name: 'AI Application and Design',
    tag: 'Year 1',
    skills: ['Figma', 'Generative AI', 'Prompt Engineering'],
  },
  {
    name: 'Spatial Design Studio',
    tag: 'Year 2',
    skills: ['Nano Banana', 'Urban Design', 'PyTorch'],
  },
  {
    name: 'System Design Studio',
    tag: 'Year 2',
    skills: ['Agent Based Modeling', 'System Network', 'Optimization'],
  },
  {
    name: 'Product Design Studio',
    tag: 'Year 2',
    skills: ['Arduino', 'Product Development', 'Electronics'],
  },
  {
    name: 'Human Computer Interaction & AI',
    tag: 'Year 2',
    skills: ['User Research', 'Prototyping', 'Usability Testing'],
  },
  {
    name: 'Machine Learning',
    tag: 'Year 2',
    skills: ['Scikit-learn', 'Regression', 'Classification'],
  },
  {
    name: 'Service Design Studio',
    tag: 'Year 3',
    skills: ['Ruby on Rails', 'Full Stack Development', 'Firebase'],
  },
  {
    name: 'Software Verification & Validation',
    tag: 'Year 3',
    skills: ['JUnit', 'Fuzzing', 'Mutation Testing'],
  },
  {
    name: 'Advanced Database',
    tag: 'Year 3',
    skills: ['T-SQL', 'ERD Modelling', 'Query Optimization'],
  },
  {
    name: 'Game Design',
    tag: 'Year 3',
    skills: ['Unity', 'Game Mechanics', 'Interactive Narrative'],
  },
  {
    name: 'Natural Language Processing',
    tag: 'Year 3',
    skills: ['Transformers', 'NLTK', 'Text Classification'],
  },
  {
    name: 'Applied Deep Learning',
    tag: 'Year 4',
    skills: ['PyTorch', 'CNNs', 'Transfer Learning'],
  },
  {
    name: 'Service Design Studio',
    tag: 'Year 4',
    skills: ['React', 'UX Research', 'Deployment'],
  },
  {
    name: 'Capstone',
    tag: 'Year 4',
    skills: ['RAG Pipeline', 'System Architecture', 'AI Research'],
  },
].reverse() // Capstone at top, Algorithms at bottom

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-ammar-bin-md-yusri-69b893288' },
  { label: 'Instagram', href: 'https://www.instagram.com/ammaryvsri/' },
  { label: 'Github', href: 'https://github.com/Ammaryvs' },
]

const differentiators = [
  'AI & Machine Learning',
  'Full-Stack Development',
  'Human-Centred Design',
  'Systems Thinking',
]

export default function Academics() {
  return (
    <section id="academics" className={styles.section}>
      <span className="section-label">About - Timeline</span>

      {/* Left panel */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.heading}>Academics</h2>
        <p className={styles.subheading}>Computer Sci and AI Major in SUTD</p>

        <div>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.6rem' }}>
            Main Links
          </p>
          <div className={styles.links}>
            {links.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                {label} <FiArrowRight size={12} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.differentiators}>
          {differentiators.map((d, i) => (
            <motion.p
              key={d}
              className={styles.diff}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              {d}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* Right panel — timeline */}
      <div className={styles.right}>
        {modules.map((mod, i) => (
          <motion.div
            key={`${mod.name}-${i}`}
            className={styles.timelineItem}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            viewport={{ once: true }}
          >
            <div className={styles.moduleInfo}>
              <p className={styles.moduleName}>{mod.name}</p>
              <p className={styles.moduleTag}>{mod.tag}</p>
            </div>

            <div className={styles.lineCol}>
              {i !== 0 && <div className={styles.lineSegTop} />}
              <div className={styles.dot} />
              {i !== modules.length - 1 && <div className={styles.lineSegBottom} />}
            </div>

            <div className={styles.skillSide}>
              {mod.skills.map(skill => (
                <span key={skill} className={styles.skillChip}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
