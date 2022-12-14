import axios from 'axios'
import { token } from '../../utils'
const baseAPIURL = 'http://dev.getsmiapp.com/wp-json/'
const login_url = baseAPIURL + 'jwt-auth/v1/token'

export const postLoginAPI = (data) => {
   return axios.post(login_url, data)
}

export const postRegistationAPI = (data) => {
   return axios.post(baseAPIURL + 'api/v1/register', data)
}

export const postForgetAPI = (data) => {
   return axios.post(baseAPIURL + 'api/v1/forget-password', data)
}

export const postNewAPI = (data) => {
   return axios.post(baseAPIURL + 'api/v1/new-password', data)
}

// tenants apis

export const getTenantsAPI = () => {
   return axios.get(baseAPIURL + 'api/v1/tenants', token())
}

export const getTenantDetailAPI = (id) => {
   return axios.get(baseAPIURL + `api/v1/tenant/detail?tenantId=${id}`, token())
}

export const postTenantsAPI = (data) => {
   return axios.post(baseAPIURL + 'api/v1/tenant/create', data, token())
}

export const postTenantsFlagAPI = (data) => {
   return axios.post(baseAPIURL + 'api/v1/tenant/conpany_flag', data, token())
}

export const deleteTenantsAPI = (id) => {
   return axios.post(baseAPIURL + `api/v1/tenant/delete`, id, token())
}
export const deleteTenantsPhotoAPI = (data) => {
   return axios.post(baseAPIURL + `api/v1/photos/delete`, data, token())
}

export const postTenantsAddPhotosAPI = (data) => {
   return axios.post(baseAPIURL + 'api/v1/photos/add', data, token())
}

export const EditTenantsAPI = (data) => {
   return axios.post(baseAPIURL + 'api/v1/tenant/update', data, token())
}

export const filterTenantsAPI = (data) => {
   return axios.post(baseAPIURL + 'api/v1/tenant/search', data, token())
}

// contrators apis
export const postContratorsAPI = (data) => {
   return axios.post(baseAPIURL + 'api/v1/contractor/create', data, token())
}

export const getContractorsAPI = () => {
   return axios.get(baseAPIURL + 'api/v1/contractors', token())
}

export const filterContractorsAPI = (data) => {
   return axios.post(baseAPIURL + 'api/v1/contractor/search', data, token())
}

export const getContractorsDetailAPI = (id) => {
   return axios.get(
      baseAPIURL + `api/v1/contractor/detail?contractorId=${id}`,
      token()
   )
}

export const deleteContractorsAPI = (id) => {
   return axios.post(baseAPIURL + `api/v1/contractor/delete`, id, token())
}

export const EditContractorsAPI = (data) => {
   return axios.post(baseAPIURL + 'api/v1/contractor/update', data, token())
}

// projects apis

export const postProjectsAPI = (data) => {
   return axios.post(baseAPIURL + 'api/v1/project/create', data, token())
}

export const postProjectsPhotosAPI = (data) => {
   return axios.post(baseAPIURL + 'api/v1/project/add_photo', data, token())
}

export const filterProjectsAPI = (data) => {
   return axios.post(baseAPIURL + 'api/v1/projects', data, token())
}

export const postProjectDetailsAPI = (id) => {
   return axios.post(
      baseAPIURL + `api/v1/project/get_single_project`,
      id,
      token()
   )
}

export const deleteProjectAPI = (id) => {
   return axios.post(baseAPIURL + `api/v1/project/delete`, id, token())
}

export const deleteProjectPhotoAPI = (data) => {
   return axios.post(baseAPIURL + `api/v1/project/delete_photo`, data, token())
}

export const EditProjectAPI = (data) => {
   return axios.post(
      baseAPIURL + `api/v1/project/update_project`,
      data,
      token()
   )
}

export const createBidProjectAPI = (data) => {
   return axios.post(baseAPIURL + `api/v1/bid/create`, data, token())
}

export const assignContractorAPI = (data) => {
   return axios.post(
      baseAPIURL + `api/v1/project/assign_contractor`,
      data,
      token()
   )
}

export const assignTenantsAPI = (data) => {
   return axios.post(baseAPIURL + `api/v1/project/assign_tenant`, data, token())
}

//notes
export const createNoteAPI = (data) => {
   return axios.post(baseAPIURL + `api/v1/note/create`, data, token())
}
