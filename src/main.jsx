import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Protected from './components/Protected.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: 'dashboard',
        element: (
          <Protected>
            <Dashboard />
          </Protected>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
