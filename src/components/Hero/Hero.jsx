import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiInstagram, FiMail, FiDownload } from 'react-icons/fi'
import CharacterRain from './CharacterRain'
import TypingText from './TypingText'
import styles from './Hero.module.css'
import resumePdf from '../../assets/Ammar DAI Resume (AI Engineer).pdf'

const socials = [
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/md-ammar-bin-md-yusri-69b893288', label: 'LinkedIn' },
  { icon: FiInstagram, href: 'https://www.instagram.com/ammaryvsri/', label: 'Instagram' },
  { icon: FiGithub, href: 'https://github.com/Ammaryvs', label: 'GitHub' },
  { icon: FiMail, href: 'mailto:md_ammar8@yahoo.com', label: 'Email' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <CharacterRain />
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.name} variants={itemVariants}>
          AMMAR
        </motion.h1>
        <motion.div variants={itemVariants}>
          <TypingText />
        </motion.div>
        <motion.div className={styles.socials} variants={itemVariants}>
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
          <a
            href={resumePdf}
            download="Ammar DAI Resume (AI Engineer).pdf"
            className={styles.resumeBtn}
            aria-label="Download Resume"
          >
            <FiDownload />
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
