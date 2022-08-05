import { useState } from "react";
import ContractorsDetailsCom from "../../components/contractors/contractors_detailCom";
import DeletePopup from "../../components/contractors/deletepopup";
import NavigationButton from "../../components/tenants/details/navigation_button";
import SubHeader from "../../components/tenants/header";




function ContractorsDetails(){
    const [showPopup, setShowPopup] = useState(false);
    const open =()=>{
        setShowPopup(true)
    }

    const close =()=>{
        setShowPopup(false)
    }



    return(
        <div>
            <header className="z-50 bg-[#fff] pt-4 pt-2 shadow-[1px_5px_13px_2px_#0000000d] sticky top-0 overflow-hidden">
                <SubHeader title={"Contractors Details"} backUrl={'/contractors/list'}/>
            </header>
            
            <ContractorsDetailsCom />

            <DeletePopup datashow={showPopup? "block" : "hidden"} onClicked={close}/>
            <NavigationButton 
             BtnFirst={"Edit"}
             BtnSecond={"Delete"}
             SecondOnClick={open}
            />
        </div>
    )
}

export default ContractorsDetails;