import { GET_SINGLE_TANANTS } from "../action/type";

const initalState = {
    singleTenants: null
}

export const singleTenantsReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_SINGLE_TANANTS:
            return {

                ...state,

                singleTenants: action.payload.data,

            };
        default:
            return state;
    }
};