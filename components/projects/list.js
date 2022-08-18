import { useRouter } from "next/router";




function ProjectList() {

    const router = useRouter();
    
    
    const Project = [
        {
            date: '06/01/22',
            title: 'Resurface Parking lot',
            status: 'name',
            services: 'name',
            bids: '3',
        },
        {
            date: '06/01/22',
            title: 'Resurface Parking lot',
            status: 'name',
            services: 'name',
            bids: '3',
        },
        {
            date: '06/01/22',
            title: 'Resurface Parking lot',
            status: 'name',
            services: 'name',
            bids: '3',
        },
        {
            date: '06/01/22',
            title: 'Resurface Parking lot',
            status: 'name',
            services: 'name',
            bids: '3',
        },
        {
            date: '06/01/22',
            title: 'Resurface Parking lot',
            status: 'name',
            services: 'name',
            bids: '3',
        },
    ]




    return (
        <div className="list">
            <div className="body">
                <div className="ListDetails mb-20">

                    <div className="pt-4 px-4">
                        <span className="text-[15px] text-gray-500">Contractors Info</span>
                        <hr className="my-1 border-t-2" />
                    </div>
                    
                    {Project?.map((item,index) =>
                    <div key={index} className='flex items-center w-[100%] gap-[3px] pt-2 px-4'>

                        <div className="w-full">
                            <div
                                className="w-full"
                                onClick={()=> router.push('/projects/details')}
                                >
                                <span className="text-[10px] text-[#000] capitalize ">{item.date}</span>
                                <h1 className="text-[15px] font-[500] capitalize">{item.title}</h1>
                                <div className="flex opacity-75 gap-[10px] items-center ">
                                    <span className="text-[10px] text-[#000] capitalize ">Status: {item.status}</span>
                                    <span className="text-[10px] text-[#000]  capitalize">Services: {item.services}</span>
                                    <span className="text-[10px] text-[#000]  capitalize">Bids: {item.bids}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}   
                </div>
            </div>
        </div>
    )

}
export default ProjectList;