import React from 'react'
import { posts } from '../data'

const Post = () => {

    const post = posts[2]
  return (
    <div className='post'>
        <img src={post.img} alt="" className="post-img" />
        <h1 className="post-title">{post.title}</h1>
        <p className="post-desc">{post.desc}</p>
        <p className="post-long-desc">{post.longDesc}</p>
    </div>
  )
}

export default Post