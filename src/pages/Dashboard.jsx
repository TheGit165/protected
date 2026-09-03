import React from 'react'
import {
  Link,
  useNavigate
} from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()

  const logout = () => {

    localStorage.removeItem('isAuth')

    navigate('/')
  }

  return (
    <div className="dashboard">


      <aside className="sidebar">

        <Link
          to="/"
          className="dashboard-brand"
        >

          <span>M</span>

          <strong>
            MyApp
          </strong>

        </Link>


        <div className="sidebar-label">
          MAIN MENU
        </div>


        <div className="sidebar-menu">

          <Link
            to="/dashboard"
            className="sidebar-active"
          >
            <span>⌂</span>
            Overview
          </Link>

          <a href="#analytics">
            <span>◈</span>
            Analytics
          </a>

          <a href="#projects">
            <span>▣</span>
            Projects
          </a>

          <a href="#team">
            <span>♙</span>
            Team
          </a>

          <a href="#settings">
            <span>⚙</span>
            Settings
          </a>

        </div>


        <div className="sidebar-bottom">

          <div className="upgrade-card">

            <div>
              ✦
            </div>

            <strong>
              Upgrade Pro
            </strong>

            <p>
              Unlock all features
            </p>

            <button>
              Upgrade
            </button>

          </div>


          <button
            onClick={logout}
            className="logout"
          >
            <span>↪</span>
            Log out
          </button>

        </div>

      </aside>


      <main className="dashboard-main">


        <header className="dashboard-header">

          <div>

            <span className="dashboard-label">
              OVERVIEW
            </span>

            <h1>
              Good morning, User
              <span>👋</span>
            </h1>

            <p>
              Here is what's happening
              with your business today.
            </p>

          </div>


          <div className="dashboard-profile">

            <div className="notification">
              ♢
              <i></i>
            </div>

            <div className="profile-avatar">
              U
            </div>

          </div>

        </header>


        <section className="stat-grid">


          <div className="stat-card">

            <div className="stat-top">

              <span>
                TOTAL REVENUE
              </span>

              <b>
                $
              </b>

            </div>

            <strong>
              $24,850
            </strong>

            <p>
              <span>↗ 12.5%</span>
              from last month
            </p>

          </div>


          <div className="stat-card">

            <div className="stat-top">

              <span>
                TOTAL USERS
              </span>

              <b>
                ◉
              </b>

            </div>

            <strong>
              8,249
            </strong>

            <p>
              <span>↗ 8.4%</span>
              from last month
            </p>

          </div>


          <div className="stat-card">

            <div className="stat-top">

              <span>
                PROJECTS
              </span>

              <b>
                ◇
              </b>

            </div>

            <strong>
              124
            </strong>

            <p>
              <span>↗ 4.7%</span>
              from last month
            </p>

          </div>


          <div className="stat-card">

            <div className="stat-top">

              <span>
                CONVERSION
              </span>

              <b>
                %
              </b>

            </div>

            <strong>
              32.8%
            </strong>

            <p>
              <span>↗ 6.4%</span>
              from last month
            </p>

          </div>


        </section>


        <section className="dashboard-grid">


          <div className="analytics-card">

            <div className="card-heading">

              <div>

                <span>
                  PERFORMANCE
                </span>

                <h2>
                  Revenue overview
                </h2>

              </div>

              <select>
                <option>
                  Last 7 months
                </option>
                <option>
                  Last 30 days
                </option>
                <option>
                  This year
                </option>
              </select>

            </div>


            <div className="analytics-chart">

              <div className="chart-y">
                <span>$30k</span>
                <span>$20k</span>
                <span>$10k</span>
                <span>$0</span>
              </div>

              <div className="chart-area">

                <div className="chart-grid"></div>

                <div className="chart-bars">

                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>

                </div>

              </div>

            </div>


            <div className="chart-months">

              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>

            </div>

          </div>


          <div className="activity-card">

            <div className="card-heading">

              <div>

                <span>
                  ACTIVITY
                </span>

                <h2>
                  Recent activity
                </h2>

              </div>

              <a href="#all">
                View all
              </a>

            </div>


            <div className="activity-list">

              <div className="activity">

                <span className="activity-icon purple">
                  $
                </span>

                <div>
                  <strong>
                    New payment received
                  </strong>

                  <small>
                    2 minutes ago
                  </small>
                </div>

                <b>
                  +$2,450
                </b>

              </div>


              <div className="activity">

                <span className="activity-icon blue">
                  +
                </span>

                <div>
                  <strong>
                    New user registered
                  </strong>

                  <small>
                    24 minutes ago
                  </small>
                </div>

                <b>
                  +1
                </b>

              </div>


              <div className="activity">

                <span className="activity-icon green">
                  ✓
                </span>

                <div>
                  <strong>
                    Project completed
                  </strong>

                  <small>
                    1 hour ago
                  </small>
                </div>

                <b>
                  Done
                </b>

              </div>


              <div className="activity">

                <span className="activity-icon orange">
                  ★
                </span>

                <div>
                  <strong>
                    New review received
                  </strong>

                  <small>
                    3 hours ago
                  </small>
                </div>

                <b>
                  5.0
                </b>

              </div>

            </div>

          </div>


        </section>


        <section className="welcome-panel">

          <div>

            <span>
              ✦ EVERYTHING IS READY
            </span>

            <h2>
              Welcome to your
              <strong> dashboard.</strong>
            </h2>

            <p>
              Start managing your projects
              and watch your business grow.
            </p>

          </div>

          <div className="welcome-decoration">
            ✦
          </div>

        </section>


      </main>

    </div>
  )
}

export default Dashboard
