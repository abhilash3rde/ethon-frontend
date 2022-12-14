import { useState } from "react";
import ContractorsSort from "../../components/contractors/contractors_sort";
import ConListItem from "../../components/contractors/list";
import AddNew from "../../components/tenants/add_user_button";
import BottomNavigation from "../../components/tenants/bottom_navigation";
import SubHeader from "../../components/tenants/header";




function ContractorsList() {

    return (
        <div>
            <header className="z-50 bg-[#fff]pt-2 shadow-[1px_5px_13px_2px_#0000000d] overflow-scroll ">
                <SubHeader title={"Contractors"} backUrl={'/dashboard'} />
                <ContractorsSort />
            </header>

            <div className='w-full bg-slate-50 raletive'>
                <ConListItem />
                <AddNew href={"/contractors/form"} />
            </div>

            <BottomNavigation />
        </div>
    )

}

export default ContractorsList;