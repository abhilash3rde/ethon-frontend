import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { assignTenantsAPI } from '../../redux/APIS/API'
import toast from 'react-hot-toast'

export default function AlignTenant() {
   const dispatch = useDispatch()

   const tenant_list = useSelector((state) => state.tenants.tenants.data)
   const ProjectId = useSelector(
      (state) => state.projectDetails.details.data.data.ID
   )
   const [tenantID, setTenantID] = useState('')
   const [sendBy, setSendBy] = useState('')

   async function getData(e) {
      e.preventDefault()
      const respon = await assignTenantsAPI({
         project_id: '' + ProjectId,
         tenant_ids: [tenantID]
      })
      console.log(respon)
      toast.success(respon.data.message)
   }

   return (
      <div className="pt-8 pb-20 px-4">
         {/* <div className='px-4 py-2 border-2 border-gray-300 rounded-lg'>
                <h4>https://projects.link/5r6j865kj</h4>
            </div> */}

         {/* <div className='py-4 px-4 bg-slate-200 border-[1px] border-dashed border-gray-400 mt-6 rounded-md grid gap-4'>

                <div className='flex gap-2'>
                    <input
                        type='checkbox'
                        className=''
                        id="addnew"
                    />
                    <label for="addnew">Send to New Contractor</label>

                </div>

                <div>
                    <input
                        name='email'
                        id='email'
                        placeholder='enter email address'
                        className="font-medium w-full text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px] bg-[#0000] text-[#000] 
                        border-2 border-gray-400 focus:border-black focus:outline-none focus:bg-white"
                    />
                </div>

                <div>
                    <input
                        name='email'
                        id='email'
                        placeholder='enter email address'
                        className="font-medium w-full text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px] bg-[#0000] text-[#000] 
                        border-2 border-gray-400 focus:border-black focus:outline-none focus:bg-white"
                    />
                </div>

            </div> */}

         <form onSubmit={getData}>
            <select
               onChange={(e) => setTenantID(e.target.value)}
               className="font-medium w-full text-[12px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none mt-8"
            >
               {tenant_list.map((item, index) => (
                  <Fragment key={index}>
                     <option value={item.ID}>{item.company_name}</option>
                  </Fragment>
               ))}
            </select>

            {/* <div className='py-4 px-4 grid gap-4'>

                    <div className='flex gap-1'>
                        <input type="radio" id="age1" name="send_by" value="email" onChange={() => setSendBy('email')} />
                        <label htmlFor="age1">Send By email</label>
                    </div>

                    <div className='flex gap-1'>
                        <input type="radio" id="age2" name="send_by" value="text" onChange={() => setSendBy('text')} />
                        <label htmlFor="age2">Send By Text</label>
                    </div>


                </div> */}

            <div className="grid justify-center w-full">
               <button
                  type="submit"
                  className="flex gap-1 justify-center bg-orange-400 border-orange-400  mt-8 text-white border-2 py-2 px-4  
                            rounded-[10px] hover:border-theme"
               >
                  <h1>Add to Project</h1>
               </button>
            </div>
         </form>
      </div>
   )
}
