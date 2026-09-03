import React, { useState } from 'react'
import {
  Link,
  useNavigate
} from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {

    e.preventDefault()

    if (!email || !password) {
      alert('Please enter email and password')
      return
    }

    localStorage.setItem(
      'isAuth',
      'true'
    )

    navigate('/dashboard')
  }

  return (
    <div className="login-page">

      <div className="login-bg-circle circle-one"></div>
      <div className="login-bg-circle circle-two"></div>


      <div className="login-wrapper">


        <Link
          to="/"
          className="login-brand"
        >

          <span>M</span>

          <div>
            <strong>MyApp</strong>
            <small>Platform</small>
          </div>

        </Link>


        <div className="login-card">

          <div className="login-header">

            <div className="login-icon">
              ↗
            </div>

            <h1>
              Welcome back
            </h1>

            <p>
              Sign in to continue to your account
            </p>

          </div>


          <form onSubmit={handleLogin}>

            <div className="input-group">

              <label>
                Email address
              </label>

              <div className="input-wrapper">

                <span>✉</span>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />

              </div>

            </div>


            <div className="input-group">

              <label>
                Password
              </label>

              <div className="input-wrapper">

                <span>●</span>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

              </div>

            </div>


            <div className="login-options">

              <label className="remember">

                <input
                  type="checkbox"
                />

                <span>
                  Remember me
                </span>

              </label>

              <a href="#forgot">
                Forgot password?
              </a>

            </div>


            <button
              type="submit"
              className="signin-button"
            >
              Sign In
              <span>→</span>
            </button>

          </form>


          <div className="login-divider">
            <span>SECURE LOGIN</span>
          </div>


          <Link
            to="/"
            className="back-home"
          >
            ← Back to Home
          </Link>

        </div>


        <p className="login-footer">
          © 2026 MyApp. All rights reserved.
        </p>

      </div>

    </div>
  )
}

export default Login
