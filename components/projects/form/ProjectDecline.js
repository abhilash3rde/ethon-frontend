import React from 'react'
// import {useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast'
// import { deleteTenantsAPI } from "../../redux/APIS/API";
// import { getTenants } from "../../redux/action/tenants";
import { useRouter } from 'next/router'
import { deleteProjectAPI } from '../../../redux/APIS/API'
import { useSelector } from 'react-redux'
// import { getProjectFilter } from "../../redux/action/projectFilter";

function ProjectDecline(props) {
   const router = useRouter()
   console.log(props)
   const project_ids = useSelector(
      (state) => state.projectDetails.details.data.data?.ID
   )
   //console.log(project_ids)

   async function deleteUser() {
      try {
         const respon = await deleteProjectAPI({
            project_ids: [project_ids]
         })
         console.log(respon)
         toast.success(respon.data.message)
         dispatch(getProjectFilter())
         router.push('/projects/list')
      } catch (error) {
         console.log(error)
         //router.push('/projects/list')
         //toast.error(error.response.data.message)
      }
   }

   return (
      <div className={props.datashow}>
         <div
            style={{ transition: '.5s' }}
            className="ProjectDecline h-screen bg-[#22222238] w-full fixed z-[100] top-0 left-0 overflow-hidden"
         >
            <div className="">
               <div className="absolute w-[80%]  top-[30%] left-[10%] mx-auto bg-white rounded-[10px]">
                  <div className="text-black text-center px-4 py-8">
                     <p className="text-sm text-gray-500">
                        Are you sure you want to decline? This will let the
                        property manager know you are not interested in this
                        project.
                     </p>
                     <div className="flex justify-center">
                        <div
                           onClick={() => {
                              deleteUser()
                              props.onClicked()
                           }}
                           className="bg-white w-[50%] py-2 flex justify-center"
                        >
                           <div
                              className=" py-2 w-[100%] mx-auto flex justify-center text-red-600 
                                    rounded-[10px] "
                           >
                              <span className="">Yes, Decline</span>
                           </div>
                        </div>

                        <div
                           onClick={props.onClicked}
                           className=" bg-white w-[50%]  py-2 flex justify-center"
                        >
                           <div
                              className=" py-2 w-[100%] mx-auto flex justify-center text-blue-600 
                                    rounded-[10px] "
                           >
                              <span className="">No, Go Back</span>
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

export default ProjectDecline
