import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import styles from './Form.module.css'

export default function Login() {
  const navigate = useNavigate()
  const { setUser } = useUser()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleLogin(e) {
    e.preventDefault()
    if (!email) { setError('Please enter your email.'); return }
    if (!password) { setError('Please enter your password.'); return }
    setError('')
    setUser(prev => ({
      name: prev?.name || 'User',
      email,
      phone: prev?.phone || '—',
      company: prev?.company || '—',
      agency: prev?.agency || 'no',
    }))
    navigate('/settings')
  }

  return (
    <div className="card">
      <div className={styles.formCard}>
        <Link to="/" className="back-link">
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
          Back
        </Link>
        <h2>Sign in to your<br />PopX account</h2>
        <p className={styles.sub}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <form onSubmit={handleLogin} noValidate>
          <div className="field-wrap">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="field-wrap">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button
            type="submit"
            className={`btn ${email && password ? 'btn-purple' : 'btn-grey'}`}
            style={{ marginTop: 8 }}
          >
            Login
          </button>
        </form>

        <p className="switch-link">
          Don't have an account? <Link to="/register">Create one</Link>
        </p>
      </div>
    </div>
  )
}
