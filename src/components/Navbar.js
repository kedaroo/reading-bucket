import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {

  const { logout } = useLogout()
  const { user } = useAuthContext()



  return (
    <nav>
      <h1>my reading bucket list</h1>
      <ul>
        {user ? 
          <>
            <li><Link to="/">Home</Link></li>
            <li onClick={logout}>Logout</li> 
          </>
          :
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        }
      </ul>
    </nav>
  )
}
