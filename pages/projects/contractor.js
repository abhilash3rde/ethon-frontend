import React from 'react'
import NavigationButton from '../../components/tenants/details/navigation_button'
import SubHeader from '../../components/tenants/header'

export default function aligncontractor() {
    return (
        <div>
            <header className="z-50 bg-[#fff] pt-2  shadow-[1px_5px_13px_2px_#0000000d] sticky top-0 overflow-hidden">
                <SubHeader Subtitle={'Add New Contractor'} backUrl={'/project/form'} />
            </header>
            <div>

            </div>

            <NavigationButton
                BtnSecond={"CANCEL"}
            />
        </div>
    )
}
