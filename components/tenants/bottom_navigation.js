import React from "react";
import Link from 'next/link'
import {
    IoHomeOutline,
    IoPersonAddOutline,
    IoDuplicateOutline,
    IoPersonOutline,
    IoCalendarOutline,
} from "react-icons/io5";


function BottomNavigation() {




    return (
        <footer className='fixed bottom-0 w-full'>
                <div className='grid grid-cols-5 w-[100%] py-4 bg-[#f3f4f6]'>

                    <div className='grid cursor-pointer'>
                        <div className='grid justify-items-center'>
                            <IoHomeOutline className='text-2xl' />
                            <h1 className='font-[500] text-[10px]' >Home</h1>
                        </div>
                    </div>
                    
                    <Link href="/tenants/tenants_list">
                    <div className='grid cursor-pointer'>
                        <div className='grid justify-items-center'>
                            <IoPersonAddOutline className='text-2xl' />
                            <h1 className='font-[500] text-[10px]' >Tenants</h1>

                        </div>
                    </div>
                    </Link>
                    <div className='grid cursor-pointer'>
                        <div className='grid justify-items-center'>
                            <IoDuplicateOutline className='text-2xl' />
                            <h1 className='font-[500] text-[10px]' >Contractors</h1>
                        </div>
                    </div>

                    <div className='grid cursor-pointer'>
                        <div className='grid justify-items-center'>
                            <IoCalendarOutline className='text-2xl' />
                            <h1 className='font-[500] text-[10px]' >Projects</h1>
                        </div>
                    </div>
                    <div className='grid cursor-pointer'>
                        <div className='grid justify-items-center'>
                            <IoPersonOutline className='text-2xl' />
                            <h1 className='font-[500] text-[10px]' >Schedule</h1>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default BottomNavigation;