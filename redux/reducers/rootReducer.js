import { combineReducers } from "redux";
import { singleTenantsReducer } from "./SingleTenantsReducer";
import { tenantsReducer } from "./TenantsReducer";
import { UserActiveReducer } from "./UserActiveReducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tenantsDetailsReducer } from "./TenantsDetailReducer";

const persistConfig = {
  key:'persist-store',
  storage
}



export const rootReducer = combineReducers({

    tenants:tenantsReducer,
    singleTenants:singleTenantsReducer,
    tenantsDetails:tenantsDetailsReducer,
    userActive:persistReducer(persistConfig, UserActiveReducer),

});