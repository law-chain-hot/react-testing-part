import React, {useState, useEffect} from 'react'

const CommentList = () =>{
    const [comment, setComment] = useState('')

    const handleChange = event => {
        setComment(event.target.value)
    }
    
    const handleSubmit = event => {
        event.preventDefault()

        // TODO - Call an action creator
        // And save the comment
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Add a comment</h4>
            <textarea onChange={handleChange} value={comment}/>
            <div>Current comment is: {comment}</div>
            <div>
                <button>Submit a comment</button>
            </div>
        </form>
    )
}

export default CommentList