import { PROJECT_DETAIL } from "../action/type"


const initalState = {
    details: null
}


export const ProjectDetailsReducer = (state = initalState, action) => {
    switch (action.type) {
        case PROJECT_DETAIL:
            return {

                ...state,

                details: action.payload.data,
            };
        default:
            return state;

    }
}