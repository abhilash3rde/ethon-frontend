import { combineReducers } from "redux";
import { tenantsReducer } from "./TenantsReducer";
import { UserActiveReducer } from "./UserActiveReducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tenantsDetailsReducer } from "./TenantsDetailReducer";
import { contractorsReducer } from "./ContractorsReducer";
import { contractorsDetailReducer } from "./ContractorsDetailReducer";
import { projectsReducer } from "./ProjectsReducer";
import { ProjectDetailsReducer } from "./ProjectDetailsReducer";

const persistConfig = {
  key: 'persist-store',
  storage
}



export const rootReducer = combineReducers({

    
     tenants: tenantsReducer,
     userActive: persistReducer(persistConfig, UserActiveReducer),
     tenantsDetails: tenantsDetailsReducer,
     contractors: contractorsReducer,
     contractorsDetail: contractorsDetailReducer,
     projects: projectsReducer,
     projectDetails: ProjectDetailsReducer,

});