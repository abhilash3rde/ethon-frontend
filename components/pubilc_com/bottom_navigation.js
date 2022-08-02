import React, { useState, useEffect } from "react";
import Link from 'next/link'
import {
    IoHome,
    IoPerson,
    IoBagAdd,
    IoCalendar,
    IoPieChart,
    IoHomeOutline,
    IoPersonOutline,
    IoBagAddOutline,
    IoCalendarOutline,
    IoPieChartOutline,
} from "react-icons/io5";
import { useRouter } from "next/router";


const BottomNavigation = props => {


    const router = useRouter();
    const [activeTabs, setActiveTabs] = useState(props.name);

    useEffect(() => {
        switch (activeTabs) {
            case 'home':
                router.push('/dashboard')
                break;
            case 'tenants':
                router.push('/tenants/tenants_list')
                break;
            case 'contractors':
                router.push('/contractors/contractors_list')
                break;
            case 'projects':
                router.push('/dashboard')
                break;
            case 'schedule':
                router.push('/dashboard')
                break;
            default:
                router.push('/dashboard')
                break;
        }

    }, [activeTabs, router])

    console.log(activeTabs)


    return (
        <footer className='fixed bottom-0 w-full'>
            <div className='flex gap-[10px] justify-center w-[100%] py-4 bg-[#f3f4f6]'>

                <div>
                    {activeTabs === 'home' ?
                        <div className='grid cursor-pointer' onClick={() => setActiveTabs('home')}>
                            <div className='grid justify-items-center'>
                                <IoHome className='text-2xl' />
                                <h1 className='uppercase font-[500] text-[10px]' >Home</h1>
                            </div>
                        </div> :
                        <div className='grid cursor-pointer' onClick={() => setActiveTabs('home')}>
                            <div className='grid justify-items-center'>
                                <IoHomeOutline className='text-2xl' />
                                <h1 className='uppercase font-[500] text-[10px]' >Home</h1>
                            </div>
                        </div>
                    }
                </div>

                <div>
                    {activeTabs === 'tenants' ?
                        <div className='grid cursor-pointer' onClick={() => setActiveTabs('tenants')} >
                            <div className='grid justify-items-center'>
                                <IoPerson className='text-2xl' />
                                <h1 className='uppercase font-[500] text-[10px]' >Tanents</h1>
                            </div>
                        </div> :
                        <div className='grid cursor-pointer' onClick={() => setActiveTabs('tenants')} >
                            <div className='grid justify-items-center'>
                                <IoPersonOutline className='text-2xl' />
                                <h1 className='uppercase font-[500] text-[10px]' >Tanents</h1>
                            </div>
                        </div>
                    }
                </div>

                <div>
                    {activeTabs === 'contractors' ?

                        <div className='grid cursor-pointer' onClick={() => setActiveTabs('contractors')}>
                            <div className='grid justify-items-center'>
                                <IoBagAdd className='text-2xl' />
                                <h1 className='uppercase font-[500] text-[8px]' >Contractors</h1>
                            </div>
                        </div> :
                        <div className='grid cursor-pointer' onClick={() => setActiveTabs('contractors')}>
                            <div className='grid justify-items-center'>
                                <IoBagAddOutline className='text-2xl' />
                                <h1 className='uppercase font-[500] text-[8px]' >Contractors</h1>
                            </div>
                        </div>
                    }
                </div>

                <div>
                    {activeTabs === 'projects' ?
                        <div className='grid cursor-pointer'>
                            <div className='grid justify-items-center' onClick={() => setActiveTabs('projects')}>
                                <IoPieChart className='text-2xl' />
                                <h1 className='uppercase font-[500] text-[10px]' >Projects</h1>
                            </div>
                        </div> :
                        <div className='grid cursor-pointer'>
                            <div className='grid justify-items-center' onClick={() => setActiveTabs('projects')}>
                                <IoPieChartOutline className='text-2xl' />
                                <h1 className='uppercase font-[500] text-[10px]' >Projects</h1>
                            </div>
                        </div>
                    }
                </div>

                <div>
                    {activeTabs === 'schedule' ?
                        <div className='grid cursor-pointer' onClick={() => setActiveTabs('schedule')}>
                            <div className='grid justify-items-center'>
                                <IoCalendar className='text-2xl' />
                                <h1 className='uppercase font-[500] text-[10px]' >SCHEDULE</h1>
                            </div>
                        </div>
                        :
                        <div className='grid cursor-pointer' onClick={() => setActiveTabs('schedule')}>
                            <div className='grid justify-items-center'>
                                <IoCalendarOutline className='text-2xl' />
                                <h1 className='uppercase font-[500] text-[10px]' >SCHEDULE</h1>
                            </div>
                        </div>
                    }
                </div>



            </div>
        </footer>
    )
}

export default BottomNavigation;