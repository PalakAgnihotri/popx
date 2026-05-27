import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="card">
      <div className={styles.heroUpper}>
        <div className={styles.bubble} style={{ width: 180, height: 180, top: -40, left: -40, opacity: 0.12 }} />
        <div className={styles.bubble} style={{ width: 120, height: 120, top: 30, right: -20, opacity: 0.10 }} />
        <div className={styles.bubble} style={{ width: 80, height: 80, bottom: 40, left: 60, opacity: 0.10 }} />
        <div className={styles.bubble} style={{ width: 50, height: 50, top: 80, left: 140, opacity: 0.13 }} />
        <div className={styles.bubble} style={{ width: 60, height: 60, bottom: 20, right: 60, opacity: 0.10 }} />
        <div className={styles.bubble} style={{ width: 35, height: 35, top: 160, right: 30, opacity: 0.12, background: '#7c4de8' }} />
        <div className={styles.bubble} style={{ width: 100, height: 100, top: 100, left: 20, opacity: 0.07, background: '#5b3fd4' }} />
      </div>
      <div className={styles.heroLower}>
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="btn btn-purple" onClick={() => navigate('/register')}>
          Create Account
        </button>
        <button className="btn btn-pink" style={{ marginTop: 10 }} onClick={() => navigate('/login')}>
          Already Registered? Login
        </button>
      </div>
    </div>
  )
}
