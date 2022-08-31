import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import Button from '../../components/projects/form/Button'
import ProjectDecline from '../../components/projects/form/ProjectDecline'
import { useRouter } from 'next/router'
import axios from 'axios'
import { token } from '../../utils'
import toast from 'react-hot-toast'


const baseAPIURL = 'http://dev.getsmiapp.com/wp-json/'

export default function Project_view() {
   const [showPopup, setShowPopup] = useState(false)
   const [isLoading, setIsLoading] = useState(true)
   const [dataID, setDataID] = useState([])
   const [projectData, setProjectData] = useState([])

   function closePopup() {
      console.log('false')
      setShowPopup(false)
   }

   function openPopup() {
      console.log(dataID, 'true')
      setShowPopup(true)
   }


   const router = useRouter()
   const { access_token, access_data } = router.query
   // console.log(access_token, 'user token')





   useEffect(() => {
      if (access_data) {
         function b64DecodeUnicode(str) {
            let code64 = decodeURIComponent(
               atob(str)
                  .split('')
                  .map(function (c) {
                     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
                  })
                  .join('')
            )

            return code64.split('@')
         }

         const ans = b64DecodeUnicode(access_data)
         setDataID(ans)

      }

   }, [access_data])


   useEffect(() => {

      const fetchData = async () => {
         try {
            const respon = await axios.post(baseAPIURL + `api/v1/project/get_single_project`, { project_id: dataID[0] }, token())
            // console.log(respon.data.data, 'bids data')
            setProjectData(respon.data.data)

            // const project_data = respon.data.data
            // console.log(project_data)
            // setUser(data)
         } catch (err) {
            console.log(err)
         } finally {
            setIsLoading(false)

            // console.log(user)
         }
      }

      if (dataID.length > 0) {
         fetchData()
      }


   }, [dataID])



   async function notInterested() {
      try {

         let data = {
            "project_id": dataID[0],
            "contractor_id": dataID[1]
         }

         const respon = await axios.post(baseAPIURL + `api/v1/project/not_interested`, data, token())

         // console.log(respon.data.message)
         toast.success(respon.data.message)
         setShowPopup(false)


      } catch (err) {
         console.log(err)
      } finally {
         setIsLoading(false)
      }
   }





   // const details_view = {}

   // console.log(projectData)

   return (
      <div className="px-4 py-6">
         <div className="logo">
            <div className="grid grid-cols-1 items-left">
               <h1 className="md:text-5xl font-bold cursor-pointer text-left text-4xl">
                  Logo
               </h1>
            </div>
         </div>
         {isLoading ? (
            <div className='text-center absolute top-0 left-0 w-full h-screen bg-white flex justify-center items-center'>
               <h2 className='text-[20px] font-bold '>Loading...</h2>
            </div>
         ) : (
            <div>
               <div className="grid w-full ">
                  <div className="flex w-full items-center">
                     <div className="w-full grid my-8">
                        <div className="flex gap-2 asdasd justify-between items-center ">
                           <h1 className="text-[15px] font-[500]">
                              {projectData?.project_name}
                           </h1>
                           <span className="text-[10px] text-gray-400  ">
                              {projectData?.project_date &&
                                 format(
                                    new Date(projectData?.project_date),
                                    'dd-MM-yyyy'
                                 )}{' '}
                           </span>
                        </div>

                        <hr className="my-1 border-t-2" />

                        <span className="text-xs  text-black-400">
                           {projectData.project_detail}
                        </span>

                        <div className="py-4">
                           <span className="text-[15px] text-gray-500">
                              Photos
                           </span>
                           <hr className="my-1 border-t-2" />
                        </div>

                        <div className="grid grid-cols-3 gap-1 ">
                           {projectData.photos?.map((item, index) => (
                              <div key={index}>
                                 <div className="w-20 h-20 ">
                                    <img
                                       src={item.photo_src}
                                       className="h-full object-cover shadow-lg rounded-md object-center w-full"
                                    />
                                 </div>
                              </div>
                           ))}
                        </div>

                        <div className="grid grid-cols-1 w-full justify-items-center my-10">
                           <div className="w-[70%] grid gap-4  text-center">
                              <Button
                                 href={() => {
                                    router.push(
                                       `/bid/form?access_token=${access_token}&access_data=${access_data}&title=${projectData?.project_name}`
                                    )
                                 }}
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
                              onDecline={notInterested}
                              onClicked={closePopup}

                           />
                        )}
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   )
}
