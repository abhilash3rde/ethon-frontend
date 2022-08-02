import { USER_ACTIVE } from "./type"


export const UserActive=(data)=>{
    return async dispatch => {
        try{
            dispatch(setUserActive(data))
        }catch(error) { }
    }
}

const setUserActive = data =>({
    type: USER_ACTIVE,
    payload:{
        data,
    },
})