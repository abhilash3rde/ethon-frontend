import SubHeader from "../../components/tenants/header";
import TanantsDetailsCom from "../../components/tenants/details/tanants_detailsCom";
import NavigationButton from "../../components/tenants/details/navigation_button";
import DeletePopup from "../../components/tenants/deletepopup";
import { useState } from "react";


function TenantsDetails() {

    const [showPopup, setShowPopup] = useState(true);


    return (
        <div className="App">

            <header className="z-50 bg-[#fff] pt-4 pt-2 shadow-[1px_5px_13px_2px_#0000000d] sticky top-0 overflow-hidden">
                <SubHeader title={"Tenants Details"} backUrl={'/tenants/tenants_list'}/>
            </header>


            <TanantsDetailsCom />
            <DeletePopup  datashow={showPopup? "hidden" : "block"} onClicked={()=>setShowPopup(true)} />
            <NavigationButton BtnFirst={"Edit"} onClick={()=>setShowPopup(false)} />

        </div>
    )
}

export default TenantsDetails;