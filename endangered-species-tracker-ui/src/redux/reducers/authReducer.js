export default function authReducer(state = {
    loggedIn: false,
    currentUser: {}, 
    errors: ''
}, action) {
    switch(action.type) {
        case 'AUTH_SUCCESS': 
            return {
                ...state, 
                loggedIn: action.payload.loggedIn, 
                currentUser: action.payload.currentUser, 
                errors: ''
            }
        case 'AUTH_FAILURE':
            return {
                ...state, 
                loggedIn: action.payload.loggedIn,
                currentUser: {},
                errors: action.payload.error
            }
        case 'LOGOUT':
            return {
                ...state, 
                loggedIn: false, 
                currentUser: {},
                errors: ''
            }

        default: 
        return state;
    }
}