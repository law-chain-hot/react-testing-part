import { combineReducers } from 'redux'
import commentsReducer from 'redux/reducers/comments'

export default combineReducers({
    commentsPart: commentsReducer
})
