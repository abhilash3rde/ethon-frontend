import SubHeader from "../../components/tenants/header";
import TanantsDetailsCom from "../../components/tenants/details/tanants_detailsCom";
import NavigationButton from "../../components/tenants/details/navigation_button";
import DeletePopup from "../../components/tenants/deletepopup";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";



function TenantsDetails() {

    const [showPopup, setShowPopup] = useState(true);

    const router = useRouter()

    const open = () => {
        setShowPopup(false)
        console.log("false")
    }

    const close = () => {
        setShowPopup(true)
        console.log("true")
    }

    return (
        <div className="App">

            <header className="z-50 bg-[#fff] pt-4 pt-2 shadow-[1px_5px_13px_2px_#0000000d] sticky top-0 overflow-hidden">
                <SubHeader title={"Tenants Details"} backUrl={'/tenants/tenants_list'}/>
            </header>


            <TanantsDetailsCom />
            <DeletePopup  datashow={showPopup? "hidden" : "block"} onClicked={close} />
            <NavigationButton 
            BtnFirst={"Edit"}  
            BtnFirstOnclick={()=>{ 
                router.push('/tenants/tenants_form?edit=true')
            }}
            SecondOnClick={open} />

        </div>
    )
}

export default TenantsDetails;