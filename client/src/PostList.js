import {useEffect, useState} from 'react'

import CommentCreate from './CommentCreate'
import CommentList from './CommentList'
import axios from 'axios'

const PostList = () => {

    const [posts, setPosts] = useState({})

    useEffect(()=>{
        const fetchPosts = async () => { 
            // const res = await axios.get('http://localhost:4000/posts') 
            const res = await axios.get('http://posts.com/posts')
            // console.log('data- ', res.data)
            setPosts(res.data)
        }
        fetchPosts()
    },[])
    // console.log(posts)

    const renduredPosts = Object.values(posts).map((post)=>{
        return(
            <div key={post.id} className='min-h-[50%]  w-3/12 ' >
                <h1>Post no : {post.id }</h1>
                <div className="   bg-black  m-10   min-h-full  h-[300px] " >
                    <div className='w-full bg-slate-600 border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 text-center text-purple-200  '>
                        {post.id}
                    </div>

                    <div className='w-full border-b-2 bg-zinc-800 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 text-center text-rose-300'>
                        {post.title}
                    </div>

                    <div>
                        <CommentList comments={post.comments}/>
                        <CommentCreate postId={post.id}/>
                    </div>
                </div>
 
            </div>
        )
    })



    return(
        <div className='flex'>
            {renduredPosts}
        </div>
    )
}

export default PostList