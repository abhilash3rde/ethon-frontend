import { getTenantsAPI } from "../APIS/API";
import { GET_TENANTS } from "./type";

export const getTenants= () =>{
    return async dispatch => {
        try{

           const respon = await getTenantsAPI(); 

           dispatch(setTenants(respon.data))

        }catch (error) { }


    };  
};

const setTenants = data => ({
    type: GET_TENANTS,
    payload: {
      data,  
    },

})