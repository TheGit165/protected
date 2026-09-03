import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <div className="home-page">

      <Navbar />

      <main className="hero">

        <div className="hero-badge">
          ✦ WELCOME TO MYAPP
        </div>

        <h1>
          Build your
          <span> future today.</span>
        </h1>

        <p>
          A modern platform to manage your projects,
          track your progress and grow your business.
        </p>

        <div className="hero-buttons">

          <Link
            to="/dashboard"
            className="hero-btn"
          >
            Open Dashboard
            <span>→</span>
          </Link>

          <Link
            to="/login"
            className="hero-btn-outline"
          >
            Sign In
          </Link>

        </div>

      </main>

    </div>
  )
}

export default App
