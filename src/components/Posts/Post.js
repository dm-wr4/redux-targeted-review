import React from 'react'
import useClassNames from '../../hooks/useClassNames'
import { useSelector } from 'react-redux'
import './posts.css'

const Posts = (props) => {
  const { title, body, image_url } = props.post
  const isDarkMode = useSelector((reduxState) => reduxState.theme.isDarkMode)
  const classNames = useClassNames(isDarkMode)
  return (
    <div className={classNames.posts.post}>
      <img src={image_url} alt={title} />
      <div className={classNames.posts.postText}>
        <p className={classNames.posts.postTitle}>{title}</p>
        <p className="post-body">{body}</p>
      </div>
    </div>
  )
}
export default Posts
