const initialState = [];

const commentReducer = (state = initialState, action) => {
    console.log(state, action);
    return state;
};

export default commentReducer;
