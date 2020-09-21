import React from 'react'
import User from '../User/User'
import PostsContainer from '../Posts/PostsContainer'
import useClassNames from '../../hooks/useClassNames'
import './display.css'

const Display = (props) => {
  const classNames = useClassNames(false)

  return (
    <div className={classNames.display.display}>
      <User />

      <PostsContainer />
    </div>
  )
}
export default Display
