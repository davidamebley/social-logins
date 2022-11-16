import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar' >
        <span className="logo">Social Logins App</span>
        <ul className="list">
            <li className="listItem">
                <img src="https://i.imgur.com/BOLWDJI.png" alt="user avatar" className="avatar" />
            </li>
            <li className="listItem">David Amebley</li>
            <li className="listItem">Logout</li>
        </ul>
    </div>
  )
}

export default Navbar