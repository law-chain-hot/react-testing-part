import { SAVE_COMMENT } from 'redux/actions/types'

export default function (
    state = {comments: []},
    action
) {
    const { type, payload } = action
    switch (type) {
        case SAVE_COMMENT: {
            return { ...state, comments: [...state.comments, payload]}
        }
        default: return state
    }
}