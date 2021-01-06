const handleInput = (dispatch) => (e) => {
        dispatch({
            type:'CHANGE_INPUT',
            payload:{[e.target.name] : e.target.value}
        });
};

const logIn = (dispatch) => () => {
    dispatch({type:'LOGIN'});
};

const submitRegister = (dispatch) => (e) => {
    e.preventDefault();
    console.log('register');
};

const submitLogIn = (dispatch) => ({id,token},name) => {
    dispatch({
        type:'LOGGEDIN',
        payload:{
            user_name:name,user_id:id,token:token
        }
    });
};

const logOut = (dispatch) => () => {
    dispatch({type:'LOGOUT'});
};

const actions = { handleInput, logIn, submitRegister, submitLogIn, logOut };

export default actions;