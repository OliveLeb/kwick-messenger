export const initialState = {
    messages: [],
    users: [],
    message: {
        user_id:'',
        content:''
    },
    isLoading: false
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
        default: 
            return state;
    }

};

export default DataReducer;