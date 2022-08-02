import { filterTenantsAPI, getTenantsAPI } from "../APIS/API";
import { GET_TENANTS } from "./type";

export const getTenants = () => {
    return async dispatch => {
        try {

            const respon = await getTenantsAPI();

            dispatch(setTenants(respon.data))

        } catch (error) { }


    };
};


export const getTenantsFilter = (data) => {
    return async dispatch => {
        try {

            const respon = await filterTenantsAPI(data);
       
            dispatch(setTenants(respon.data))

        } catch (error) { 

            console.log(error)
        }


    };
};

const setTenants = data => ({
    type: GET_TENANTS,
    payload: {
        data,
    },

})