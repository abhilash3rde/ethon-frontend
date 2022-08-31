import { useFormik } from 'formik'
import Input from '../../components/projects/form/Input'
import { useRouter } from 'next/router'
import axios from 'axios'
import { token } from '../../utils'
import AddPhoto from '../../components/projects/form/addPhotos'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'



const baseAPIURL = 'http://dev.getsmiapp.com/wp-json/'

export default function bids() {
   const router = useRouter()
   const [dataID, setDataID] = useState([])


   const { access_token, access_data, title } = router.query
   // console.log(title, 'projectTitle')

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

   const Bidformik = useFormik({
      initialValues: {
         company_name: '',
         first_name: '',
         last_name: '',
         email_id: '',
         phone_number: '',
         bid_price: '',
         additional_info: '',
         photos: []
      },
      onSubmit: async (values, { resetForm }) => {
         try {

            values.project_id = dataID[0]
            values.contractor_id = dataID[1]
            console.log(values, 'data')
            const data = values
            const respon = await axios.post(baseAPIURL + `api/v1/bid/create`, data, token())
            console.log(respon.data.data.bid_id)
            const bid_id = respon.data.data.bid_id
            const photoData = {
               bid: bid_id,
               author: dataID[1],
               photos: values.photos
            }
            const responPhotos = await axios.post(baseAPIURL + `api/v1/bid/add_document`, photoData, token())
            console.log(responPhotos, 'photos data')
            resetForm();
            toast.success("Proposal sent successfully")

         } catch (error) {
            console.log(error)
         }
      }
   })



   return (
      <div className="px-4 py-6">
         <div className="logo">
            <div className="grid grid-cols-1 items-left">
               <h1 className="md:text-5xl font-bold cursor-pointer text-left text-4xl">
                  Logo
               </h1>
            </div>
         </div>

         <div className="py-4">
            <h1 className="font-bold cursor-pointer text-left text-1xl">
               Submit Quote For :{' '}
            </h1>
            <p className="cursor-pointer text-left text-[15px] ">
               {title}
            </p>
         </div>

         <div className="grid gap-2">
            <div>
               <Input
                  name={'company_name'}
                  placeholder={'Company Name'}
                  formik={Bidformik}
               />
            </div>

            <div className="grid grid-cols-2 gap-2">
               <Input
                  name={'first_name'}
                  placeholder={'First Name*'}
                  formik={Bidformik}
               />

               <Input
                  name={'last_name'}
                  placeholder={'Last name*'}
                  formik={Bidformik}
               />
            </div>

            <div className="grid grid-cols-2 gap-2">
               <Input
                  name={'email_id'}
                  placeholder={'Email*'}
                  type={'email'}
                  formik={Bidformik}
               />

               <Input
                  name={'phone_number'}
                  placeholder={'Phone Number * '}
                  type={'number'}
                  formik={Bidformik}
               />
            </div>

            <div>
               <Input
                  name={'bid_price'}
                  placeholder={'Quote Amount*'}
                  formik={Bidformik}
               />
            </div>

            <div>
               <textarea
                  name="additional_info"
                  placeholder="Enter additional details about the project"
                  rows="4"
                  onChange={Bidformik.handleChange}
                  value={Bidformik.values.additional_info}
                  className="font-medium w-full text-[12px] py-[10px] px-[10px] rounded-[5px] bg-[#FFF] text-[#000] border-2 border-[#cfcfcf8f] focus:border-black focus:outline-none"
               />
            </div>

            <span className='text-[12px] text-gray-400 '>Upload Proof of Liability Insurance*</span>
            <AddPhoto formik={Bidformik} />


            <div className="grid mt-[25px] grid-cols-2 gap-x-[2px] gap-y-[15px]">
               {Bidformik?.values?.photos?.map((item, index) => (
                  <div
                     key={index}
                     className="h-32 w-32 shadow-sm rounded-md group relative "
                  >
                     <img
                        src={item.image}
                        alt={'Photo'}
                        className="w-full object-cover rounded-md object-center h-full"
                     />
                  </div>
               ))}
            </div>


            <div className="grid w-full justify-items-center my-4 gap-4">
               <div
                  onClick={() => Bidformik.handleSubmit()}
                  className="flex gap-1 w-full justify-center border-orange-400 bg-orange-400 text-white
                         border-2 py-2 px-4 rounded-[10px] hover:border-theme"
               >
                  <h1>Send Quote</h1>
               </div>

               <div
                  onClick={() => {
                     router.push(`/bid/?access_token=${access_token}&access_data=${access_data}`)
                  }}
                  className="flex gap-1 w-full justify-center border-orange-400 bg-white-400 text-black
                         border-2 py-2 px-4 rounded-[10px] hover:border-theme"
               >
                  <h1>CANCEL, Go Back</h1>
               </div>
            </div>
         </div>
      </div >
   )
}
