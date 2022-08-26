import Link from 'next/link'
import {
    IoMenu
} from "react-icons/io5";
import Head from 'next/head'
import { useEffect } from 'react';
import BottomNavigation from '../components/tenants/bottom_navigation';
import SubHeader from '../components/tenants/header';
import { useRouter } from 'next/router';
import { reactLocalStorage } from 'reactjs-localstorage';


function Dashboard() {

    const router = useRouter();



    useEffect(() => {
        const tokenVaild = reactLocalStorage.get('token', true);
        if (tokenVaild == true) {
            router.push("/")
        }

    }, [])


    return (
        <div className="Dashboard-page w-full">
            <Head>
                <title>Dashboard</title>
            </Head>

            <SubHeader
                Maintitle={"SMI"}
            />


            <div className='w-full h-[1100px] bg-slate-50'>
            </div>

            <BottomNavigation />
        </div>
    )
}

export default Dashboard;