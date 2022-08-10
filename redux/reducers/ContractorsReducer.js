import { GET_CONTRACTORS } from "../action/type"

const initalState = {
    contractors: []
}


export const contractorsReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_CONTRACTORS:
            return {

                ...state,

                contractors: action.payload.data,

            };
        default:
            return state;
    }
};


