import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import commentReducer from 'redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import stateValidator from 'middleware/stateValidator'



export default ({ children, initialState = {} }) => {

    const store = createStore(
        commentReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(reduxPromise, stateValidator)
        )
    ) // second one is the init state

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
