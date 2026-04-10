import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const WORDS = ['Design', 'AI', 'Code', 'Building']
const TYPE_SPEED = 120
const DELETE_SPEED = 60
const PAUSE_MS = 1500

export default function TypingText() {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const word = WORDS[wordIndex]

    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, PAUSE_MS)
      return () => clearTimeout(timer)
    }

    if (!isDeleting && charIndex < word.length) {
      const timer = setTimeout(() => {
        setDisplayText(word.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
      }, TYPE_SPEED)
      return () => clearTimeout(timer)
    }

    if (!isDeleting && charIndex === word.length) {
      setIsPaused(true)
      return
    }

    if (isDeleting && charIndex > 0) {
      const timer = setTimeout(() => {
        setDisplayText(word.slice(0, charIndex - 1))
        setCharIndex(c => c - 1)
      }, DELETE_SPEED)
      return () => clearTimeout(timer)
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setWordIndex(i => (i + 1) % WORDS.length)
    }
  }, [charIndex, isDeleting, isPaused, wordIndex])

  return (
    <p className={styles.typingLine}>
      Let&apos;s talk about{' '}
      <span className={styles.typingWord}>{displayText}</span>
      <span className={styles.cursor}>|</span>
    </p>
  )
}
