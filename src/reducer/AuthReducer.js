export const initialState = {
    user: {
        user_name: '',
        password: ''
    },
    connectedUser: {
        user_name:'',
        user_id:'',
        token:''
    },
    isLogged: false,
    errorMessage: {}
};

const AuthReducer = (state,action) => {
    switch(action.type){
        case 'RESET_FORM':
            return initialState;
        case 'CHANGE_INPUT':
            return {
                ...state,
                errorMessage:initialState.errorMessage,
                user: {...state.user, ...action.payload}
            };
        case 'LOGGEDIN':
            return {
                ...state,
                connectedUser: {
                    ...state.connectedUser,
                    ...action.payload
                },
                isLogged: true
            };
        case 'LOGOUT':
            return initialState;
        case 'ERROR_FORM':
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};

export default AuthReducer;