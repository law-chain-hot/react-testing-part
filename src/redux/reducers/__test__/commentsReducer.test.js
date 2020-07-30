import commentsReducer from 'redux/reducers/comments'
import { SAVE_COMMENT } from 'redux/actions/types'

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }

    const newState = commentsReducer({comments: []}, action)
    expect(newState).toEqual({comments: ['New Comment']})
})

it('handles action with unknown type', () => {
    const newState = commentsReducer({comments: []}, {type: 'sdfsdf'})
    expect(newState).toEqual({comments:[]})
})