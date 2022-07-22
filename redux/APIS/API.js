import axios from "axios";
import { token } from "../../utils";
const baseAPIURL = 'http://44.208.224.239/wp-json/';
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

export const postTenantsAPI = (data) => {
    return axios.post(baseAPIURL + 'api/v1/tenant/create', data,
        token())
}