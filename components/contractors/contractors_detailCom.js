import Link from "next/link";
import { useSelector } from "react-redux";
import { format } from 'date-fns'
import { useEffect } from "react";
import {
    IoCall,
    IoMailOutline,
} from "react-icons/io5";
import { useRouter } from "next/router";



function ContractorsDetailsCom() {


    const router = useRouter()

    const item_status = useSelector((state)=> state.contractorsDetail.contractorsDetail)

    console.log('status',item_status)

    const item = useSelector((state)=> state.contractorsDetail.contractorsDetail?.data?.data)

    console.log(item)

    useEffect(() => {
        if(item_status === null){
            console.log('status', item_status)
            router.push('/contractors/list')
        }
      
    }, [])
    

    return (
        <div>
            <div className="Tenants-details mb-14">
                {/* {contractors.map((item, index) => */}
                    <div key={item}>
                        <div className="grid w-full py-4 px-4 ">
                            <div className="flex w-full items-center">
                                <div className="w-[75%] grid" >
                                    <h1 className="text-lg font-[600]">{item?.company_name}</h1>
                                    <div className="flex gap-2 ">
                                        <span className="text-[10px] ">Services: {item?.services}</span>
                                    </div>



                                </div>
                                <div className="grid grid-cols-2 w-[25%]">
                                    <Link href={'tel:' + item?.company_primary_phone}>
                                        <a>
                                            <div className="w-[100%] grid justify-items-center">
                                                <IoCall className="text-xl " />
                                                <h6 className="text-[10px] ">Call</h6>
                                            </div>
                                        </a>
                                    </Link>

                                    <Link href={'mailto:' + item?.company_email}>
                                        <a>
                                            <div className="w-[100%] grid justify-items-center">

                                                <IoMailOutline className="text-xl " />
                                                <h6 className="text-[10px] ">Email</h6>
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <hr />

                        <div className="grid w-full py-2 px-4 ">
                            <div className="grid gap-2">
                                <div className="w-[100%]">
                                    <h1 className="text-[15px] font-[600]">{item?.street_address}</h1>
                                    <span className="text-[10px] text-gray-500">Location</span>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div className="grid w-full py-2 px-4 ">
                            <div className="grid gap-2">
                                <div className="w-[100%]">
                                    <h1 className="text-[15px] font-[600]">{item?.account_number}</h1>
                                    <span className="text-[10px] text-gray-500">Account Number</span>
                                </div>
                            </div>
                        </div>
                        <hr />


                        <div className="grid w-[95%] my-2 mx-auto border-[1px] border-gray ">
                            <div className="w-[100%] bg-gray-200 border-gray-200 border-[1px] px-2 ">
                                <span className="text-[10px] text-black">Primary Contact</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 px-2 ">
                                <div className="">
                                    <span className="text-[10px] text-gray-500">Name</span>
                                    <h1 className="text-[13px] font-[600]">{item?.display_name}</h1>
                                </div>

                                <div className="">
                                    <span className="text-[10px] text-gray-500">Title</span>
                                    <h1 className="text-[15px] font-[600]">{item?.primary_title}</h1>
                                </div>

                                <div className="">
                                    <span className="text-[10px] text-gray-500">Primary {item?.primary_phone_type}</span>
                                    <h1 className="text-[15px] font-[600]">{item?.primary_phone}</h1>
                                </div>

                                <div className="">
                                    <span className="text-[10px] text-gray-500">Secondary {item?.primary_second_phone_type}</span>
                                    <h1 className="text-[15px] font-[600]">{item?.primary_second_phone}</h1>
                                </div>

                                <div className="col-span-2">
                                    <span className="text-[10px] text-gray-500">Email Address</span>
                                    <h1 className="text-[13px] font-[600]">{item?.primary_email}</h1>
                                </div>
                            </div>


                        </div>

                        <div className="grid w-full py-4 px-4 ">
                            <div className="flex gap-2">
                                <div className="w-[100%]">
                                    <span className="text-[15px] text-gray-500">Note</span>
                                    <hr className="my-1 border-t-2" />

                                    <div>
                                        <div className="grid grid-cols-1 gap-1 w-full">
                                            <div className="w-[100%]">
                                                <span className=" text-[12px]">{item?.contractor_created && format(new Date(item?.contractor_created), 
                                                'MM-dd-yyyy')}</span>
                                            </div>
                                            <div className="w-[100%] grid overflow-hidden">
                                                <p className="text-gray-500 text-sm w-[100%] grid ">
                                                    {item?.notes}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* project part  */}

                        {/* <div className="grid w-full py-4 px-4 ">
                            <div className="flex gap-2">
                                <div className="w-[100%]">
                                    <span className="text-[15px] text-gray-500">Projects</span>

                                    <div>

                                        <div className="grid my-2 mx-auto border-[1px] border-gray ">

                                            {item.project.map((item, index) =>
                                                <div key={index}>
                                                    <div className="w-[100%] bg-gray-200 border-gray-200 border-[1px] px-2 ">
                                                        <div className="flex gap-4">
                                                            <div>
                                                                <span className="text-[13px]">{item?.project_id}</span>
                                                            </div>
                                                            <div>
                                                                <span className="text-[13px]">{item?.project_date}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 gap-2 px-2 ">
                                                        <div className="">
                                                            <h1 className="text-[17px] font-[600]">{item?.project_title}</h1>
                                                        </div>

                                                        <div className="">
                                                            <h1 className="text-[13px] font-[400]">{item?.project_dis}</h1>
                                                        </div>

                                                        <span className="w-[40%] text-[13px] mt-2">Bids</span>
                                                        <div className="flex mb-2">
                                                            <span className="w-[40%] text-[13px]">{item?.bids_date}</span>
                                                            <span className="w-[20%] text-[13px]" >{item?.bids_price}</span>
                                                            <div className="w-[40%] bg-green-200 rounded-[4px] text-center">
                                                                <span className="text-green-500 text-[15px]">{item?.bids_action}</span>
                                                            </div> 
                                                        </div>

                                                        <span className="w-[100%] text-[13px]">Photos</span>
                                                        <div className="grid grid-cols-3 gap-2 mb-4">
                                                        {item?.photo?.map((photo, index)=>
                                                            <div key={index} className="">
                                                                <img
                                                                    className="h-full object-cover shadow-sm rounded-md object-center w-full"
                                                                    src={photo?.photo_src}
                                                                />
                                                            </div>
                                                        )}
                                                        </div>


                                                    </div>

                                                </div>
                                            )}

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div> */}



                    </div>

                {/* )} */}
            </div>
        </div>
    )
}

export default ContractorsDetailsCom;
