import { 
    LOGIN,
    SET_USERNAME,
    MESSAGE,
    LOADING, 
} from "../action/authActionType"

const authReducer = (state,action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, isLogged: action.payload}
        case SET_USERNAME:
            return {...state, username:{name:action.payload.name, id:action.payload.id} }
        case MESSAGE:
            return {...state, message: action.payload}
        case LOADING:
            return {...state, isLoading: action.payload}
    
        default:
            return state
    }
}

export default authReducer