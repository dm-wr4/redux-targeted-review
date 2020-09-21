import React from 'react'
import './posts.css'

const Posts = (props) => {
  const { title, body, image_url } = props.post
  return (
    <div className="post">
      <img src={image_url} />
      <div className="post-text">
        <p className="post-title">{title}</p>
        <p className="post-body">{body}</p>
      </div>
    </div>
  )
}
export default Posts
