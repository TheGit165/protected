import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="navbar">

      <Link to="/" className="navbar-logo">
        <div className="logo-box">
          M
        </div>

        <div className="logo-text">
          My<span>App</span>
        </div>
      </Link>

      <nav className="navbar-menu">

        <Link to="/">
          Home
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

      </nav>

      <Link
        to="/login"
        className="navbar-login"
      >
        Sign In
        <span>→</span>
      </Link>

    </header>
  )
}

export default Navbar
