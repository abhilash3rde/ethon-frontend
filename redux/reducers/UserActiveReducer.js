import { USER_ACTIVE } from "../action/type";

const initalState = {
   user: null
}

export const UserActiveReducer = (state = initalState, action) =>{
    switch(action.type){
        case USER_ACTIVE:
            return{
                ...state,

                user: action.payload.data 
            };
            default:
             return state;

    };
};