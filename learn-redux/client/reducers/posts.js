const initialState = [];

const postReducer = (state = initialState, action) => {
    console.log(state, action);
    return state;
};

export default postReducer;
