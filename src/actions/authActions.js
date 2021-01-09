const resetForm = (dispatch) => () => {
    dispatch({type:'RESET_FORM'});
};

const handleInput = (dispatch) => (e) => {
        dispatch({
            type:'CHANGE_INPUT',
            payload:{[e.target.name] : e.target.value}
        });
};

const logIn = (dispatch) => () => {
    dispatch({type:'LOGIN'});
};

const submitLogIn = (dispatch) => (id,token,name) => {
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


const actions = { resetForm, handleInput, logIn, submitLogIn, logOut };

export default actions;