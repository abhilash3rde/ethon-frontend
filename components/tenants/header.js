import React from "react";
import { useState } from 'react';
import {
    IoMenu,
    IoArrowBackOutline,
} from "react-icons/io5";
import Link from 'next/link';


function SubHeader(props) {

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
        <div className='bg-white z-50'>
            <div className='flex justify-between py-4 px-4 '>
                <div className="flex items-center gap-[10px]">
                    <div className="backarrow">
                        <Link href={props.backUrl}>
                        <a>
                        <IoArrowBackOutline className='text-3xl cursor-pointer' />
                        </a>
                        </Link>
                    </div>

                    <div className='logo'>
                        <div className="grid grid-cols-1 items-center">
                            <h1 className="md:text-5xl font-bold cursor-pointer text-center text-xl">{props.title}</h1>
                        </div>
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
        </div>
    )

}

export default SubHeader;

