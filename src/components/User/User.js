import React from 'react'
import useClassNames from '../../hooks/useClassNames'
import './user.css'

// TODO FILL IN USER INFORMATION FROM REDUX

const User = (props) => {
  const classNames = useClassNames(false)

  return <div className={classNames.user.user}></div>
}
export default User
