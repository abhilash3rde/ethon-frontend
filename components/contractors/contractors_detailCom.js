import Link from "next/link";
import {
    IoCall,
    IoMailOutline,
} from "react-icons/io5";


function ContractorsDetailsCom() {



    const contractors = [
        {
            title: ' Around  The Clock',
            services: 'locksmith',
            location: '123 Mian st., MT. Pleaseant , SC 29466',
            account_number: '105493934',
            phone_number: '123',
            contact_email: 'demo@gmail.com',

            // primary contact
            prinamy_name: 'Trey Pourmagh',
            prinamy_title: 'Owner',
            prinamyfirst_number_type: 'Mobile',
            prinamyfirst_number: '13246',
            prinamy_secondary_number_type: 'Office',
            prinamy_secondary_number: '132465',
            prinamy_email: 'demo@gmail.com',

            // notes
            notes: 'Utilities for controlling how flex and grid items are positioned along a containers cross axis.',

            // project
            project: [{
                project_id: '#1058',
                project_date: '06/10/2022',
                project_title: 'Change lovks on 5 units',
                project_dis: 'Utilities for controlling how flex and grid items are positioned along a containers cross axis.',
                // bids
                bids_date: '06/08/22',
                bids_price: '$500',
                bids_action: 'Accepted',
                photo: [
                    {
                        photo_id: '#01',
                        photo_src: 'http://dev.getsmiapp.com/wp-content/uploads/2022/08/34cae27228635e16b3f13401638948b8_-1.png',
                        photo_dis: ''
                    },
                    {
                        photo_id: '#01',
                        photo_src: 'http://dev.getsmiapp.com/wp-content/uploads/2022/08/34cae27228635e16b3f13401638948b8_-1.png',
                        photo_dis: ''
                    },
                    {
                        photo_id: '#01',
                        photo_src: 'http://dev.getsmiapp.com/wp-content/uploads/2022/08/34cae27228635e16b3f13401638948b8_-1.png',
                        photo_dis: ''
                    },
                ]
            },
            ]

        }

    ]


    console.log(contractors)

    return (
        <div>
            <div className="Tenants-details mb-14">
                {contractors.map((item, index) =>
                    <div key={index}>
                        <div className="grid w-full py-4 px-4 ">
                            <div className="flex w-full items-center">
                                <div className="w-[75%] grid" >
                                    <h1 className="text-lg font-[600]">{item?.title}</h1>
                                    <div className="flex gap-2 ">
                                        <span className="text-[10px] ">Services: {item?.services}</span>
                                    </div>



                                </div>
                                <div className="grid grid-cols-2 w-[25%]">
                                    <Link href={'tel:' + item?.phone_number}>
                                        <a>
                                            <div className="w-[100%] grid justify-items-center">
                                                <IoCall className="text-xl " />
                                                <h6 className="text-[10px] ">Call</h6>
                                            </div>
                                        </a>
                                    </Link>

                                    <Link href={'mailto:' + item?.contact_email}>
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
                            <div className="grid gap-2">
                                <div className="w-[100%]">
                                    <h1 className="text-[15px] font-[600]">{item?.location}</h1>
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
                                    <h1 className="text-[13px] font-[600]">{item?.prinamy_name}</h1>
                                </div>

                                <div className="">
                                    <span className="text-[10px] text-gray-500">Title</span>
                                    <h1 className="text-[15px] font-[600]">{item?.prinamy_title}</h1>
                                </div>

                                <div className="">
                                    <span className="text-[10px] text-gray-500">Primary {item?.prinamyfirst_number_type}</span>
                                    <h1 className="text-[15px] font-[600]">{item?.prinamyfirst_number}</h1>
                                </div>

                                <div className="">
                                    <span className="text-[10px] text-gray-500">Secondary {item?.prinamy_secondary_number_type}</span>
                                    <h1 className="text-[15px] font-[600]">{item?.prinamy_secondary_number}</h1>
                                </div>

                                <div className="col-span-2">
                                    <span className="text-[10px] text-gray-500">Email Address</span>
                                    <h1 className="text-[13px] font-[600]">{item?.prinamy_email}</h1>
                                </div>
                            </div>


                        </div>

                        <div className="grid w-full py-4 px-4 ">
                            <div className="flex gap-2">
                                <div className="w-[100%]">
                                    <span className="text-[15px] text-gray-500">Note</span>
                                    <hr className="my-1 border-t-2" />

                                    <div>
                                        <div className="grid grid-cols-1 gap-1">
                                            <div className="w-[100%]">
                                                <span className=" text-[12px]">06/08/2022</span>
                                            </div>
                                            <div className="w-[100%]">
                                                <p className="text-gray-500 text-sm ">
                                                    {item?.notes}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid w-full py-4 px-4 ">
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
                        </div>



                    </div>

                )}
            </div>
        </div>
    )
}

export default ContractorsDetailsCom;


            // // primary contact
            // prinamy_name: 'Trey Pourmaghadam',
            // prinamy_title: 'Owner',
            // prinamyfirst_number_type: 'Mobile',
            // prinamyfirst_number: '13246',
            // prinamy_secondary_number_type: 'Office',
            // prinamy_secondary_number: '132465',
            // prinamy_email: 'demo@gmail.com',