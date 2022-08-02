import axios from "axios";
import { token } from "../../utils";
const baseAPIURL = 'http://dev.getsmiapp.com/wp-json/';
const login_url = baseAPIURL + 'jwt-auth/v1/token';




export const postLoginAPI = (data) => {
    return axios.post(login_url, data,
    )
}

export const postRegistationAPI = (data) => {
    return axios.post(baseAPIURL + 'api/v1/register', data,
    )
}

export const postForgetAPI = (data) => {
    return axios.post(baseAPIURL + 'api/v1/forget-password', data, token()
    )
}

export const postNewAPI = (data) => {
    return axios.post(baseAPIURL + 'api/v1/new-password', data, token()
    )
}


export const getTenantsAPI = () => {
    return axios.get(baseAPIURL + 'api/v1/tenants',
        token())
}

export const getTenantDetailAPI = (id) => {
    return axios.get(baseAPIURL + `api/v1/tenant/detail?tenantId=${id}`,
        token())
}

export const postTenantsAPI = (data) => {
    return axios.post(baseAPIURL + 'api/v1/tenant/create', data,
        token())
}

export const deleteTenantsAPI = (id) => {
    return axios.post(baseAPIURL + `api/v1/tenant/delete`,id,
        token())
}
export const deleteTenantsPhotoAPI = (data) => {
    return axios.post(baseAPIURL + `api/v1/photos/delete`,data,
        token())
}
 
export const postTenantsAddPhotosAPI = (data) => {
    return axios.post(baseAPIURL + 'api/v1/photos/add', data,
        token())
}

export const EditTenantsAPI = (data) => {
    return axios.post(baseAPIURL + 'api/v1/tenant/update', data,
    token())
}

export const filterTenantsAPI = (data) => {
    return axios.post(baseAPIURL + 'api/v1/tenant/search', data,
    token())
}


