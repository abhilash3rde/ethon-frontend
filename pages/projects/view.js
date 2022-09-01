import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectFilter } from '../../redux/action/projectFilter'
import { format } from 'date-fns'
import Button from '../../components/projects/form/Button'
import ProjectDecline from '../../components/projects/form/ProjectDecline'
import { useRouter } from 'next/router'

export default function project_view() {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [showPopup, setShowPopup] = useState(false)

   function closePopup() {
      console.log('false')
      setShowPopup(false)
   }

   function openPopup() {
      console.log('true')
      setShowPopup(true)
   }

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const router = useRouter()

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const dispatch = useDispatch()
   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(() => {
      dispatch(getProjectFilter())
   }, [])

   // const item = [{
   //     ID: '123',
   //     project_date: '08-02-2003',
   //     project_name: 'asdad',
   //     status: 'asdas',
   //     services: 'asdasda',
   //     project_detail: 'asdasd',
   //     photos: [{
   //         photo_src: 'https://s29755.pcdn.co/wp-content/uploads/2019/07/FWLIVE_CHI_Web-05.png'
   //     }]
   // }]

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const details_view = useSelector(
      (state) => state.projectDetails.details.data.data
   )
   console.log(details_view)

   return (
      <div className="px-4 py-6">
         <div className="logo">
            <div className="grid grid-cols-1 items-left">
               <h1 className="md:text-5xl font-bold cursor-pointer text-left text-4xl">
                  Logo
               </h1>
            </div>
         </div>

         <div key={details_view} className="grid w-full ">
            <div className="flex w-full items-center">
               <div className="w-full grid my-8">
                  <div className="flex gap-2 asdasd justify-between items-center ">
                     <h1 className="text-[15px] font-[500]">
                        {details_view?.project_name}
                     </h1>
                     <span className="text-[10px] text-gray-400  ">
                        {details_view?.project_date &&
                           format(
                              new Date(details_view?.project_date),
                              'dd-MM-yyyy'
                           )}{' '}
                     </span>
                  </div>

                  <hr className="my-1 border-t-2" />

                  <span className="text-xs  text-black-400">
                     {details_view.project_detail}
                  </span>

                  <div className="py-4">
                     <span className="text-[15px] text-gray-500">Photos</span>
                     <hr className="my-1 border-t-2" />
                  </div>

                  <div className="grid grid-cols-3 gap-1 ">
                     {details_view.photos?.map((item, index) => (
                        <div key={index}>
                           <div className="w-20 h-20 ">
                              <img
                                 src={item.photo_src}
                                 // onClick={() => OpenLight(item.photo_src)
                                 // }
                                 className="h-full object-cover shadow-lg rounded-md object-center w-full"
                              />
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="grid grid-cols-1 w-full justify-items-center my-10">
                     {/* <div className='w-[70%] grid gap-2  '>
                                <div
                                    className="flex gap-1 justify-left bg-orange-400 border-orange-400 text-white border-2 py-2 px-4  
                                         rounded-[10px] hover:border-theme">
                                    <h1>Bid On Project</h1>
                                </div>

                                <div
                                    className="flex gap-1 justify-left bg-orange-400 border-orange-400 text-white border-2 py-2 px-4  
                                         rounded-[10px] hover:border-theme">
                                    <h1>Not Interested</h1>
                                </div>

                            </div> */}

                     <div className="w-[70%] grid gap-6  text-center">
                        <Button
                           href={() => router.push(`/bid`)}
                           name={'Bid On Project'}
                        />
                        <Button
                           href={openPopup}
                           bg={'bg-white '}
                           color={' black'}
                           name={'Not Interested'}
                        />
                     </div>
                  </div>
                  {showPopup && (
                     <ProjectDecline
                        datashow={showPopup ? 'block' : 'hidden'}
                        onClicked={closePopup}
                     />
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}
