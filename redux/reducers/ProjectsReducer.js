import { GET_PROJECTS } from "../action/type"


const initalState = {
    projects: []
}

export const projectsReducer = (state= initalState ,action) =>  {
        switch (action.type){
            case GET_PROJECTS:
                return{

                    ...state,

                    projects: action.payload.data,

                };
                default:
                    return state;
        }
};
