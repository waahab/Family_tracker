import ActionTypes from '../Action/ActionTypes';


const initialState = {
    user: {},
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.USER:
            return ({
                ...state,
                user: action.payload
            })
        default:
            return state;


    }
}


export default AuthReducer;