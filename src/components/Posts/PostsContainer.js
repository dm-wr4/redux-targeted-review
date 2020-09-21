import React, { useState, useEffect } from 'react'
import Post from './Post'
import './posts.css'
import axios from 'axios'

const PostsContainer = (props) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((postsRes) => {
      axios
        .get('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then((photosRes) => {
          setPosts(formatPosts(postsRes.data, photosRes.data))
        })
    })
  }, [])
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
export default PostsContainer

function formatPosts(posts, photos) {
  return posts.slice(0, photos.length - 1).reduce((acc, post) => {
    const photo = photos.find((photo) => post.id === photo.id)
    post.image_url = photo.thumbnailUrl
    acc.push(post)
    return acc
  }, [])
}
