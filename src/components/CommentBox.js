import React, { useState } from 'react'
import { connect } from 'react-redux'

import * as actions from 'redux/actions'
import requireAuth from 'components/requireAuth'



const CommentBox = (props) => {
    const [comment, setComment] = useState('')



    const handleChange = event => {
        setComment(event.target.value)
    }

 

    const handleSubmit = event => {
        event.preventDefault()

        // TODO - Call an action creator
        props.saveComment(comment)
        // props.test(comment)
        setComment('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Add a comment</h4>
                <textarea onChange={handleChange} value={comment} />
                <div>Current comment is: {comment}</div>
                <div>
                    <button>Submit a comment</button>
                </div>
            </form>
            <button className='fetch-comments' onClick={props.fetchComments}>
                Fetch comments
            </button>
        </div>
    )
}



export default connect(null, actions)(requireAuth(CommentBox))





// const mapDispatchToProps = (dispatch) => {
//     return {
//         test: (comment) => {
//             dispatch(saveComment(comment))
//         }
//     }
// }
// export default connect(null, mapDispatchToProps)(CommentBox)



