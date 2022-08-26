import React from "react";
import { useState } from 'react';
import {
    IoMenu,
    IoArrowBackOutline,
} from "react-icons/io5";
import Link from 'next/link';
import { reactLocalStorage } from 'reactjs-localstorage';
import { useRouter } from "next/router";
import toast from 'react-hot-toast';




function SubHeader(props) {

    const [menu, setMenu] = useState(false);

    const router = useRouter()

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
        'Property Map',
        'Surveillance Cameras',
        'Profile',
        'Log Out'
    ]


    function logout(item) {
        if (item === 'Log Out') {
            reactLocalStorage.clear();
            router.push('/')
            toast.success('Log Out SuccessFully')
        }
    }

    function openMenu() {
        setMenu(true)
    }

    function closeMenu() {
        setMenu(false)
    }

    function Subtitle() {
        return (
            <div className='logo'>
                <div className="grid grid-cols-1 items-center">
                    <h1 className="md:text-5xl font-bold cursor-pointer text-center text-[17px]">{props.Subtitle}</h1>
                </div>
            </div>
        )
    }


    return (
        <div className='bg-white z-50'>
            <div className='flex justify-between py-4 px-4 '>
                {props?.Maintitle ?
                    <div className='logo'>
                        <div className="grid grid-cols-1 items-center">
                            <h1 className="md:text-5xl font-bold cursor-pointer text-center text-4xl">{props?.Maintitle}</h1>
                        </div>
                    </div>
                    :

                    <div className="flex items-center gap-[10px]">
                        <div className="backarrow">
                            <div onClick={() => {
                                { props.backUrl ? router.push(props.backUrl) : null }
                                { props.Url ? props.Url() : null }
                            }}>
                                {/* <a> */}
                                <IoArrowBackOutline className='text-3xl cursor-pointer' />
                                {/* </a> */}
                            </div>
                        </div>
                        <div className='logo'>
                            <div className="grid grid-cols-1 items-center">
                                <h1 className="md:text-5xl font-bold cursor-pointer text-center text-xl">{props?.title}</h1>
                            </div>
                        </div>
                        {props?.Subtitle ? Subtitle() : null}

                    </div>
                }

                <div style={{ transition: '.5s', }} className={menu ? 'mr-[0%]' : ''} >
                    <div
                        className=''
                        onClick={openMenu}>
                        <IoMenu className='text-4xl cursor-pointer' />
                    </div>
                </div>

                <div
                    style={{ transition: '.3s', }}
                    onClick={closeMenu} className={menu ? 'absolue fixed w-full h-[100%] bg-[#00000017] top-0 left-0' : 'hidden'} >

                </div>
                {/* mobile Menu */}

            </div>


            <div style={{ transition: '.6s', }}
                className={menu ? 'w-[70%]  block fixed h-[100%] top-0 right-0 py-[10%] px-[5%] bg-[#f5f5f5] z-[999] shadow-[-11px_0px_20px_20px_#b3b3b330] overflow-y-scroll'
                    : 'w-[0px] fixed top-0 right-0 py-[10%] z-[999] bg-[#f5f5f5]'}>
                <div className='grid items-center justify-items-center bg-[#f5f5f5] '>
                    <ul className='grid grid-cols-1 gap-2 '>
                        {menuitem.map((item, index) =>
                            <li key={index} className='py-2'>
                                <span
                                    className='cursor-pointer text-base font-[500]'
                                    onClick={() => logout(item)}>{item}</span></li>
                        )}
                        {logout()}
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default SubHeader;

