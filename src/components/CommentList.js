import React from 'react'
import { connect } from 'react-redux'

const CommentList = (props) => {
    const renderComments = props.comments.map(comment => {
        return <li key={comment}>{comment}</li>
    })

    return (
        <div>
            <h4>Comments page</h4>
            <ul>
                {renderComments}
            </ul>
        </div>
    )
}

function mapStateToProps(state) {
    return { comments: state.commentsPart.comments }
}

export default connect(mapStateToProps, null)(CommentList)