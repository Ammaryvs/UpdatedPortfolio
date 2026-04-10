import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiPhone } from 'react-icons/fi'
import styles from './Contact.module.css'

const contactInfo = [
  {
    icon: FiMail,
    label: 'md_ammar8@yahoo.com',
    href: 'mailto:md_ammar8@yahoo.com',
    copyText: 'md_ammar8@yahoo.com',
  },
  {
    icon: FiLinkedin,
    label: 'linkedin.com/in/md-ammar',
    href: 'https://www.linkedin.com/in/md-ammar-bin-md-yusri-69b893288',
    copyText: null,
  },
  {
    icon: FiPhone,
    label: '+65 8649 4774',
    href: null,
    copyText: '+6586494774',
  },
]

export default function Contact() {
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleCopy = (text, index) => {
    if (!text) return
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData
    const mailtoLink = `mailto:md_ammar8@yahoo.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className={styles.section}>
      <span className="section-label">Contact Me</span>

      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Let&apos;s <span>Connect</span>
      </motion.h2>

      <div className={styles.body}>
        <div className={styles.infoList}>
          {contactInfo.map(({ icon: Icon, label, href, copyText }, i) => {
            const El = href ? 'a' : 'button'
            const props = href
              ? { href, target: '_blank', rel: 'noopener noreferrer' }
              : { onClick: () => handleCopy(copyText, i), type: 'button' }

            return (
              <El key={label} className={styles.infoItem} {...props}>
                <span className={styles.iconWrap}><Icon /></span>
                <span>{label}</span>
                {copiedIndex === i && <span className={styles.copied}>Copied!</span>}
              </El>
            )
          })}
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
            required
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
            required
          />
          <textarea
            className={styles.textarea}
            placeholder="Your Message"
            value={formData.message}
            onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
            required
          />
          <button type="submit" className={styles.sendBtn}>Send Message</button>
        </form>
      </div>
    </section>
  )
}
