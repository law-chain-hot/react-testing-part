import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import commentReducer from 'redux/reducers'


const store = createStore(commentReducer) // second one is the init state

export default props => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}
