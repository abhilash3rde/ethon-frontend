import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { useEffect } from "react";
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import { getTenants } from "../../redux/action/tenants";
import { getSingleTenants } from "../../redux/action/single-tenants";



function ListItem() {


    const dispatch = useDispatch();

    const router = useRouter();

    useEffect(() => {
        dispatch(getTenants())

    }, [])


    const clients = useSelector((state) => state.tenants.tenants.data)

    return (
        <div className="list">
            {/* <div className="ListHeader">
                <div className='flex justify-between items-center gap-[10px] pt-4 px-4'>
                    <div className="w-[20%]">
                        <h6 className="text-sm">Unit #</h6>
                    </div>
                    <div className="w-[50%]">
                        <h1 className="text-sm">Tenant Name</h1>
                    </div>

                    <div className="w-[30%]">
                        <h1 className="text-sm">Click to call</h1>
                    </div> 
                </div>
                <hr />
            </div> */}
            <div className="body">
                <div className="ListDetails mb-20">
                    {clients?.map((item, index) =>
                        <div key={index}>
                            <div className='flex items-start w-[100%]  gap-[3px] pt-4 px-4'>
                                <div className="w-[20%]">
                                    <h6 className="text-[15px] font-[500]">{item.id}</h6>
                                </div>

                                    <div className="w-[60%]" onClick={()=>{ 
                                        dispatch(getSingleTenants(item)),
                                        router.push('/tenants/tenants_details')}
                                        }>
                                    
                                        <div className="w-full">
                                            <h1 className="text-[15px] font-[500]">{item.company_name}</h1>
                                            <div className="flex opacity-50 gap-[10px] items-center ">
                                                <span className="text-[10px] text-[#000] ">{item.status}</span>|
                                                <span className="text-[10px] text-[#000] ">{item.complex}</span>
                                            </div>
                                        </div>
                                    </div>

                                <div className="w-[20%] pl-[4%]">
                                    <Link href={'tel:' + item.phone_number}>
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


            </div>

        </div>
    )
}

export default ListItem;