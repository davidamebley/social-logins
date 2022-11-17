import React from 'react'
import { useLocation } from 'react-router-dom'
import { posts } from '../data'

const Post = () => {
const location = useLocation();
const path = location.pathname.split('/')[2];   //path/post/id  'id' is index 2

const post = posts.find((p) => p.id.toString() === path);   // find the post whose id matches

console.log(location)
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