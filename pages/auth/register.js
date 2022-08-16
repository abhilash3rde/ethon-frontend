import Link from 'next/link'
import { useFormik } from 'formik';
import { postRegistationAPI } from '../../redux/APIS/API';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsEye, BsEyeSlash } from "react-icons/bs";



function Register() {

    const router = useRouter();
    const [showpassword, setShowpassword] = useState(false);
    const [showRepassword, setShowRepassword] = useState(false);

    const validate = (values) => {
        const errors = {};

        if (!values.fname) {
            errors.fname = 'Please enter first name'
        }

        if (!values.lname) {
            errors.lname = 'Please enter last name'
        }

        if (!values.email) {
            errors.email = 'Please enter email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Please enter password'
        }

        if (!values.re_password) {
            errors.re_password = 'Please Re-Enter your password'
        }

        if (values.password !== values.re_password) {
            errors.re_password = 'password not match'
        }

        return errors;
    };











    const RegiFarmik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            password: '',
            re_password: '',
        },
        validate,
        onSubmit: async values => {
            try {
                
                let data ={
                    fname:values.fname,
                    lname:values.lname,
                    email:values.email,
                    password:values.password,
                    user_type: 'vendor',
                }
                // console.log(data)
                const respon = await postRegistationAPI(data)
               toast.success(respon.data.message)
                router.push('/');
            }
            catch (error) {
                toast.error(error.response.data.message)
            }
        }

    })



    return (


        <div className="register-page w-full flex items-center mt-16 mb-10">

            <div className="w-[90%] sm:w-[50%] mx-auto">

                <div className="grid grid-cols-1 mb-[10px] sm:mb-[30px] ">
                    <h1 className="text-[50px] font-bold mb-[10px] cursor-pointer text-center">SMI</h1>
                </div>


                <form method='POST' onSubmit={RegiFarmik.handleSubmit} className="sm:px-[50px] px-[10px] sm:py-[30px] sm:shadow-[0_0_8px_3px_#a0a0a11f] rounded-[7px] bg-[#fff]" >



                    <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-[20px] gap-[10px] sm:my-[10px]'>

                        <div className='grid grid-cols-1'>
                            <label className="font-medium text-[15px]">First Name</label>
                            <input
                                name="fname"
                                id="fname"
                                placeholder="First Name"
                                onChange={RegiFarmik.handleChange}
                                value={RegiFarmik.values.fname}
                                // required
                                className="font-medium text-[15px] h-[50px] py-[10px] px-[20px] rounded-[5px]
                        bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none"
                            />
                            {RegiFarmik.errors.fname &&
                                <span className='text-red-500'>{RegiFarmik.errors.fname}</span>
                            }
                        </div>

                        <div className='grid grid-cols-1'>
                            <label className="font-medium text-[15px]">Last Name</label>
                            <input
                                name="lname"
                                id="lname"
                                placeholder="Last Name"
                                onChange={RegiFarmik.handleChange}
                                value={RegiFarmik.values.lname}
                                // required
                                className="font-medium text-[15px] h-[50px] py-[10px] px-[20px] rounded-[5px]
                        bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                            />

                            {RegiFarmik.errors.lname &&
                                <span className='text-red-500'>{RegiFarmik.errors.lname}</span>
                            }
                        </div>
                    </div>

                    <div className='grid grid-cols-1 sm:gap-[20px] gap-[10px] my-[10px]'>
                        <div className='grid grid-cols-1'>
                            <label className="font-medium text-[15px]">Enter Your Email</label>
                            <input
                                name="email"
                                id="email"
                                placeholder="Example@gmail.com"
                                type='email'
                                onChange={RegiFarmik.handleChange}
                                value={RegiFarmik.values.email}
                                // required
                                className="font-medium text-[15px] h-[50px] py-[10px] px-[20px] rounded-[5px]
                                 bg-[#FFF] border-[#cfcfcf8f] text-[#000] border-2 focus:border-theme focus:outline-none"
                            />
                            {RegiFarmik.errors.email &&
                                <span className='text-red-500'>{RegiFarmik.errors.email}</span>
                            }
                        </div>
                    </div>



                    <div className='grid grid-cols-1 relative'>

                        <label className="font-medium text-[15px] my-[7px] ">Password</label>
                        <div className='relative'>
                            <input
                                name="password"
                                id="password"
                                type={showpassword ? 'text' : 'password'}
                                onChange={RegiFarmik.handleChange}
                                value={RegiFarmik.values.password}
                                placeholder="Enter Your Password"
                                className="font-medium text-[15px]  w-full h-[50px] py-[10px] px-[20px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme active:border-theme focus:outline-none"
                            />

                            <span
                                onClick={() => setShowpassword(!showpassword)}
                                title={showpassword ? "Show Password" : "Hide Password"}
                                className="font-mono cursor-pointer text-[1.5em] bg-white pl-2 
                                absolute right-3 bottom-3" >
                                {showpassword ? <BsEye /> : <BsEyeSlash />}</span>

                        </div>

                        {RegiFarmik.errors.password &&
                            <span className='text-red-500'>{RegiFarmik.errors.password}</span>
                        }
                    </div>



                    <div className='grid grid-cols-1 relative'>

                        <label className="font-medium text-[15px] my-[7px] ">Re-Enter Password</label>
                        <div className='relative'>
                            <input
                                name="re_password"
                                id="re_password"
                                type={showRepassword ? 'text' : 'password'}
                                onChange={RegiFarmik.handleChange}
                                value={RegiFarmik.values.re_password}
                                placeholder="Enter Your Password"
                                className="font-medium text-[15px]  w-full h-[50px] py-[10px] px-[20px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme active:border-theme focus:outline-none"
                            />

                            <span
                                onClick={() => setShowRepassword(!showRepassword)}
                                title={showRepassword ? "Show Password" : "Hide Password"}
                                className="font-mono cursor-pointer text-[1.5em] bg-white pl-2 
                                absolute right-3 bottom-3" >
                                {showRepassword ? <BsEye /> : <BsEyeSlash />}</span>

                        </div>

                        {RegiFarmik.errors.re_password &&
                            <span className='text-red-500'>{RegiFarmik.errors.re_password}</span>
                        }
                    </div>


                    <div className='grid grid-cols-1 w-full justify-items-start'>

                        <div className='grid grid-cols-1 w-full sm:w-[50%] mt-[1.5em] text-center'>
                            <button type="submit" className="text-[#fff] font-medium bg-theme
                            py-[12px] rounded-[5px] px-[50px] hover:opacity-[0.85]">Submit</button>
                        </div>

                    </div>

                </form>

                <div className="flex flex-col sm:flex-row items-left mt-6 justify-center sm:justify-between">
                            <Link href="/">
                                <a className="font-medium text-[#000] text-[18px] font-[600]">Have an account? Sign in</a>
                            </Link>
                        </div>
            </div>
        </div>
    )
}

export default Register;