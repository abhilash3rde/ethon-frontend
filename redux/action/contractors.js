import { filterContractorsAPI, getContractorsAPI } from "../APIS/API"
import { GET_CONTRACTORS } from "./type"


export const getContractors = () => {
    return async dispatch => {
        try {

            const respon = await getContractorsAPI();

            dispatch(setContractors(respon.data))

        } catch (error) {

         }


    };
};


export const getContractorsFilter = (data)=>{
    return async dispatch => {
        try {

            const respon = await filterContractorsAPI(data)

            dispatch(setContractors(respon.data))

        }catch (error){

            console.log(error)

        }
    }
}

const setContractors = data => ({
    type: GET_CONTRACTORS,
    payload: {
        data,
    },

})