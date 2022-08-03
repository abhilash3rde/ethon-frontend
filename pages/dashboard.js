import Link from 'next/link'
import {
    IoMenu
} from "react-icons/io5";
import Head from 'next/head'
import { useState } from 'react';
import BottomNavigation from '../components/tenants/bottom_navigation';

function Dashboard() {

    const [menu, setMenu] = useState(false);

    const menuitem = [
        'Home',
        'Tenants',
        'Contrators',
        'Projects',
        'Schedule',
        'Expenses',
        'Incidents',
        'Reports',
        'Support',
        'Profile',
    ]


    return (
        <div className="Dashboard-page w-full">
            <Head>
                <title>Dashboard</title>
            </Head>
            <header className='sticky top-0 z-50 bg-[#fff]'>
                <div className='flex justify-between p-4 px-4 shadow-md '>
                    <div className='logo'>
                        <div className="grid grid-cols-1 items-center">
                            <h1 className="md:text-5xl font-bold cursor-pointer text-center text-4xl">SMI</h1>
                        </div>
                    </div>


                    <div style={{ transition: '.5s', }} className={menu ? 'mr-[0%]' : ''} >
                        <div
                            className=''
                            onClick={() => setMenu(!menu)}>
                            <IoMenu className='text-4xl cursor-pointer' />
                        </div>
                    </div>

                    <div
                        style={{ transition: '.3s', }}
                        onClick={() =>
                            setMenu(!menu)} className={menu ? 'absolue fixed w-full h-screen bg-[#00000017] top-0 left-0' : 'hidden'} >

                    </div>
                    {/* mobile Menu */}

                    <div style={{ transition: '.6s', }}
                        className={menu ? 'w-[70%]  fixed top-0 right-0 py-[10%] px-[5%] bg-[#f5f5f5] z-[999] shadow-[-11px_0px_20px_20px_#b3b3b330]' : 'w-[0px]  fixed top-0 right-0 py-[10%] bg-[#f5f5f5]'}>
                        <div className='griditems-center justify-items-center bg-[#f5f5f5] h-screen'>
                            <ul className='grid grid-cols-1 gap-2 '>
                                {menuitem.map((item,index )=>
                                <li key={index} className='py-2'><span className='cursor-pointer text-base font-[500] '>{item}</span></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>


            <div className='w-full h-[1100px] bg-slate-50'>
            </div>

            <BottomNavigation/>
        </div>
    )
}

export default Dashboard;