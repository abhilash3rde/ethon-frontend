import AddNew from "../../components/tenants/add_user_button";
import BottomNavigation from "../../components/tenants/bottom_navigation";
import SubHeader from "../../components/tenants/header";
import ListItem from "../../components/tenants/list";
import TenantsSort from "../../components/tenants/tenants_sort";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { reactLocalStorage } from 'reactjs-localstorage';


function TenantsList() {

    // const add_new = "/tenants/tenants-form"

    const router = useRouter();
    useEffect(() => {
        const tokenVaild = reactLocalStorage.get('token', true);
        if (tokenVaild == true) {
            router.push("/")
        }

    }, [])

    return (
        <div className="">
            <header className="z-50 bg-[#fff] pt-2 shadow-[1px_5px_13px_2px_#0000000d] overflow-hidden">
                <SubHeader title={"Tenants"} backUrl={'/dashboard'} />
                <TenantsSort />
            </header>

            <div className='w-full bg-slate-50 raletive'>
                <ListItem />
                <AddNew href={"/tenants/form"} />
            </div>
            <BottomNavigation />
        </div>
    )
}

export default TenantsList;