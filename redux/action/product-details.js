import { postProjectDetailsAPI } from "../APIS/API";
import { getProjectFilter } from "./projectFilter"
import { PROJECT_DETAIL } from "./type"


export const ProjectDetail = (id) => {
    return async dispatch => {
        try {
            const respon = await postProjectDetailsAPI(id);

            console.log(respon)

            dispatch(setProjectDetail(respon))
        } catch (error) {
            console.log(error);
        }

    }
}

const setProjectDetail = data => ({
    type: PROJECT_DETAIL,
    payload: {
        data,
    },
})