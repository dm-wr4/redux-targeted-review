import React from 'react'
import useClassNames from '../../hooks/useClassNames'
import './posts.css'

const Posts = (props) => {
  const { title, body, image_url } = props.post
  const classNames = useClassNames(false)
  return (
    <div className={classNames.posts.post}>
      <img src={image_url} />
      <div className={classNames.posts.postText}>
        <p className={classNames.posts.postTitle}>{title}</p>
        <p className="post-body">{body}</p>
      </div>
    </div>
  )
}
export default Posts
