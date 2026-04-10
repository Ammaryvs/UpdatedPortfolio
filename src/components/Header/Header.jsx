import styles from './Header.module.css'

const navItems = [
  { label: 'About',     id: 'about'     },
  { label: 'Academics', id: 'academics' },
  { label: 'Projects',  id: 'projects'  },
  { label: 'Contact',   id: 'contact'   },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoFallback}>A</div>
        <span>Ammar</span>
      </div>

      <nav className={styles.nav}>
        {navItems.map(({ label, id }) => (
          <button key={id} className={styles.navLink} onClick={() => scrollTo(id)}>
            {label}
          </button>
        ))}
      </nav>
    </header>
  )
}
