import axios from 'axios';

let initialState = {
    user:{
        isLoggin: false
    }
}


const GET_USER_SESSION = 'SET_USER_SESSION';
const SET_USER = 'GET_USER';
const LOGOUT = 'LOGOUT';

export const getUserSession = () => {
    const user = axios.get('/auth/session')
        console.log('session', user)
    return {
        type: GET_USER_SESSION,
        payload: user
    }
}

export const setUser = (obj) => {
    console.log('user', obj)
    return {
        type: SET_USER,
        payload: obj
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        payload: {isLoggin: false}
    }
}

export default function reducer (state = initialState, action){
    const { type, payload } = action
    console.log(action)
    switch(type){
        case GET_USER_SESSION + '_PENDING':
            return {...state, user: {isLoggin: false}};
        case GET_USER_SESSION + '_FULFILLED':
            return {...state, user: {...payload.data, isLoggin: true}};
        case GET_USER_SESSION + '_REJECTED':
            return {...state, user: {isLoggin: false}};
        case SET_USER:
            return {...state, user: {...payload, isLoggin: true}};
        case LOGOUT:
            return {...state, user: {isLoggin: false}}
        default:
            return state
    }

}