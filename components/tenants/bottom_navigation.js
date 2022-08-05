import React from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
    IoHome,
    IoHomeOutline,
    IoPersonAdd,
    IoPersonAddOutline,
    IoDuplicate,
    IoDuplicateOutline,
    IoPerson,
    IoPersonOutline,
    IoCalendar,
    IoCalendarOutline,
} from "react-icons/io5";



function BottomNavigation() {

    const router = useRouter();

    const ActiveMenu = (route) => {
        if (route == router.pathname) {
            return 'active '
        } else { return '' }
    }




    return (
        <footer className='fixed bottom-0 w-full'>
            <div className='grid grid-cols-5 w-[100%] bg-[#f3f4f6]'>

                <div
                    onClick={() => router.push('/dashboard')}
                    className={ActiveMenu('/dashboard') ?
                        'bg-[#9e9e9e5e] py-4' :
                        'grid cursor-pointer py-4'
                    }>
                    <div className='grid justify-items-center'>
                        {ActiveMenu('/dashboard') ?
                            <IoHome className='text-2xl' /> :
                            <IoHomeOutline className='text-2xl' />
                        }
                        <h1 className='font-[500] text-[10px]' >Home</h1>
                    </div>
                </div>

                <div
                    onClick={() => router.push('/tenants/tenants_list')}
                    className={ActiveMenu('/tenants/tenants_list') ?
                        'bg-[#9e9e9e5e] py-4' :
                        'grid cursor-pointer py-4'
                    }
                >
                    <div className='grid justify-items-center'>
                        {ActiveMenu('/tenants/tenants_list') ?
                            <IoPersonAdd className='text-2xl' /> :
                            <IoPersonAddOutline className='text-2xl' />
                        }
                        <h1 className='font-[500] text-[10px]' >Tenants</h1>
                    </div>
                </div>

                <div
                    onClick={() => router.push('/contractors/list')}
                    className={ActiveMenu('/contractors/list') ?
                        'bg-[#9e9e9e5e] py-4' :
                        'grid cursor-pointer py-4'
                    }
                    >
                    <div className='grid justify-items-center'>
                    {ActiveMenu('/contractors/list') ?
                            <IoDuplicate className='text-2xl' /> :
                            <IoDuplicateOutline className='text-2xl' />
                        }

                        <h1 className='font-[500] text-[10px]' >Contractors</h1>
                    </div>
                </div>

                <div
                    onClick={() => router.push('/dashboard')}
                    className='grid cursor-pointer py-4'>
                    <div className='grid justify-items-center'>
                            <IoPersonOutline className='text-2xl' />
                        <h1 className='font-[500] text-[10px]' >Projects</h1>
                    </div>
                </div>

                <div
                    onClick={() => router.push('/dashboard')}
                    className='grid cursor-pointer py-4'>
                    <div className='grid justify-items-center'>
                            <IoCalendarOutline className='text-2xl' />
                        <h1 className='font-[500] text-[10px]' >Schedule</h1>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default BottomNavigation;