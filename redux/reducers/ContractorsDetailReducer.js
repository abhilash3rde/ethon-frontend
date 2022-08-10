import { CONTRACTORS_DETAIL } from "../action/type"

const initalState = {
    contractorsDetail: null
}


export const contractorsDetailReducer = (state = initalState, action) => {
    switch (action.type) {
        case CONTRACTORS_DETAIL:
            return {

                ...state,

                contractorsDetail: action.payload.data,

            };
        default:
            return state;
    }
};


