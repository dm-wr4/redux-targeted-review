import React, { useState } from 'react'
import Toggle from 'react-toggle'
import useClassNames from '../../hooks/useClassNames'
import { connect } from 'react-redux'
import { toggleDarkMode } from '../../ducks/themeReducer'
import './header.css'
import 'react-toggle/style.css'

/* 
  TODO DISPLAY FORM IF LOGGED OUT DISPLAY LOGOUT BUTTON IF LOGGED IN
*/

const Header = (props) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  const classNames = useClassNames(props.isDarkMode)

  const handleLogin = (e) => {
    e.preventDefault()
    console.dir(e.target)
  }
  return (
    <div className={classNames.header.header}>
      <h1>FaceTweet</h1>
      <label className="toggle" htmlFor="dark-mode-toggle">
        <Toggle
          onChange={(e) => props.toggleDarkMode(e.target.checked)}
          id="dark-mode-toggle"
        />
        <span>Dark mode</span>
      </label>
      <form onSubmit={handleLogin} className="login-form">
        <input
          placeholder="Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          className={classNames.header.input}
        />
        <input
          placeholder="Image"
          name="image"
          onChange={(e) => setImage(e.target.value)}
          className={classNames.header.input}
        />
        <button className={classNames.header.button} type="submit">
          Login
        </button>
      </form>
      <button className={classNames.header.button}>Logout</button>
    </div>
  )
}

const mapStateToProps = (reduxState) => reduxState.theme

export default connect(mapStateToProps, { toggleDarkMode })(Header)
