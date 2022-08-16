// import { useEffect } from "react"
import { useFormik } from 'formik';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { postForgetAPI } from '../../redux/APIS/API';
import toast from 'react-hot-toast';






function Resetpass() {



    const router = useRouter()

    const validate = (values) => {
        const errors = {};
      
        if (!values.email) {
          errors.email = 'Please enter email';
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
      };


    const Forgetfarmik = useFormik({
        initialValues: {
            email: '',
        },
        validate,
        onSubmit: async data => {
            try{
                const respon = await postForgetAPI(data)
                console.log(respon)
                toast.success(respon.data.message)
                router.push(`/auth/new_password?user_id=${respon.data.data.user_id}`)
            }
            catch(error){
                console.log(error.response)
                toast.error(error.response.data.message)
            }
        }
    })
    

    return (
        <div className="forget-page w-full h-screen overflow-x-hidden flex items-center ">

            <div className="w-[90%] sm:w-[50%] mx-auto">

                <div className="grid grid-cols-1 mb-[30px] ">
                    <h1 className="md:text-5xl font-bold mb-[10px] cursor-pointer text-center text-4xl">SMI</h1>
                </div>

 
                <form method='POST' onSubmit={Forgetfarmik.handleSubmit} className="sm:px-[50px] px-[10px] py-[30px] sm:shadow-[0_0_8px_3px_#a0a0a11f] rounded-[7px] bg-[#fff]" >

                    <div className='grid grid-cols-1 gap-[20px]'>

                        <div className='grid grid-cols-1'>
                            <label className="font-medium text-[15px] my-[7px]">Enter Email or Username</label>
                            <input
                                name="email"
                                id="username"
                                placeholder="Example@gmail.com"
                                // required
                                onChange={Forgetfarmik.handleChange}
                                value={Forgetfarmik.values.email}
                                className="font-medium text-[15px] h-[50px] py-[10px] px-[20px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                            />
                            {Forgetfarmik.errors.email &&
                                <span className='text-red-500 font-medium'>{Forgetfarmik.errors.email}</span>
                            }
                        </div>
                    </div>



                    <div className='grid grid-cols-1 w-full justify-items-start'>

                        <div className='grid grid-cols-1 sm:w-[50%] mt-[1.5em] mb-[1em] text-center'>
                            <button type="submit" className="text-[#fff] font-medium bg-theme
                            py-[12px] rounded-[5px] px-[50px] hover:opacity-[0.85]">Send Email</button>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                            <Link href="/">
                            <a className="font-medium text-[#000] text-[18px] font-[600]">Sign in to Account</a>
                            </Link>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default Resetpass;