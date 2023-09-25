import React, {useState} from 'react';

import axios from 'axios';

const PostCreate = () => {
    const [title, setTitle] = useState('Title')
    const handleSubmit = async (e) => {
       e.preventDefault();
       alert("Submitting...")
       await axios.post('http://localhost:4000/posts', {title})
       setTitle('New Title')
    }
    return(
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create Post!</h2>
                </div>
                <form className="mt-8 space-y-6" action="#" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="password" className="sr-only">
                        Title
                        </label>
                        <input
                        id="create-post-title"
                        name="create-post-title"
                        type="create-post-title"
                        required
                        value={title}
                        onChange={(e) => {setTitle(e.target.value)} }
                        className="appearance-none rounded-none relative block
                        w-full px-3 py-2 border border-gray-300
                        placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md
                        focus:outline-none focus:ring-indigo-500
                        focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Title"
                        />
                    </div>
                    </div>

                     

                    <div>
                    <button
                         className="group relative w-full flex justify-center
                        py-2 px-4 border border-transparent text-sm font-medium
                        rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-indigo-500"
                        
                    >
                      Create Post!
                    </button>
                    </div>
                    <div className='flex justify-center '>
                        <span className='title text-lg items-center text-cyan-600'>
                            {title}
                        </span>
                    </div>
                </form>
            </div>
      </div>
    )
}

export default PostCreate