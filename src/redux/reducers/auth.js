import { CHANGE_AUTH } from 'redux/actions/types'

export default function(state=false, action){
    const {type, payload} = action
    
    switch(type){
        case CHANGE_AUTH  : return payload
        default           : return state
    }
}