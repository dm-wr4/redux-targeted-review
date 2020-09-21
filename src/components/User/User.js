import React from 'react'
import useClassNames from '../../hooks/useClassNames'
import { useSelector } from 'react-redux'
import './user.css'

// TODO FILL IN USER INFORMATION FROM REDUX

const User = (props) => {
  const isDarkMode = useSelector((reduxState) => reduxState.theme.isDarkMode)

  const classNames = useClassNames(isDarkMode)

  return <div className={classNames.user.user}></div>
}
export default User
