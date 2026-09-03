import { Navigate } from 'react-router-dom'

const Protected = ({ children }) => {

  const isAuth =
    localStorage.getItem('isAuth')

  if (!isAuth) {
    return (
      <Navigate
        to="/login"
        replace
      />
    )
  }

  return children
}

export default Protected
