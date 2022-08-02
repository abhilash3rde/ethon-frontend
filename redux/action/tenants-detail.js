import { getTenantDetailAPI } from "../APIS/API"
import { TENANTS_DETAIL } from "./type";


export const getTenantDetail = (id) =>{
    return async dispatch =>{
        try{
        
        // window.alert(id,"this action")
        const respon = await getTenantDetailAPI(id)

        
        dispatch(setTenantDetail(respon.data))

        }catch (error) { }
    };
};

const setTenantDetail = data =>({
    type: TENANTS_DETAIL,
    payload:{
        data,
    }
})