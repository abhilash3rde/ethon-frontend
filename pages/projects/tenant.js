import { useRouter } from 'next/router'
import React from 'react'
import AlignTenant from '../../components/projects/alignTenant'
import NavigationButton from '../../components/tenants/details/navigation_button'
import SubHeader from '../../components/tenants/header'

export default function tenants() {

    const router = useRouter()

    function data() {
        router.push('/projects/details')
        // alert("hello wolrd")
    }


    return (
        <div>
            <header className="z-50 bg-[#fff] pt-2  shadow-[1px_5px_13px_2px_#0000000d] sticky top-0 overflow-hidden">
                <SubHeader
                    Subtitle={'Add New Tenants'}
                    backUrl={'/projects/details'}
                />
            </header>
            <div>
                <AlignTenant />
            </div>

            <NavigationButton
                BtnSecond={"CANCEL"}
                SecondOnClick={data}
            />
        </div>
    )
}
