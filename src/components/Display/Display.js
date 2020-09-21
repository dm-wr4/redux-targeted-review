import React from 'react'
import User from '../User/User'
import PostsContainer from '../Posts/PostsContainer'
import './display.css'

const Display = (props) => {
  return (
    <div className="display">
      <User />

      <PostsContainer />
    </div>
  )
}
export default Display
