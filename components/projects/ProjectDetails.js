import { useState } from "react";
import TanantsLightbox from "../tenants/details/lightbox";
import { format } from 'date-fns'
import { useSelector } from "react-redux";
import Button from "./form/Button";
import { useRouter } from "next/router";




function ProjectDetails() {

    const [lightBox, setLightBox] = useState(false);
    const [imageSrc, setImageSrc] = useState(true);

    const router = useRouter();


    const OpenLight = (img) => {
        setImageSrc(img)
        setLightBox(true);
    }

    const details = [{
        id: '#162',
        date: '06/08/2022',
        title: 'Project name',
        status: 'In Progress',
        services: 'parking Lot ',
        discription: 'Control the opacity of an element’s text color using the color opacity modifierControl the opacity of an element’s text color using the color opacity modifier',
        photos: [{
            image: 'http://dev.getsmiapp.com/wp-content/uploads/2022/08/d0a906c6f805b43b864ad085b237f51e_-1.png',
        },
        {
            image: 'http://dev.getsmiapp.com/wp-content/uploads/2022/08/d0a906c6f805b43b864ad085b237f51e_-1.png',
        },

        {
            image: 'http://dev.getsmiapp.com/wp-content/uploads/2022/08/d0a906c6f805b43b864ad085b237f51e_-1.png',
        }],
        bid_title: 'In Progress',
        bid_dis: 'Control the opacity of an element’s text color using the color opacity',
        bid_img: 'http://dev.getsmiapp.com/wp-content/uploads/2022/08/d0a906c6f805b43b864ad085b237f51e_-1.png',
        bid_price: '4500',
        tenants: [{
            unit: '1154',
            company_name: 'Advenced Denstistry',
            status: 'Oakland',
            complex: 'Occupied',
            primary_phone: '132456'
        },

        ]


    }]

    const item = useSelector((state) => state.projectDetails.details.data.data)

    console.log(item);



    return (
        <div className="App">
            {/* {ProjectD.map((item, index) => */}
            <div key={item} className="grid w-full py-4 px-4 ">
                <div className="flex w-full items-center">
                    <div className="w-full grid" >
                        <div className="flex gap-2 ">
                            <span className="text-[10px] text-gray-400  "> #{item.ID} </span>
                            <span className="text-[10px] text-gray-400  ">
                                {item?.project_date && format(new Date(item?.project_date),
                                    'dd-MM-yyyy')} </span>
                        </div>

                        <h1 className="text-lg font-[600]">{item?.project_name}</h1>

                        <div className="flex gap-2 w-full pb-4 border-b-2 border-gray-300 mb-2">
                            <span className="text-[10px] text-gray-400  ">Status: {item.status}</span>
                            <span className="text-[10px] text-gray-400  ">Services: {item.services}</span>
                        </div>
                        <span className="text-xs  text-black-400" >
                            {item.project_detail}
                        </span>

                        <div className="py-4">
                            <span className="text-[15px] text-gray-500">
                                Photos
                            </span>
                            <hr className="my-1 border-t-2" />
                        </div>

                        <div className='grid grid-cols-3 gap-1 '>
                            {item.photos?.map((item, index) =>
                                <div key={index} >
                                    <div className="w-20 h-20 ">
                                        <img
                                            src={item?.photo_src}
                                            onClick={() => OpenLight(item.photo_src)
                                            }
                                            className="h-full object-cover shadow-lg rounded-md object-center w-full"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 w-[70%] gap-2 my-10">
                            <Button href={() => router.push('/projects/contractor')} name={'Add New Contractor'} />
                            <Button href={() => router.push('/projects/tenant')} name={'Add New Tenants'} />
                        </div>
                        {/* contractors and bids  */}
                        {/* <div className="my-10">
                                <span className="text-[10px] text-gray-400  ">Contractors / Bids</span>

                                <div className="flex px-2 py-4 rounded-[10px] gap-2 border-2 border-gray-100  ">
                                    <div className="w-[60%]">
                                        <h1 className="text-lg font-[600]">{item?.bid_title}</h1>
                                        <span className="text-xs  text-black-400" >
                                            {item.bid_dis}
                                        </span>

                                        <p className="text-[13px]  text-gray-400" >
                                            Proof of insurance
                                        </p>
                                        <img
                                            src={item?.bid_img}
                                            className='w-20 h-20 object-cover rounded-md object-center border-[2px] border-gray-100'
                                        />
                                    </div>

                                    <div className="w-[40%]">
                                        <span className="text-[15px] font-[600]" >
                                            Bids - ${item.bid_price}
                                        </span>

                                        <div className="px-6 py-2 bg-green-500 text-center mt-4 rounded-[10px] ">
                                            <span className=" text-white text-[15px]">Accept</span>
                                        </div>

                                        <div className="px-6 py-2 bg-red-100 text-center mt-4 rounded-[10px] ">
                                            <span className=" text-red-500 text-[15px]">Decline</span>
                                        </div>

                                    </div>




                                </div>

                                <div className="grid grid-cols-1 gap-2 mt-4 w-[70%]">
                                    <div
                                        className="flex gap-1 justify-center bg-orange-400 border-orange-400 text-white border-2 py-2 px-4  
                                         rounded-[10px] hover:border-theme">
                                        <h1>Add New Contractor</h1>
                                    </div>

                                </div>


                                <div className=" mt-8 ">

                                    <span className="text-[10px] text-gray-400  pb-2">Tenants</span>

                                    <div className="px-2 py-2 border-2 border-gray-200 rounded-[10px] ">

                                        {item.tenants?.map((item, index) =>
                                            <div key={index}>
                                                <div className={
                                                    item.company_flag ? "flex items-start w-[100%]  gap-[3px] pt-2 px-4 bg-red-50 "
                                                        : 'flex items-start w-[100%]  gap-[3px] px-2  '}>

                                                    <div className="w-[15%]">
                                                        <h6 className="text-[15px] font-[500]">{item.unit}</h6>
                                                    </div>

                                                    <div className="w-[70%]">

                                                        <div className="w-full">
                                                            <h1 className="text-[15px] font-[500] capitalize ">{item.company_name}</h1>
                                                            <div className="flex opacity-50 gap-[10px] items-center">
                                                                <span className="text-[10px] text-[#000] capitalize">{item.status}</span>
                                                                <span className="text-[10px] text-[#000]  capitalize">{item.complex}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-[15%] pl-[4%]">
                                                        <Link href={'tel:' + item.primary_phone}>
                                                            <a>
                                                                <IoCall className="text-xl" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>


                                    <div className="grid grid-cols-1 gap-2 mt-4 w-[70%]">
                                        <div
                                            className="flex gap-1 justify-center bg-orange-400 border-orange-400 text-white border-2 py-2 px-4  
                                         rounded-[10px] hover:border-theme">
                                            <h1>Add New Tenant</h1>
                                        </div>

                                    </div>



                                </div>










                            </div> */}





                    </div>
                </div>
            </div>

            {/* )} */}


            {
                lightBox &&
                <TanantsLightbox
                    src={imageSrc}
                    datashow={lightBox ? "block" : "hidden"}
                    close={() => setLightBox(false)}
                />
            }


        </div >
    )
}

export default ProjectDetails;