import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
  return (
    <div className='navbar' >
        <span className="logo">
          <Link className='link' to="/">Social Logins App</Link>
        </span>

        {user ? (
        <ul className="list">
            <li className="listItem">
                <img src="https://i.imgur.com/BOLWDJI.png" alt="user avatar" className="avatar" />
            </li>
            <li className="listItem">David Amebley</li>
            <li className="listItem">Logout</li>
        </ul>
        ) : 
        (<Link className='link' to="login">Login</Link>)
      }
    </div>
  )
}

export default Navbar