const resetForm = (dispatch) => () => {
    dispatch({type:'RESET_FORM'});
};

const handleInput = (dispatch) => (e) => {
        dispatch({
            type:'CHANGE_INPUT',
            payload:{[e.target.name] : e.target.value}
        });
};

const submitLogIn = (dispatch) => (id,token,name) => {
    dispatch({
        type:'LOGGEDIN',
        payload:{
            user_name:name,user_id:id,token:token
        }
    });
};

const handleErrors = (dispatch) => (type,message) => {
    dispatch({
        type:'ERROR_FORM',
        payload: {
                type:type,
                message:message
        }
    })
};

const logOut = (dispatch) => () => {
    dispatch({type:'LOGOUT'});
};


const actions = { resetForm, handleInput, submitLogIn, handleErrors, logOut };

export default actions;