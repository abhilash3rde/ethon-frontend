import { combineReducers } from "redux";
import { singleTenantsReducer } from "./SingleTenantsReducer";
import { tenantsReducer } from "./TenantsReducer";


export const rootReducer = combineReducers({

    tenants:tenantsReducer,
    singleTenants:singleTenantsReducer,

 
});