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

const sendMessage = (dispatch) => (message) => {
    dispatch({
        type:'MESSAGE_SENT',
        payload:message
    })
};


const initFetching = (dispatch) => () => {
    dispatch({type:'FETCHING_DATA'})
};

const fetchData = (dispatch) => (loggedUsers,messagesSent) => {
    dispatch({
                type:'FETCHED_DATA',
                payload: {
                    users: loggedUsers.data.result.user.map(user => user),
                    messages: messagesSent.data.result.talk.sort((a,b)=> b.timestamp - a.timestamp).map(message => message)
                }
            })
};

const actions = { refresh, handleInput, defineTmpLimit, sendMessage, initFetching, fetchData };
export default actions;