import React from 'react'
import User from '../User/User'
import './display.css'

const Display = (props) => {
  return (
    <div className="display">
      <div className="posts-container">
        <User />
      </div>
    </div>
  )
}
export default Display
