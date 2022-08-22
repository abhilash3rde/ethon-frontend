import { filterProjectsAPI } from "../APIS/API"
import { GET_PROJECTS } from "./type"



export const getProjectFilter =(data)=>{
            return async dispatch => {
                try{

                    const  respon = await filterProjectsAPI(data)
                    dispatch(setProjects(respon.data))


                }catch(error){
                    console.log(error)
                }
            }
}

const setProjects = data => ({
    type: GET_PROJECTS,
    payload: {
        data,
    },
})