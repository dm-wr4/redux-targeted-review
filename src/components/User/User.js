import React from 'react'
import useClassNames from '../../hooks/useClassNames'
import { useSelector } from 'react-redux'
import './user.css'

// TODO FILL IN USER INFORMATION FROM REDUX

const User = (props) => {
  const isDarkMode = useSelector((reduxStore) => reduxStore.theme.isDarkMode)
  const user = useSelector((reduxStore) => reduxStore.auth)

  const classNames = useClassNames(isDarkMode)

  return (
    <div className={classNames.user.user}>
      <img src={user.image} className="user-image" />
      <p>{user.name}</p>
    </div>
  )
}
export default User
