import { useEffect, useState } from "react"

import axios from "axios"

const CommentCreate = ({postId}) => {
    const [content, setContent] = useState('')
    
    useEffect(()=>{},[])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {content})
        setContent('')
    }

    
    return (
        <form className="mt-8 space-y-6" action="#" onSubmit={handleSubmit} >
                    
                    <div className="rounded-md shadow-sm -space-y-px">
                    <h1 className="text-rose-200 mb-2">NEW COMMENT:</h1>
                    <div>
                        <label htmlFor="password" className="sr-only">
                        Title
                        </label>
                        <input
                        id="create-comment-title"
                        name="create-comment-title"
                        type="create-comment-title"
                        required
                        
                        onChange={(e) => { setContent(e.target.value) } }
                        className="appearance-none rounded-none relative block
                        w-6/12 px-3 py-2 border border-gray-300
                        placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md
                        focus:outline-none focus:ring-indigo-500
                        focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Comment"
                        />
                    </div>
                    </div>

                     

                    <div>
                    <button
                         className="group relative w-6/12 flex justify-center
                        py-2 px-4 border border-transparent text-sm font-medium
                        rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-indigo-500"
                        
                    >
                      Create Comment!
                    </button>
                    </div>
                    <div className='flex justify-center '>
                        <span className='title text-lg items-center text-cyan-600'>
                            { content}
                        </span>
                    </div>
                </form>
    )
}


export default CommentCreate