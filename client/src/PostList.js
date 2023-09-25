import {useEffect, useState} from 'react'

import CommentCreate from './CommentCreate'
import CommentList from './CommentList'
import axios from 'axios'

const PostList = () => {

    const [posts, setPosts] = useState({})

    useEffect(()=>{
        const fetchPosts = async () => { 
            const res = await axios.get('http://localhost:4000/posts') 
            setPosts(res.data)
        }
        fetchPosts()
    },[])
    console.log(posts)

    const renduredPosts = Object.values(posts).map((post)=>{
        return(
            <div key={post.id} className=''>
                <h1>Post no : {post.id }</h1>
                <div className="w-3/12  bg-black h-[auto] m-10      " >
                    <div className='w-full bg-slate-600 border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 text-center text-purple-200  '>
                        {post.id}
                    </div>

                    <div className='w-full border-b-2 bg-zinc-800 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 text-center text-rose-300'>
                        {post.title}
                    </div>

                    <div>
                        <CommentList postId={post.id}/>
                        <CommentCreate postId={post.id}/>
                    </div>
                </div>
 
            </div>
        )
    })



    return(
        <div>
            {renduredPosts}
        </div>
    )
}

export default PostList