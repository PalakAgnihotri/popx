import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import styles from './Form.module.css'

export default function Register() {
  const navigate = useNavigate()
  const { setUser } = useUser()
  const [form, setForm] = useState({
    name: '', phone: '', email: '', password: '', company: '', agency: 'yes',
  })
  const [error, setError] = useState('')

  function update(field) {
    return e => setForm(prev => ({ ...prev, [field]: e.target.value }))
  }

  function handleRegister(e) {
    e.preventDefault()
    if (!form.name) { setError('Full name is required.'); return }
    if (!form.email) { setError('Email address is required.'); return }
    if (!form.password) { setError('Password is required.'); return }
    if (!form.phone) { setError('Phone number is required.'); return }
    setError('')
    setUser({
      name: form.name,
      phone: form.phone,
      email: form.email,
      company: form.company || '—',
      agency: form.agency,
    })
    navigate('/settings')
  }

  return (
    <div className="card">
      <div className={styles.formCard}>
        <Link to="/" className="back-link">
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
          Back
        </Link>
        <h2>Create your<br />PopX account</h2>
        <p className={styles.sub}>Fill in the details below to get started.</p>

        <form onSubmit={handleRegister} noValidate>
          <div className="field-wrap">
            <label>Full Name *</label>
            <input type="text" placeholder="Enter full name" value={form.name} onChange={update('name')} />
          </div>
          <div className="field-wrap">
            <label>Phone Number *</label>
            <input type="tel" placeholder="Enter phone number" value={form.phone} onChange={update('phone')} />
          </div>
          <div className="field-wrap">
            <label>Email Address *</label>
            <input type="email" placeholder="Enter email address" value={form.email} onChange={update('email')} />
          </div>
          <div className="field-wrap">
            <label>Password *</label>
            <input type="password" placeholder="Create a password" value={form.password} onChange={update('password')} />
          </div>
          <div className="field-wrap">
            <label>Company Name</label>
            <input type="text" placeholder="Enter company name" value={form.company} onChange={update('company')} />
          </div>

          <p className="radio-q">Are you an Agency? *</p>
          <div className="radio-row">
            <label>
              <input type="radio" name="agency" value="yes" checked={form.agency === 'yes'} onChange={update('agency')} />
              Yes
            </label>
            <label>
              <input type="radio" name="agency" value="no" checked={form.agency === 'no'} onChange={update('agency')} />
              No
            </label>
          </div>

          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className="btn btn-purple">Create Account</button>
        </form>

        <p className="switch-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
