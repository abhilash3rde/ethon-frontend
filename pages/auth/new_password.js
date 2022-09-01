import { useEffect } from 'react'
import { data } from 'autoprefixer'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { postNewAPI } from '../../redux/APIS/API'
import toast from 'react-hot-toast'
import Image from 'next/image'
import logo from '../../public/smi-logo.png'

function NewPassword() {
   const [showpassword, setShowpassword] = useState(false)
   const [showConformpass, setShowConformpass] = useState(false)

   const router = useRouter()

   const validate = (values) => {
      const errors = {}

      if (!values.password) {
         errors.password = 'Please Enter Password'
      }

      if (!values.confirm) {
         errors.confirm = 'Please Enter Confirm password'
      }

      if (values.password !== values.confirm) {
         errors.confirm = 'password not match'
      }

      return errors
   }

   const getUserid = router.query.user_id
   console.log(getUserid)

   const Newfarmik = useFormik({
      initialValues: {
         password: '',
         confirm: ''
      },
      validate,
      onSubmit: async (values) => {
         try {
            let data = { password: values.password, user_id: `${getUserid}` }
            const respon = await postNewAPI(data)
            toast.success(respon.data.message)
            router.push('/')
         } catch (error) {
            console.log(error.response)
            router.push('')
            toast.error(error.response.data.message)
         }
      }
   })

   useEffect(() => {
      if (getUserid) {
         console.log('user id found')
      } else {
         router.push('/')
         console.log('user id not found')
      }
   }, [])

   return (
      <div className="forget-page w-full h-screen overflow-x-hidden flex items-center ">
         <div className="w-[90%] sm:w-[50%] mx-auto">
            <div className="grid grid-cols-1 mb-[30px] ">
               <div className="logo-wrapper">
                  <div className="smi-logo">
                     <Image src={logo} />
                  </div>
               </div>
            </div>

            <form
               method="POST"
               onSubmit={Newfarmik.handleSubmit}
               className="sm:px-[50px] px-[10px] py-[30px] sm:shadow-[0_0_8px_3px_#a0a0a11f] rounded-[7px] bg-[#fff]"
            >
               <div className="grid grid-cols-1 gap-[20px]">
                  <div className="grid grid-cols-1 relative">
                     <label className="font-medium text-[15px] my-[7px] ">
                        Password
                     </label>
                     <div className="relative">
                        <input
                           name="password"
                           id="password"
                           type={showpassword ? 'text' : 'password'}
                           onChange={Newfarmik.handleChange}
                           value={Newfarmik.values.password}
                           placeholder="Enter Your Password"
                           className="font-medium text-[15px]  w-full h-[50px] py-[10px] px-[20px] rounded-[5px]
                                 bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme active:border-theme focus:outline-none"
                        />

                        <span
                           onClick={() => setShowpassword(!showpassword)}
                           title={
                              showpassword ? 'Show Password' : 'Hide Password'
                           }
                           className="font-mono cursor-pointer text-[1.5em] bg-white pl-2 
                                absolute right-3 bottom-3"
                        >
                           {showpassword ? <BsEye /> : <BsEyeSlash />}
                        </span>
                     </div>

                     {Newfarmik.errors.password && (
                        <span className="text-red-500">
                           {Newfarmik.errors.password}
                        </span>
                     )}
                  </div>

                  <div className="grid grid-cols-1 relative">
                     <label className="font-medium text-[15px] my-[7px]">
                        Confirm Password
                     </label>
                     <div className="relative">
                        <input
                           name="confirm"
                           id="confirm"
                           type={showConformpass ? 'text' : 'password'}
                           placeholder="Enter Your Password"
                           onChange={Newfarmik.handleChange}
                           value={Newfarmik.values.confirm}
                           className="font-medium text-[15px] w-full h-[50px] py-[10px] px-[20px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme active:border-theme focus:outline-none"
                        />
                        <span
                           onClick={() => setShowConformpass(!showConformpass)}
                           title={
                              showConformpass
                                 ? 'Show Password'
                                 : 'Hide Password'
                           }
                           className="font-mono cursor-pointer text-[1.5em] bg-white pl-2 
                                    absolute right-3 bottom-3"
                        >
                           {showConformpass ? <BsEye /> : <BsEyeSlash />}
                        </span>
                     </div>
                     {Newfarmik.errors.confirm && (
                        <span className="text-red-500">
                           {Newfarmik.errors.confirm}
                        </span>
                     )}
                  </div>
               </div>

               <div className="grid grid-cols-1 w-full justify-items-start">
                  <div className="grid grid-cols-1 sm:w-[50%] mt-[1.5em] mb-[1em] text-center">
                     <button
                        type="submit"
                        className="text-[#fff] font-medium bg-theme
                            py-[12px] rounded-[5px] px-[50px] hover:opacity-[0.85]"
                     >
                        Submit
                     </button>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                     <Link href="/">
                        <a className="font-medium text-[#000] text-[18px] font-[600]">
                           Sign in to Account
                        </a>
                     </Link>
                  </div>
               </div>
            </form>
         </div>
      </div>
   )
}

export default NewPassword
