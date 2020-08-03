import { combineReducers } from 'redux'
import commentsReducer from 'redux/reducers/comments'
import authReducer from 'redux/reducers/auth'


export default combineReducers({
    commentsPart: commentsReducer,
    auth: authReducer
})
