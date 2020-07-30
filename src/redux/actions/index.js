import { SAVE_COMMENT } from 'redux/actions/types'

export const saveComment = comment => (
    {
        type: SAVE_COMMENT, 
        payload: comment
    }
)