import { AUTH_USER, AUTH_ERROR } from './types'
import axios from 'axios'

export const signup = (formProps, callback) => async (dispatch, getState) => {
    try {
        const response = await axios.post('http://localhost:3090/signup', formProps)
        const token = response.data.token
        dispatch({
            type: AUTH_USER,
            payload: token
        })
        dispatch( {
            type: AUTH_ERROR,
            payload:''
        })
        localStorage.setItem('token', token)
        callback()
    } catch (e) {
        dispatch({
            type: AUTH_ERROR,
            payload: 'Email is in use'
        })
    }
}


export const signout = (callback) => dispatch => {
    // if user has logged out, redirect to signup
    if(!localStorage.getItem('token')) {
        callback()
    }
    localStorage.removeItem('token')
    dispatch( {
        type: AUTH_USER,
        payload:''
    })
    dispatch( {
        type: AUTH_ERROR,
        payload:''
    })
}


export const signin = (formProps, callback) => async (dispatch, getState) => {
    try {
        const response = await axios.post('http://localhost:3090/signin', formProps)
        const token = response.data.token && response.data.token
        dispatch({
            type: AUTH_USER,
            payload: token
        })
        localStorage.setItem('token', token)
        callback()
    } catch (e) {
        dispatch({
            type: AUTH_ERROR,
            payload: 'Email or password are wrong'
        })
    }
}