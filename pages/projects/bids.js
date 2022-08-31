// import React from 'react'
// import { useFormik } from 'formik'
// import Input from '../../components/projects/form/Input'
// import { useRouter } from 'next/router'


import React from 'react'

const bids = () => {
  return (
    <div>
      
    </div>
  )
}

export default bids


// export default function bids() {

//     const router = useRouter();

//     const Bidformik = useFormik({
//         initialValues: {
//             company_name: '',
//             first_name: '',
//             last_name: '',
//             email: '',
//             phone_number: '',
//             quote_amount: '',
//             details: ''
//         },
//         onSubmit: (values) => {
//             console.log(values, 'data')
//             router.push('/projects/details')
//         }

//     })



//     return (
//         <div className='px-4 py-6'>
//             <div className='logo'>
//                 <div className="grid grid-cols-1 items-left">
//                     <h1 className="md:text-5xl font-bold cursor-pointer text-left text-4xl">Logo</h1>
//                 </div>
//             </div>

//             <div className='py-4'>
//                 <h1 className="font-bold cursor-pointer text-left text-1xl">Submit Quote For : </h1>
//                 <p className="cursor-pointer text-left text-[15px] ">Resurface Parking Lot</p>
//             </div>

//             <div className='grid gap-2'>
//                 <div>
//                     <Input
//                         name={'company_name'}
//                         placeholder={'Company Name'}
//                         formik={Bidformik}
//                     />
//                 </div>

//                 <div className='grid grid-cols-2 gap-2'>
//                     <Input
//                         name={'first_name'}
//                         placeholder={'First Name*'}
//                         formik={Bidformik}
//                     />

//                     <Input
//                         name={'last_name'}
//                         placeholder={'Last name*'}
//                         formik={Bidformik}
//                     />
//                 </div>

//                 <div className='grid grid-cols-2 gap-2'>
//                     <Input
//                         name={'email'}
//                         placeholder={'Email*'}
//                         type={'email'}
//                         formik={Bidformik}
//                     />

//                     <Input
//                         name={'phone_number'}
//                         placeholder={'Phone Number * '}
//                         type={'number'}
//                         formik={Bidformik}
//                     />
//                 </div>


//                 <div>
//                     <Input
//                         name={'quote_amount'}
//                         placeholder={'Quote Amount*'}
//                         formik={Bidformik}
//                     />
//                 </div>

//                 <div>
//                     <textarea
//                         name='details'
//                         placeholder='Company Name'
//                         rows='4'
//                         onChange={Bidformik.handleChange}
//                         value={Bidformik.values.details}
//                         className="font-medium w-full text-[15px] py-[10px] px-[10px] rounded-[5px] bg-[#FFF] text-[#000] border-2 border-[#cfcfcf8f] focus:border-black focus:outline-none"
//                     />
//                 </div>

//                 <div className='grid w-full justify-items-center my-8 gap-4'>
//                     <div
//                         onClick={() => Bidformik.handleSubmit()}
//                         className="flex gap-1 w-full justify-center border-orange-400 bg-orange-400 text-white
//                          border-2 py-2 px-4 rounded-[10px] hover:border-theme">
//                         <h1>Send Quote</h1>
//                     </div>

//                     <div
//                         onClick={() => router.push('/projects/view')}
//                         className="flex gap-1 w-full justify-center border-orange-400 bg-white-400 text-black
//                          border-2 py-2 px-4 rounded-[10px] hover:border-theme">
//                         <h1>CANCEL, Go Back</h1>
//                     </div>
//                 </div>


//             </div>


//         </div>
//     )
// }
