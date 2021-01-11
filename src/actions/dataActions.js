const refresh = (dispatch) => () => {
        dispatch({type:'REFRESH'});
};

const handleInput = (dispatch) => (id) => (e) => {
    dispatch({
            type:'WRITE_MESSAGE',
            payload: {
                user_id: id,
                content: e.target.value
            }
        })
};

const defineTmpLimit = (dispatch) => (e) => {
    dispatch({
        type: 'DEFINE_TMP_LIMIT',
        payload: e.target.value
    });
};

const actions = { refresh, handleInput, defineTmpLimit };
export default actions;