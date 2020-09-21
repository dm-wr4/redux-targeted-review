import React from 'react'
import User from '../User/User'
import PostsContainer from '../Posts/PostsContainer'
import useClassNames from '../../hooks/useClassNames'
import { connect } from 'react-redux'
import './display.css'

const Display = (props) => {
  const classNames = useClassNames(props.isDarkMode)

  return (
    <div className={classNames.display.display}>
      <User />

      <PostsContainer />
    </div>
  )
}

const mapStateToProps = (reduxState) => reduxState.theme

export default connect(mapStateToProps)(Display)
