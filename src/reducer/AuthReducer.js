export const initialState = {
    user: {
        user_name: '',
        password: ''
    },
    connectedUser: {
        user_name:'',
        user_id:0,
        token:''
    },
    isLogged: false

};

const AuthReducer = (state,action) => {
    switch(action.type){
        case 'CHANGE_INPUT':
            return {
                ...state,
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
        default:
            return state;
    }
};

export default AuthReducer;