import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    if (!email.trim() || !password) {
      setError('Enter both your email address and password to continue.')
      return
    }
    localStorage.setItem('isAuth', 'true')
    navigate('/dashboard')
  }

  return <main className="auth-page">
    <div className="auth-art"><Link to="/" className="navbar-logo"><span className="logo-box">M</span><span>my<span>app</span></span></Link><div className="auth-quote"><span>“</span><p>One calm place for all the work that moves your team forward.</p><small>MYAPP WORKSPACE</small></div><div className="auth-shape shape-one" /><div className="auth-shape shape-two" /></div>
    <section className="auth-panel" aria-labelledby="login-title"><Link to="/" className="back-link">← Back to home</Link><div className="auth-form-wrap"><p className="eyebrow">WELCOME BACK</p><h1 id="login-title">Sign in to your<br />workspace.</h1><p className="auth-intro">Enter your details to pick up where you left off.</p><form onSubmit={handleLogin} noValidate><label>Email address<input type="email" autoComplete="email" placeholder="you@company.com" value={email} onChange={(event) => { setEmail(event.target.value); setError('') }} aria-invalid={Boolean(error)} /></label><label>Password<span className="label-action">Forgot password?</span><input type="password" autoComplete="current-password" placeholder="Enter your password" value={password} onChange={(event) => { setPassword(event.target.value); setError('') }} aria-invalid={Boolean(error)} /></label>{error && <p className="form-error" role="alert">{error}</p>}<div className="remember-row"><label className="checkbox-label"><input type="checkbox" /> <span>Remember me for 30 days</span></label></div><button className="button button-primary auth-submit" type="submit">Sign in <span>→</span></button></form><p className="secure-note">⌁ Secure, encrypted access to your workspace</p></div></section>
  </main>
}

export default Login
