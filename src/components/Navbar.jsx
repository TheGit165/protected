import { Link, NavLink } from 'react-router-dom'

const Navbar = () => (
  <header className="navbar">
    <Link to="/" className="navbar-logo" aria-label="MyApp home"><span className="logo-box">M</span><span>my<span>app</span></span></Link>
    <nav className="navbar-menu" aria-label="Primary navigation">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/dashboard">Workspace</NavLink>
      <a href="#how-it-works">How it works</a>
    </nav>
    <Link to="/login" className="nav-signin">Sign in <span>→</span></Link>
  </header>
)

export default Navbar
