import { useRouter } from "next/router";
import { useState } from "react";
import ProjectDetails from "../../components/projects/ProjectDetails";
import DeletePopup from "../../components/projects/deletepopup";
import NavigationButton from "../../components/tenants/details/navigation_button";
import SubHeader from "../../components/tenants/header";





function Details() {

    const [showPopup, setShowPopup] = useState(true);

    const router = useRouter();

    const openPopup = () => {
        setShowPopup(false)
    }

    const closePopup = () => {
        setShowPopup(true)
    }


    return (
        <div>
            <header className="z-50 bg-[#fff] pt-4 pt-2 shadow-[1px_5px_13px_2px_#0000000d] overflow-scroll ">
                <SubHeader title={'Projects Details'} backUrl={'/projects/list'} />
            </header>
            
            <ProjectDetails/>

        <DeletePopup datashow={showPopup? "hidden" : "block"} onClicked={closePopup} />
        <NavigationButton
            BtnFirst={"Edit"}
            BtnSecond={"Delete"}
            SecondOnClick={openPopup} 
        />
        </div>
    )
}
export default Details;

