import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { assignContractorAPI } from '../../redux/APIS/API'
import toast from 'react-hot-toast'
import { getContractors } from '../../redux/action/contractors'
import { useRouter } from 'next/router'

export default function AlignContractor() {
   const router = useRouter()

   const dispatch = useDispatch()

   const [isOn, setIsOn] = useState(false)

   useEffect(() => {
      dispatch(getContractors())
   }, [])

   const contractor_list = useSelector(
      (state) => state.contractors.contractors.data
   )

   const ProjectId = useSelector(
      (state) => state.projectDetails.details.data.data.ID
   )
   const [contractorID, setContractorID] = useState(contractor_list[0].id)
   const [sendBy, setSendBy] = useState('')

   async function getData(e) {
      e.preventDefault()
      console.log(sendBy, ProjectId, contractorID)
      const respon = await assignContractorAPI({
         project_id: '' + ProjectId,
         send_by: [sendBy],
         contractor_ids: [contractorID]
      })
      console.log(respon)
      toast.success(respon.data.message)
      // router.push('/projects/view')
   }

   return (
      <div className="pt-8 pb-20 px-4">
         <div className="px-4 py-2 border-2 border-gray-300 rounded-lg">
            <h6>{`${window.location.href}/${contractorID}`}</h6>
         </div>



         <form onSubmit={getData}>
            <select
               onChange={(e) => setContractorID(e.target.value)}
               className="font-medium w-full text-[12px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none mt-8"
               disabled={isOn}
            >
               {contractor_list.map((item, index) => (
                  <Fragment key={index}>
                     <option value={item.ID}>{item.company_name}</option>
                  </Fragment>
               ))}
            </select>

            <div className="py-4 px-4 bg-slate-200 border-[1px] border-dashed border-gray-400 mt-6 rounded-md grid gap-4">
               <div className="flex gap-2">
                  <input
                     type="checkbox"
                     className=""
                     id="addnew"
                     checked={isOn}
                     onClick={() => setIsOn(!isOn)}
                  />
                  <label htmlFor="addnew">Send to New Contractor</label>
               </div>
               {isOn && (
                  <div>
                     <div>
                        <input
                           name="email"
                           id="email"
                           placeholder="enter email address"
                           className="font-medium w-full text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px] bg-[#0000] text-[#000] 
                         border-2 border-gray-400 focus:border-black focus:outline-none focus:bg-white"
                        />
                     </div>
                     <br />
                     <div>
                        <input
                           name="phone"
                           id="phone"
                           placeholder="enter phone number"
                           className="font-medium w-full text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px] bg-[#0000] text-[#000] 
                         border-2 border-gray-400 focus:border-black focus:outline-none focus:bg-white"
                        />
                     </div>
                  </div>
               )}
            </div>



            <div className="py-4 px-4 grid gap-4">
               <div className="flex gap-1">
                  <input
                     type="radio"
                     id="age1"
                     name="send_by"
                     value="email"
                     onChange={() => {
                        setSendBy('email')
                     }}
                  />
                  <label htmlFor="age1">Send By email</label>
               </div>

               <div className="flex gap-1">
                  <input
                     type="radio"
                     id="age2"
                     name="send_by"
                     value="text"
                     onChange={() => {
                        setSendBy('text')
                     }}
                  />
                  <label htmlFor="age2">Send By Text</label>
               </div>
            </div>

            <button
               type="submit"
               className="flex gap-1 justify-center bg-orange-400 border-orange-400 text-white border-2 py-2 px-4  
                            rounded-[10px] hover:border-theme"
            >
               <h1>Send Request</h1>
            </button>
         </form>
      </div>
   )
}
