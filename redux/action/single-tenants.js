import { GET_SINGLE_TANANTS } from "./type";

export const getSingleTenants= (item) =>{
    return async dispatch => {
        try{

           dispatch(setSingleTenants(item))

        }catch (error) { }


    };
};

const setSingleTenants = data => ({
    type: GET_SINGLE_TANANTS,
    payload: {
      data,  
    },

})