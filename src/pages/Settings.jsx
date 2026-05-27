import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import styles from './Settings.module.css'

function getInitials(name) {
  if (!name) return '?'
  return name.trim().split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
}

export default function Settings() {
  const navigate = useNavigate()
  const { user, setUser } = useUser()

  if (!user) {
    return (
      <div className="card">
        <div className={styles.empty}>
          <p>No account found.</p>
          <button className="btn btn-purple" style={{ marginTop: 16 }} onClick={() => navigate('/')}>
            Go Home
          </button>
        </div>
      </div>
    )
  }

  function handleLogout() {
    setUser(null)
    navigate('/')
  }

  return (
    <div className="card">
      <div className={styles.header}>
        <h2>Account Settings</h2>
      </div>

      <div className={styles.body}>
        <div className={styles.avatarRow}>
          <div className={styles.avatar}>
            <span>{getInitials(user.name)}</span>
            <div className={styles.cameraBadge}>
              <svg viewBox="0 0 24 24" width="11" height="11" stroke="#fff" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
          </div>
          <div>
            <p className={styles.profileName}>{user.name}</p>
            <p className={styles.profileEmail}>{user.email}</p>
          </div>
        </div>

        <p className={styles.bio}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod
          Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        <div className={styles.detailGrid}>
          <DetailRow label="Full Name" value={user.name} />
          <DetailRow label="Email Address" value={user.email} />
          <DetailRow label="Phone Number" value={user.phone} />
          <DetailRow label="Company" value={user.company} />
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Agency Account</span>
            <span className={user.agency === 'yes' ? styles.badgeYes : styles.badgeNo}>
              {user.agency === 'yes' ? '✓ Yes, Agency' : '✕ No'}
            </span>
          </div>
        </div>

        <button className="btn-outline" onClick={handleLogout} style={{ marginTop: 28 }}>
          Logout
        </button>
      </div>
    </div>
  )
}

function DetailRow({ label, value }) {
  return (
    <>
      <div className={styles.detailItem}>
        <span className={styles.detailLabel}>{label}</span>
        <span className={styles.detailValue}>{value || '—'}</span>
      </div>
      <div className={styles.divider} />
    </>
  )
}
