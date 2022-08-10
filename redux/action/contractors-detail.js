import { getContractorsDetailAPI } from "../APIS/API"
import { CONTRACTORS_DETAIL } from "./type";


export const getContractorsDetail = (id) =>{
    return async dispatch =>{
        try{
        
        const respon = await getContractorsDetailAPI(id)

        dispatch(setContractorsDetail(respon.data))

        }catch (error) { }
    };
};

const setContractorsDetail = data =>({
    type: CONTRACTORS_DETAIL,
    payload:{
        data,
    }
})