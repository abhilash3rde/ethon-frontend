import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import { getTenantDetail } from "../../redux/action/tenants-detail";
import { useState } from "react";



function ListItem() {

    const dispatch = useDispatch();

    const router = useRouter();

    const clients = useSelector((state) => state.tenants.tenants?.data)

    console.log(clients);


    return (
        <div className="list">
            <div className="body">
                <div className="ListDetails mb-20">
                    {clients?.map((item, index) =>
                        <div key={index}>
                            <div className={
                                item.company_flag ? "flex items-start w-[100%]  gap-[3px] pt-4 px-4 bg-red-50 "
                                    : 'flex items-start w-[100%]  gap-[3px] pt-4 px-4'}>

                                <div className="w-[20%]">
                                    <h6 className={
                                        item.company_flag ? 'text-[15px] font-[500] text-red-500'
                                            : "text-[15px] font-[500]"}>{item.unit}</h6>
                                </div>

                                <div className="w-[60%]" onClick={() => {
                                    dispatch(getTenantDetail(item.ID)),
                                        router.push('/tenants/details')
                                }}>

                                    <div className="w-full">
                                        <h1 className={
                                            item.company_flag ? "text-[15px] font-[500] capitalize text-red-400"
                                                : "text-[15px] font-[500] capitalize "
                                        }>{item.company_name}</h1>
                                        <div className="flex opacity-50 gap-[10px] items-center">
                                            <span className="text-[10px] text-[#000] capitalize">{item.status}</span>
                                            <span className="text-[10px] text-[#000]  capitalize">{item.complex}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[20%] pl-[4%]">
                                    <Link href={'tel:' + item.primary_phone}>
                                        <a>
                                            <IoCall className="text-xl" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <hr />
                        </div>
                    )}

                </div>
                {clients?.length == 0 && (<div className="flex w-full items-center justify-center p-5">
                    <span>
                        no data
                    </span>
                </div>)}


            </div>

        </div>
    )
}

export default ListItem;

