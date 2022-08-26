import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { format } from 'date-fns'
import { ProjectDetail } from "../../redux/action/product-details";
import { postProjectDetailsAPI } from "../../redux/APIS/API";
import { useState, useEffect } from "react";





function ProjectList() {



    const router = useRouter();

    const dispatch = useDispatch();

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

    const project = useSelector((state) => state.projects.projects.data)

    console.log(project)

    // const details = useSelector((state)=> state.details.details.data)

    // console.log('data', details);


    function ProjectsItem(id) {
        try {
            let data = { project_id: '' + id }
            const respon = dispatch(ProjectDetail(data))
            console.log(respon)
            router.push('/projects/details')


        } catch (error) {
            console.log(error)
        }

    }






    return (
        <div className="list">
            <div className="body">
                <div className="ListDetails mb-20">

                    <div className="pt-4 px-4">
                        <span className="text-[15px] text-gray-500">Contractors Info</span>
                        <hr className="my-1 border-t-2" />
                    </div>

                    {project?.map((item, index) =>
                        <div key={index} className='flex items-center w-[100%] gap-[3px] pt-2 px-4'>

                            <div className="w-full">
                                <div
                                    className="w-full"
                                    onClick={() => ProjectsItem(item.ID)}>
                                    <span className="text-[10px] text-[#000] capitalize ">{item?.project_date && format(new Date(item?.project_date),
                                        'dd-MM-yyyy')}</span>
                                    <h1 className="text-[15px] font-[500] capitalize">{item.post_title}</h1>
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

                {project?.length == 0 && (<div className="flex w-full items-center justify-center p-5">
                    <span>
                        no data
                    </span>
                </div>)}
            </div>
        </div>
    )

}
export default ProjectList;