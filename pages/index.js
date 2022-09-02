import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
// import { useDispatch } from "react-redux";
import { useFormik } from 'formik'
import { postLoginAPI } from '../redux/APIS/API'
import toast from 'react-hot-toast'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useDispatch } from 'react-redux'
import { UserActive } from '../redux/action/user-active'
import Image from 'next/image'
import logo from '../public/smi-logo.png'

function Login() {
   const [showpassword, setShowpassword] = useState(false)
   const [count, setCount] = useState(0)
   const router = useRouter()

   const dispatch = useDispatch()

   useEffect(() => {
      const tokenVaild = reactLocalStorage.get('token', true)

      console.log(tokenVaild, 'username')
      if (tokenVaild == true) {
         router.push('/')
      } else {
         router.push('/dashboard')
      }
   }, [])

   const validate = (values) => {
      const errors = {}

      if (!values.username) {
         errors.username = 'Please Enter Username'
      }

      if (!values.password) {
         errors.password = 'Please Enter Password'
      }

      return errors
   }

   const Loginfarmik = useFormik({
      initialValues: {
         username: '',
         password: ''
      },
      validate,
      onSubmit: async (data, { resetForm }) => {
         try {
            const respon = await postLoginAPI(data)
            console.log(respon)
            reactLocalStorage.set('token', respon.data.data.token)
            dispatch(UserActive(respon.data.data))
            toast.success(respon.data.message)
            router.push('/dashboard')
         } catch (error) {
            resetForm()
            setCount(() => count + 1)
            console.log(count)
            toast.error(error.response.data.message)
            if (count == 3) {
               console.log('forget go now')
               router.push('/auth/forget_password')
            }
            console.log(error)
         }
      }
   })

   return (
      <div className="Login page w-full h-screen overflow-x-hidden">
         <div className="lg:w-[40%] md:w-[70%]  w-[90%]  mx-auto mt-[75px]">
            <div className="grid grid-cols-1 md:mb-[30px] mb-[15px] items-center ">
               {/*<h1 className="md:text-5xl font-bold mb-[10px] cursor-pointer text-center text-4xl">SMI</h1>*/}
               <div className="logo-wrapper">
                  <div className="smi-logo">
                     <Image src={logo} />
                  </div>
               </div>
            </div>

            <form className="md:px-[50px] px-[10px] py-[30px] md:shadow-[0_0_8px_3px_#a0a0a11f] rounded-[7px]">
               <div className="grid grid-cols-1 gap-[10px]">
                  <div className="grid grid-cols-1">
                     <label className="font-medium text-[15px] my-[7px]">
                        Username
                     </label>
                     <input
                        name="username"
                        id="username"
                        placeholder="Enter Your Username"
                        // required
                        onChange={Loginfarmik.handleChange}
                        value={Loginfarmik.values.username}
                        className="font-medium text-[15px] h-[50px] py-[10px] px-[20px] rounded-[5px]
                                 bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                     />

                     {Loginfarmik.errors.username && (
                        <span className="text-red-500">
                           {Loginfarmik.errors.username}
                        </span>
                     )}
                  </div>

                  <div className="grid grid-cols-1 relative">
                     <label className="font-medium text-[15px] my-[7px] ">
                        Password
                     </label>
                     <div className="relative">
                        <input
                           name="password"
                           id="password"
                           type={showpassword ? 'text' : 'password'}
                           // required
                           onChange={Loginfarmik.handleChange}
                           value={Loginfarmik.values.password}
                           placeholder="Enter Your Password"
                           className="font-medium text-[15px] w-full h-[50px] py-[10px] px-[20px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme active:border-theme focus:outline-none"
                        />
                        <span
                           onClick={() => setShowpassword(!showpassword)}
                           // title={showpassword? "Show Password": "Hide Password" }
                           className="font-mono cursor-pointer text-[1.5em] bg-white pl-2 
                            absolute right-3 bottom-3"
                        >
                           {showpassword ? <BsEye /> : <BsEyeSlash />}
                        </span>
                     </div>
                     {Loginfarmik.errors.password && (
                        <span className="text-red-500">
                           {Loginfarmik.errors.password}
                        </span>
                     )}
                  </div>

                  <div className="flex flex-col justify-between">
                     <Link href="/auth/forget_password">
                        <a className="font-medium text-theme underline text-[15px]">
                           Forgot password and username?
                        </a>
                     </Link>
                  </div>
               </div>

               <div className="grid grid-cols-1 w-full justify-items-start">
                  <div className="grid grid-cols-1 w-[60%] mt-[2em] mb-[1em] text-center">
                     <button
                        onClick={Loginfarmik.handleSubmit}
                        className="text-[#fff] font-medium bg-theme
                            py-[12px] rounded-[5px] px-[50px] hover:opacity-[0.85] shadow-lg shadow-black-500/40"
                     >
                        Login
                     </button>
                  </div>
               </div>

               <div className="grid grid-cols-1 w-full justify-items-start mt-2">
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                     <Link href="/auth/register">
                        <a className="font-medium text-[#000] text-[18px] tracking-[.025em]">
                           Create New Account{' '}
                        </a>
                     </Link>
                  </div>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Login
