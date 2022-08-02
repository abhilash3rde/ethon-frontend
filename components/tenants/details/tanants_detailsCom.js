import Link from "next/link";
import Image from 'next/image'
import AddPhoto from './addPhotos';
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
    IoCall,
    IoMailOutline,
    IoListOutline,
    IoList,
    IoGridOutline,
    IoGrid,
} from "react-icons/io5";
import toast from 'react-hot-toast';
import { useRouter } from 'next/router'
import AddPhotoD from "./addPhotoD";
import TanantsLightbox from "./lightbox";








function TanantsDetailsCom() {

    const [layoutOption, setLayoutOption] = useState(false);

    const [openLightBox, setOpenLightBox] = useState(false);

    const [imageSrc, setImageSrc] = useState(true);

    const OpenLight = (img) => {
        setImageSrc(img)
        setOpenLightBox(true);
        console.log('popup open successFully')
    }


    const OffLight = () => {
        setOpenLightBox(false);
    }


    const router = useRouter();

    const tenants_detail = useSelector((state) => state.tenantsDetails.tenantsDetails?.data)

    console.log(tenants_detail)

    useEffect(() => {
        if (tenants_detail === null) {
            router.push('/tenants/tenants_list')
        }
    }, [tenants_detail])





    return (
        <div className="Tenants-details mb-14">

            <div>
                <div className="grid w-full py-4 px-4 ">
                    <div className="flex w-full items-center ">
                        <div className="w-[75%] grid">
                            <h1 className="text-lg font-[600]">{tenants_detail?.company_name}</h1>
                            <div className="flex gap-2 ">
                                <span className="text-[10px] ">Status: {tenants_detail?.status}</span>
                                <span className="text-[10px] ">Complex: {tenants_detail?.complex}</span>
                            </div>



                        </div>
                        <div className="grid grid-cols-2 w-[25%]">
                            <Link href={'tel:' + tenants_detail?.primary_phone}>
                                <a>
                                    <div className="w-[100%] grid justify-items-center">
                                        <IoCall className="text-xl " />
                                        <h6 className="text-[10px] ">Call</h6>
                                    </div>
                                </a>
                            </Link>

                            <Link href={'mailto:' + tenants_detail?.primary_contact_email}>
                                <a>
                                    <div className="w-[100%] grid justify-items-center">

                                        <IoMailOutline className="text-xl " />
                                        <h6 className="text-[10px]  ">Email</h6>
                                    </div>
                                </a>
                            </Link>
                        </div>

                    </div>
                </div>
                <hr />

                <div className="grid w-full py-2 px-4 ">
                    <div className="flex gap-2">
                        <div className="w-[60%]">
                            <span className="text-[10px] text-gray-500">Primary Contact</span>
                            <h1 className="text-lg font-[600]">{tenants_detail?.phone_number}</h1>
                        </div>

                        <div className="w-[40%]">
                            <span className="text-[10px] text-gray-500">Title</span>
                            <h1 className="text-lg font-[600]">{tenants_detail?.primary_title}</h1>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="grid w-full py-2 px-4 ">
                    <div className="flex gap-2">
                        <div className="w-[100%]">
                            <span className="text-[10px] text-gray-500">Unit Location</span>
                            <h1 className="text-base font-[600]">{tenants_detail?.street_address}</h1>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="grid w-full py-2 px-4 ">
                    <div className="flex gap-2">
                        <div className="w-[50%]">
                            <span className="text-[10px] text-gray-500">Primary {tenants_detail?.primary_phone_type}</span>
                            <h1 className="text-base font-[600]">{tenants_detail?.primary_phone}</h1>
                        </div>
                        <div className="w-[50%]">
                            <span className="text-[10px] text-gray-500">Secondary {tenants_detail?.primary_second_phone_type}</span>
                            <h1 className="text-base font-[600]">{tenants_detail?.primary_second_phone}</h1>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="grid w-full py-2 px-4 ">
                    <div className="flex gap-2">
                        <div className="w-[100%]">
                            <span className="text-[10px] text-gray-500">Email Address</span>

                            <h1 className="text-sm font-[600]">{tenants_detail?.primary_contact_email}</h1>

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
                                    <span className="">{tenants_detail?.tenant_created}</span>
                                </div>
                                <div className="w-[80%]">
                                    <p className="text-gray-500 text-sm ">
                                        {tenants_detail?.notes}
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


                            <AddPhotoD />
                            {/* list view */}

                            <div className={layoutOption ? 'hidden' : 'block'}>
                                {tenants_detail?.photos?.map((item, index) =>
                                    <div key={index} className="mb-[10px] ">
                                        <div className='flex gap-2 '>

                                            <div className="w-[30%]">
                                                <div
                                                    className="w-20 h-20 overflow-hidden "
                                                >
                                                    <img
                                                        src={item?.photo_src}
                                                        onClick={()=>OpenLight(item.photo_src)
                                                        }
                                                        className="h-full object-cover rounded-md object-center w-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-[70%]">
                                                <span className="">{item?.photo_created}</span>
                                                <p className="text-gray-500 text-sm ">{item?.photo_detail}</p>
                                            </div>
                                        </div>

                                       


                                    </div>
                                )}

                            </div>

                            {/* grid view */}
                            <div className={layoutOption ? 'block' : 'hidden'}>
                                <div className='grid grid-cols-3 gap-2 '>
                                    {tenants_detail?.photos?.map((item, index) =>
                                        <div>
                                            <div key={index} className="w-20 h-20 ">
                                                <img
                                                    src={item?.photo_src}
                                                    onClick={()=>OpenLight(item.photo_src)
                                                    }
                                                    className="h-full object-cover rounded-md object-center w-full"
                                                />
                                            </div>

                                            
                                        </div>

                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


                                    {openLightBox &&
                                            <TanantsLightbox
                                                src={imageSrc}
                                                //nextSrc={item?.photo_src[(item?.photo_id + 1) % item?.photo_src.length]}
                                                //prevSrc={item?.photo_src[(item?.photo_id + item?.photo_src.length - 1) % item?.photo_src.length]}
                                                datashow={openLightBox ? "block" : "hidden"}
                                                close={() => setOpenLightBox(false)}
                                            />
                                        }


        </div>
    )

}

export default TanantsDetailsCom;