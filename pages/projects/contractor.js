import React from 'react'
import { useRouter } from 'next/router'
import AlignContractor from '../../components/projects/aligncontractor'
import NavigationButton from '../../components/tenants/details/navigation_button'
import SubHeader from '../../components/tenants/header'



export default function aligncontractor() {

    const router = useRouter()


    function data() {
        router.push('/projects/details')
    }

    return (
        <div>
            <header className="z-50 bg-[#fff] pt-2  shadow-[1px_5px_13px_2px_#0000000d] sticky top-0 overflow-hidden">
                <SubHeader
                    Subtitle={'Add New Contractor'}
                    backUrl={'/projects/details'}
                />
            </header>
            <div>
                <AlignContractor />
            </div>

            <NavigationButton
                BtnSecond={"CANCEL"}
                SecondOnClick={data}
            />
        </div>
    )
}
