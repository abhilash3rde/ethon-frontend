import Link from "next/link";
import { IoCall, IoFlagSharp } from "react-icons/io5";
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getContractors, getContractorsFilter } from "../../redux/action/contractors";
import { getContractorsDetail } from "../../redux/action/contractors-detail";






function ConListItem() {


 
    const dispatch = useDispatch();

    const router = useRouter();

    useEffect(() => {
        dispatch(getContractors())
        // dispatch(getContractorsFilter())
    }, [])
    
    // const searchData = useSelector((state)=> state.contractors.contractors.data.data)

    // console.log(searchData)

    const contractors = useSelector((state) => state.contractors.contractors.data)

    console.log(contractors)



    
    

 
    return (
        <div className="list">
            <div className="body">
                <div className="ListDetails mb-20">
                    {contractors?.map((item, index) =>
                        <div key={index}>
                            <div className='flex items-center w-[100%] gap-[3px] pt-4 px-4'>
                              
                                <div className="w-[80%]">

                                    <div 
                                    className="w-full"
                                    onClick={()=> {
                                        console.log(item.ID)
                                        dispatch(getContractorsDetail(item.ID))  
                                        router.push('/contractors/details')
                                    }}>  
                                        <h1 className="text-[15px] font-[500] capitalize">{item.company_name}</h1>
                                       
                                        <div className="flex opacity-50 gap-[10px] items-center ">
                                            <span className="text-[10px] text-[#000] capitalize ">{item.services}</span>
                                            <span className="text-[10px] text-[#000]  capitalize">{item.account_number}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[20%] pl-[4%]">
                                    <Link href={'tel:' + item.company_primary_phone}>
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
                {contractors?.length == 0 && (<div className="flex w-full items-center justify-center p-5">
                    <span>
                        no data
                    </span>
                </div>)}


            </div>

        </div>
    )
}

export default ConListItem;

