import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const CHARS = ['%', '&', '!', '+', '.', '#', '*', '~', '^', '@', '$']
const FONT_SIZE = 14
const INTERVAL_MS = 150

export default function CharacterRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let drops = []
    let timer = null

    const init = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const cols = Math.floor(canvas.width / FONT_SIZE)
      drops = Array.from({ length: cols }, () => Math.random() * -canvas.height)
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(26, 26, 26, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = 'rgba(160, 160, 160, 0.18)'
      ctx.font = `${FONT_SIZE}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        ctx.fillText(char, i * FONT_SIZE, drops[i])
        drops[i] += FONT_SIZE
        if (drops[i] > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
      }

      timer = setTimeout(draw, INTERVAL_MS)
    }

    const handleResize = () => {
      init()
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    init()
    draw()
    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.rain} />
}
