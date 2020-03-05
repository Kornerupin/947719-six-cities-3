export const updateStore = (state, action) => {
    console.log(action);
    switch (action.type) {
        case INC_COUNT:
            return state +1;
        case DEC_COUNT:
            return state -1;
        case RESTART:
            return 0;
        case ADD_SOME_VALUE:
            return state + action.payload;
        default:
            return state;
    }
}