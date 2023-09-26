const CommentList = ({comments}) => {
    const renderedComment = comments.map((comment)=>{
        return ( 
        <li key={comment.id} className='bg-slate-300'>
            {comment.content}
        </li>
        )
    })
    return(
        <ul>
            {renderedComment}
        </ul>
    )
}
export default CommentList

//  ----------------->
// OLDER CODE with dependency on each seperate service
// import {useEffect, useState} from 'react'

// import axios from 'axios'

// const CommentList = ({comments}) => {
    // const [comments,setComments] = useState([])
    
    // const fetchCommentById = async () => {
    //     const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
    //     setComments(res.data)
    //     console.log('res--- ',res)
    //     console.log('res data--- ',res.data)
    // }
    
    // useEffect(()=>{
    //     fetchCommentById()
    // },[])
    
//     const renderedComment = comments.map((comment)=>{
        // console.log('comment - ', comment)
//         return ( 
//         <li key={comment.id} className='bg-slate-300'>
//             {comment.content}
//         </li>
//         )
//     })
//     return(
//         <ul>
//             {renderedComment}
//         </ul>
//     )
// }

// export default CommentList