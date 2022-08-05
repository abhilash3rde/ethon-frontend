import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { useRouter } from 'next/router'





function ConListItem() {


    // const dispatch = useDispatch();

    const router = useRouter();



    // const clients = useSelector((state) => state.tenants.tenants?.data)

    const clients = [
        {
            title: "AAA Concrete Finishing",
            service: "Sidewalks Repair",
            unit: "#13264487132",
            phone_number: "1324598"
        },
        {
            title: "AAA Concrete Finishing",
            service: "Sidewalks Repair",
            unit: "#13264487132",
            phone_number: "1324598"
        },
        {
            title: "AAA Concrete Finishing",
            service: "Sidewalks Repair",
            unit: "#13264487132",
            phone_number: "1324598"
        },
        {
            title: "AAA Concrete Finishing",
            service: "Sidewalks Repair",
            unit: "#13264487132",
            phone_number: "1324598"
        },
        {
            title: "AAA Concrete Finishing",
            service: "Sidewalks Repair",
            unit: "#13264487132",
            phone_number: "1324598"
        },
        {
            title: "AAA Concrete Finishing",
            service: "Sidewalks Repair",
            unit: "#13264487132",
            phone_number: "1324598"
        },        
    ]
 
    return (
        <div className="list">
            <div className="body">
                <div className="ListDetails mb-20">
                    {clients?.map((item, index) =>
                        <div key={index}>
                            <div className='flex items-center w-[100%] gap-[3px] pt-4 px-4'>
                                {/* <div className="w-[20%]">
                                    <h6 className="text-[15px] font-[500]">{item.unit}</h6>
                                </div> */}

                                <div className="w-[80%]">

                                    <div 
                                    className="w-full"
                                    onClick={()=> router.push('/contractors/details')}
                                    >
                                        <h1 className="text-[15px] font-[500] uppercase">{item.title}</h1>
                                        <div className="flex opacity-50 gap-[10px] items-center ">
                                            <span className="text-[10px] text-[#000] uppercase ">{item.service}</span>
                                            <span className="text-[10px] text-[#000]  uppercase">{item.unit}</span>
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
                {/* {clients?.length == 0 && (<div className="flex w-full items-center justify-center p-5">
                    <span>
                        no data
                    </span>
                </div>)} */}


            </div>

        </div>
    )
}

export default ConListItem;

