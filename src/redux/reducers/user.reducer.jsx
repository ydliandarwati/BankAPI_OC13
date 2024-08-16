import { GET_USERPROFILE, EDIT_FIRSTNAME, EDIT_LASTNAME, LOGOUT } from "../actions/type.actions"

/* Initial user state */
const initialState = {
    status: 'VOID',
    userData: {}
}

export const userReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_USERPROFILE:
            return {
                ...state,
                status: 'SUCCEEDED',
                userData: action.payload
            }
        case EDIT_FIRSTNAME: 
            return {
                ...state,
                status: "MODIFIED",
                userData: {
                    ...state.userData,
                    firstname: action.payload
                } 
            } 
		case EDIT_LASTNAME: 
            return {
                ...state,
                status: "MODIFIED",
                userData: {
                    ...state.userData,
                    lastname: action.payload
                } 
            } 
        case LOGOUT: {
            return initialState;  
        }   
        default:
            return state;    
    }
}

        