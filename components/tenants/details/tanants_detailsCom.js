import {
    IoCall,
    IoMailOutline,
    IoListOutline,
    IoList,
    IoGridOutline,
    IoGrid,

} from "react-icons/io5";
import Link from "next/link";
import Image from 'next/image'
import { useState } from "react";
import { useSelector } from "react-redux";




function TanantsDetailsCom() {
    const [layoutOption, setLayoutOption] = useState(false);

    const tenants = useSelector((state) => state.singleTenants.singleTenants)

    console.log(tenants)


    return (
        <div className="Tenants-details mb-14">

            <div>
                <div className="grid w-full py-4 px-4 ">
                    <div className="flex w-full items-center ">
                        <div className="w-[80%] grid">
                            <h1 className="text-lg font-[600]">{tenants.display_name}</h1>
                            <div className="flex gap-2 ">
                                <span className="text-[10px] ">Status: {tenants.status}</span>
                                <span className="text-[10px] ">Complex: {tenants.complex}</span>
                            </div>



                        </div>
                        <div className="w-[10%] grid">
                            <IoCall className="text-xl " />
                            <h6 className="text-[10px] ">Call</h6>
                        </div>

                        <Link href={'mailto:' + tenants.user_email}>
                            <a>
                                <div className="w-[10%] grid justify-items-center">

                                    <IoMailOutline className="text-xl " />
                                    <h6 className="text-[10px]  ">Email</h6>
                                </div>
                            </a>
                        </Link>


                    </div>
                </div>
                <hr />

                <div className="grid w-full py-2 px-4 ">
                    <div className="flex gap-2">
                        <div className="w-[60%]">
                            <span className="text-[10px] text-gray-500">Primary Contact</span>
                            <h1 className="text-lg font-[600]">{tenants.phone_number}</h1>
                        </div>

                        <div className="w-[40%]">
                            <span className="text-[10px] text-gray-500">Title</span>
                            <h1 className="text-lg font-[600]">{tenants.primary_title}</h1>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="grid w-full py-2 px-4 ">
                    <div className="flex gap-2">
                        <div className="w-[100%]">
                            <span className="text-[10px] text-gray-500">Unit Location</span>
                            <h1 className="text-base font-[600]">{tenants.address}</h1>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="grid w-full py-2 px-4 ">
                    <div className="flex gap-2">
                        <div className="w-[50%]">
                            <span className="text-[10px] text-gray-500">Primary Phone Number</span>
                            <h1 className="text-base font-[600]">{tenants.phone_number}</h1>
                        </div>
                        <div className="w-[50%]">
                            <span className="text-[10px] text-gray-500">Secondary Phone Number</span>
                            <h1 className="text-base font-[600]">{tenants.phone_number}</h1>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="grid w-full py-2 px-4 ">
                    <div className="flex gap-2">
                        <div className="w-[100%]">
                            <span className="text-[10px] text-gray-500">Email Address</span>

                            <h1 className="text-sm font-[600]">{tenants.user_email}</h1>

                        </div>
                    </div>
                </div>
                <hr />

                <div className="grid w-full py-2 px-4 ">
                    <div className="flex gap-2">
                        <div className="w-[100%]">
                            <span className="text-[15px] text-gray-500">Note</span>
                            <hr className="my-1 border-t-2" />
                            <div className="flex gap-4">
                                <div className="w-[20%]">
                                    <span className="">06/02/18</span>
                                </div>
                                <div className="w-[80%]">
                                    <p className="text-gray-500 text-sm ">
                                        asdasdasd
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid w-full py-2 px-4 ">
                    <div className="flex gap-2">
                        <div className="w-[100%]">
                            <div className="flex justify-between items-center">
                                <div className="">
                                    <span className="text-[15px] text-gray-500">Photos</span>
                                </div>

                                <div className="flex w-[20%] gap-1 " >
                                    <div
                                        className=" p-[5px] "
                                        onClick={() => setLayoutOption(false)}>
                                        {layoutOption ?
                                            <IoListOutline className="text-lg cursor-pointer" />
                                            : <IoList className="text-lg cursor-pointer" />}

                                    </div>

                                    <div className=" p-[5px] " onClick={() => setLayoutOption(true)}>
                                        {layoutOption ?
                                            <IoGrid className="text-lg cursor-pointer " />
                                            : <IoGridOutline className="text-lg cursor-pointer " />}
                                    </div>

                                </div>
                            </div>

                            <hr className="my-1 border-t-2" />
                            {/* list view */}

                            <div className={layoutOption ? 'hidden' : 'block'}>
                                <div className='flex gap-2 '>

                                    <div className="w-[30%]">
                                        <div className="w-full overflow-hidden ">
                                            <Image
                                                src='/demo_image.png'
                                                width={10}
                                                height={10}
                                                layout="responsive"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[70%]">
                                        <span className="">6/10/22</span>
                                        <p className="text-gray-500 text-sm ">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut</p>
                                    </div>
                                </div>
                            </div>

                            {/* grid view */}
                            <div className={layoutOption ? 'block' : 'hidden'}>
                                <div className='grid grid-cols-3 gap-2 '>

                                    <div className="w-full ">
                                        <Image src='/demo_image.png' width={10} height={10} layout="responsive" />
                                    </div>

                                    <div className="w-full ">
                                        <Image src='/demo_image.png' width={10} height={10} layout="responsive" />
                                    </div>

                                    <div className="w-full ">
                                        <Image src='/demo_image.png' width={10} height={10} layout="responsive" />
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>






        </div>
    )

}

export default TanantsDetailsCom;