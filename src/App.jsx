import { Link } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

const highlights = [
  ['24.8k', 'Revenue tracked this month'],
  ['8,249', 'People building with MyApp'],
  ['99.9%', 'Platform uptime, always on'],
]

const App = () => (
  <div className="site-shell">
    <Navbar />
    <main>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span>✦</span> A BETTER WAY TO BUILD</p>
          <h1 id="hero-title">Make your next<br /><em>move matter.</em></h1>
          <p className="hero-description">A thoughtful workspace for ambitious teams to plan, ship, and learn together — without the clutter.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/dashboard">Explore your workspace <span>→</span></Link>
            <Link className="button button-quiet" to="/login">Sign in</Link>
          </div>
          <div className="trust-row"><span className="avatar-stack"><i>J</i><i>M</i><i>A</i></span><span>Trusted by <strong>2,000+ teams</strong> doing meaningful work.</span></div>
        </div>
        <div className="hero-visual" aria-label="A preview of the MyApp dashboard">
          <div className="orb orb-large" /><div className="orb orb-small" />
          <div className="preview-window">
            <div className="preview-topbar"><span className="window-dots"><i /><i /><i /></span><span>myapp.workspace</span><b>•••</b></div>
            <div className="preview-body">
              <aside><div className="preview-mark">M</div><i className="selected" /><i /><i /><i /><span /></aside>
              <div className="preview-content">
                <div className="preview-greeting"><div><small>WEDNESDAY, OCT 16</small><strong>Good morning, Maya <span>✦</span></strong></div><i /></div>
                <div className="mini-stats"><div><small>ACTIVE PROJECTS</small><b>12</b><em>↗ 8.2%</em></div><div><small>TEAM VELOCITY</small><b>86%</b><em>↗ 12.4%</em></div></div>
                <div className="preview-chart"><div className="chart-title"><span><small>OVERVIEW</small><b>Team momentum</b></span><small>LAST 6 MONTHS⌄</small></div><div className="bars"><i /><i /><i /><i /><i /><i /><i /></div><div className="bar-labels"><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span></div></div>
              </div>
            </div>
          </div>
          <div className="floating-note"><span>✓</span><div><b>Milestone reached</b><small>Launch prep complete</small></div></div>
        </div>
      </section>
      <section className="proof-section" aria-label="Platform statistics">
        {highlights.map(([number, label]) => <div key={number}><strong>{number}</strong><span>{label}</span></div>)}
      </section>
    </main>
  </div>
)

export default App
