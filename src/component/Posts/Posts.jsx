import React, { useEffect, useState } from 'react'
import Post from '../Post/Post';
import './posts.css'

function Posts() {

    const postsUrl = 'https://dummyjson.com/posts'
    const [allPost, setAllPosts] = useState([]);
    const {posts} = allPost;

    useEffect(() => {
        fetch(postsUrl)
            .then((res) => res.json())
            .then((data) => setAllPosts(data))
    },[]);
  return (
    <div className='posts'>
        {
            posts?.map((post) => <Post post={post} key={post.id}/>)
        }
    </div>
  )
}

export default Posts;