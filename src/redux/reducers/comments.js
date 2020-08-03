import { SAVE_COMMENT, FETCH_COMMENTS } from 'redux/actions/types'

export default function (state = {comments: []}, action) {
    const { type, payload } = action
    
    switch (type) {
        case SAVE_COMMENT: {
            return { ...state, comments: [...state.comments, payload]}
        }
        case FETCH_COMMENTS: {
            // console.log('payload')
            debugger
            const fetchedComments = payload.data.map(comment => comment.name)
            return {...state, comments: [...state.comments, ...fetchedComments]}
        }
        default: return state
    }
}