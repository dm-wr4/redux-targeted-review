import React, { useState } from 'react'
import Toggle from 'react-toggle'
import './header.css'
import 'react-toggle/style.css'

/* 
  TODO DISPLAY FORM IF LOGGED OUT DISPLAY LOGOUT BUTTON IF LOGGED IN
*/

const Header = (props) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.dir(e.target)
  }
  return (
    <div className="header">
      <h1>FaceTweet</h1>
      <label className="toggle" htmlFor="dark-mode-toggle">
        <Toggle id="dark-mode-toggle" />
        <span>Dark mode</span>
      </label>
      <form onSubmit={handleLogin} className="login-form">
        <input
          placeholder="Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Image"
          name="image"
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button>Logout</button>
    </div>
  )
}
export default Header
