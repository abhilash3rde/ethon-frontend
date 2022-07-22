import { GET_TENANTS } from "../action/type";

const initalState = {
    tenants: []
}

export const tenantsReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_TENANTS:
            return {

                ...state,

                tenants: action.payload.data,

            };
        default:
            return state;
    }
};