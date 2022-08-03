import { TENANTS_DETAIL } from "../action/type";

const initalState = {
    tenantsDetails: null
}

export const tenantsDetailsReducer = (state = initalState, action) => {
    switch (action.type) {
        case TENANTS_DETAIL:
            return {

                ...state,

                tenantsDetails: action.payload.data,

            };
        default:
            return state;
    }
};