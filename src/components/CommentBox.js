import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { saveComment } from 'redux/actions'
import * as actions from 'redux/actions'


const CommentBox = (props) => {
    const [comment, setComment] = useState('')

    const handleChange = event => {
        setComment(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()

        // TODO - Call an action creator
        // And save the comment
        // console.log(props)
        // console.log(props.saveComment(comment))
        setComment('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Add a comment</h4>
            <textarea onChange={handleChange} value={comment} />
            <div>Current comment is: {comment}</div>
            <div>
                <button>Submit a comment</button>
            </div>
        </form>
    )
}

// const mapDispatchToProps = function (dispatch, ownProps) {
//     return {
//         saveComment: () => dispatch(saveComment)
//     }
// }


export default connect(null, actions)(CommentBox)



// function mapDispatchToProps(dispatch, ownProps) {
//     return {
//         // 执行dispatch函数
//         onChange: (e) => {
//             dispatch({
//                 type: 'change',
//                 payload: e.target.value
//             })
//         }
//     }
// }