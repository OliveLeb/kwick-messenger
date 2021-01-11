export const initialState = {
    messages: [],
    users: [],
    message: {
        user_id:'',
        content:''
    },
    isLoading: false,
    isRefreshing: false,
    fetchSinceTimestamp:21600000
}

const DataReducer = (state,action) => {
    switch(action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                ...action.payload
            };
        case 'WRITE_MESSAGE':
            return {
                ...state,
                message: {...action.payload}
            }
        case 'REFRESH':
            return {
                ...state,
                isRefreshing: !state.isRefreshing
            }
        case 'DEFINE_TMP_LIMIT':
            return {
                ...state,
                fetchSinceTimestamp: action.payload
            };
        default: 
            return state;
    }

};

export default DataReducer;