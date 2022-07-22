// import NavigationButton from "../../components/tenants/details/navigation_button";
import SubHeader from "../../components/tenants/header";
import { useFormik } from 'formik';
import { postTenantsAPI } from "../../redux/APIS/API";
import toast from 'react-hot-toast';
import { useRouter } from 'next/router'
import Customtype from "../../components/tenants/details/customtype";
import { useState, useEffect } from "react";




function TanantsFrom() {

    const [custom, setCustom] = useState(false)

    const [images, setImage] = useState();


    function Closecustom() {
        setCustom(false)
    }

    // const validate = (values) => {
    //     const errors = {};

    //     if (!values.company_name) {
    //         errors.company_name = "Please Enter Company Name"
    //     }

    //     if (!values.address) {
    //         errors.address = "Please Enter address Name"
    //     }

    //     if (!values.unit) {
    //         errors.unit = "Please Enter Unit"
    //     }


    //     if (!values.city) {
    //         errors.city = "Please Enter city Name"
    //     }

    //     if (!values.state) {
    //         errors.state = "Please Enter State "
    //     }


    //     if (!values.zip_code) {
    //         errors.zip_code = "Please Enter zip Code"
    //     }

    //     if (!values.title) {
    //         errors.title = "Please Enter title "
    //     }


    //     if (!values.phone_number) {
    //         errors.phone_number = "Please Enter Phone Number"
    //     }

    //     if (!values.email) {
    //         errors.email = "Please Enter email Number"
    //     }

    //     if (!values.fname) {
    //         errors.fname = "Please Enter fname Number"
    //     }

    //     if (!values.lname) {
    //         errors.lname = "Please Enter lname"
    //     }

    //     if (!values.status) {
    //         errors.status = "Please Enter Status"
    //     }

    //     if (!values.status) {
    //         errors.status = "Please Enter Status"
    //     }

    //     if (!values.complex) {
    //         errors.complex = "Please Enter Complex"
    //     }





    //     if (!values.contact_phone) {
    //         errors.contact_phone = "Please Enter Contact Phone"
    //     }

    //     if (!values.contact_email) {
    //         errors.contact_email = "Please Enter Contact Email"
    //     }

    //     if (!values.lname) {
    //         errors.lname = "Please Enter lname"
    //     }

    //     if (!values.notes) {
    //         errors.notes = "Please Enter Notes"
    //     }

    //     if (!values.photos) {
    //         errors.photos = "Please Enter Photos"
    //     }

    //     if (!values.photos_details) {
    //         errors.photos_details = "Please Enter Photos Details"
    //     }

    //     return errors;

    // }


    const router = useRouter()

    const TanantsFramik = useFormik({
        initialValues: {
            company_name: "",
            street_address: "",
            unit: "",
            city: "",
            state: "",
            zip_code: "",
            phone_number: "",
            phone_number_type: "",
            primary_email: "",
            status: "",
            complex: "",

            primary_fname: "",
            primary_lname: "",
            primary_title: "",
            primary_phone: "",
            primary_phone_type: "",
            primary_second_phone: "",
            primary_second_phone_type: "",
            primary_contact_email: "",

            secondary_fname: "",
            secondary_lname: "",
            secondary_title: "",
            secondary_primary_phone: "",
            secondary_primary_phone_type: "",
            secondary_phone: "",
            secondary_phone_type: "",
            secondary_contact_email: "",

            notes: "",

            photos: "",
            // photos_details: "",

        },
        // validate,
        onSubmit: async values => {
            try {
                
                // const respon = await postTenantsAPI(values)
                // toast.success(respon.data.message)
                // console.log(respon.message)
                 console.log(values)
                // router.push('/tenants/tenants_list')

            } catch (error) {
                toast.error(error.response.data.message);
                console.log(error.response)
            }
        }
    })


    useEffect(() => {

        if (TanantsFramik.values.phone_number_type === 'customas') {
            setCustom('phone_number_type')
        }

        if (TanantsFramik.values.primary_phone_type === 'custom') {
            setCustom('primary_phone_type')
        }

        if (TanantsFramik.values.primary_second_phone_type === 'custom') {
            setCustom('primary_second_phone_type')
        }


        if (TanantsFramik.values.secondary_primary_phone_type === 'custom') {
            setCustom('secondary_primary_phone_type')
        }

        if (TanantsFramik.values.secondary_phone_type === 'custom') {
            setCustom('secondary_phone_type')
        }


    }, [
        TanantsFramik.values.phone_number_type,
        TanantsFramik.values.primary_phone_type,
        TanantsFramik.values.primary_second_phone_type,
        TanantsFramik.values.secondary_primary_phone_type,
        TanantsFramik.values.secondary_phone_type
    ])







    return (
        <div className="App">
            <header className="z-50 bg-[#fff] pt-2  shadow-[1px_5px_13px_2px_#0000000d] sticky top-0 overflow-hidden">
                <SubHeader title={"Add Tenants"} backUrl={'/tenants/tenants_list'} />
            </header>

            <div className="px-4 pb-16 pt-6 ">
                <form method="POST" onSubmit={TanantsFramik.handleSubmit}>

                    {/* Company Info */}
                    <div>
                        <div className="pb-4">
                            <span className="text-[15px] text-gray-500">Company Info</span>
                            <hr className="my-1 border-t-2" />
                        </div>

                        <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-[20px] gap-[10px] sm:my-[10px]'>

                            <div className='grid grid-cols-1'>
                                <input
                                    name="company_name"
                                    id="company_name"
                                    placeholder="Company Name"
                                    onChange={TanantsFramik.handleChange}
                                    value={TanantsFramik.values.company_name}
                                    className="font-medium text-[15px] h-[50px] py-[10px] px-[20px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none"
                                />
                            </div>
                            {TanantsFramik.errors.company_name &&
                                <span className='text-red-500'>{TanantsFramik.errors.company_name}</span>
                            }

                            <div className='grid grid-cols-1'>
                                <input
                                    name="street_address"
                                    id="street_address"
                                    placeholder="Street Address"
                                    onChange={TanantsFramik.handleChange}
                                    value={TanantsFramik.values.street_address}
                                    className="font-medium text-[15px] h-[50px] py-[10px] px-[20px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                />
                            </div>

                            {TanantsFramik.errors.street_address &&
                                <span className='text-red-500'>{TanantsFramik.errors.street_address}</span>
                            }
                            <div className='grid grid-cols-1'>
                                <input
                                    name="unit"
                                    id="unit"
                                    placeholder="Unit #"
                                    onChange={TanantsFramik.handleChange}
                                    value={TanantsFramik.values.unit}
                                    className="font-medium text-[15px] h-[50px] py-[10px] px-[20px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                />
                            </div>

                            {TanantsFramik.errors.unit &&
                                <span className='text-red-500'>{TanantsFramik.errors.unit}</span>
                            }
                            <div className='flex gap-2'>
                                <div className="w-[40%]">
                                    <input
                                        name="city"
                                        id="city"
                                        placeholder="City"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.city}
                                        className="font-medium w-full text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    />
                                    {TanantsFramik.errors.city &&
                                        <span className='text-red-500'>{TanantsFramik.errors.city}</span>
                                    }
                                </div>


                                <div className="w-[30%]">
                                    <input
                                        name="state"
                                        id="state"
                                        placeholder="State"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.state}
                                        className="font-medium  w-full text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    />
                                    {TanantsFramik.errors.state &&
                                        <span className='text-red-500'>{TanantsFramik.errors.state}</span>
                                    }
                                </div>



                                <div className="w-[30%]">
                                    <input
                                        name="zip_code"
                                        id="zip_code"
                                        placeholder="Zip"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.zip_code}
                                        className="font-medium  w-full text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    />


                                    {TanantsFramik.errors.zip_code &&
                                        <span className='text-red-500'>{TanantsFramik.errors.zip_code}</span>
                                    }
                                </div>



                            </div>


                            <div className='flex gap-2'>
                                <div className="w-[65%]">
                                    <input
                                        name="phone_number"
                                        id="phone_number"
                                        placeholder="Primary Phone"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.phone_number}
                                        className="font-medium w-full text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    />
                                    {TanantsFramik.errors.phone_number &&
                                        <span className='text-red-500'>{TanantsFramik.errors.phone_number}</span>
                                    }
                                </div>



                                <div className="w-[35%]">
                                    <select
                                        name="phone_number_type"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.phone_number_type}
                                        className="font-medium w-full text-[12px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                     bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none"

                                    >
                                        <option value="Mobile">Mobile</option>
                                        <option value="Work">Work</option>
                                        <option value="Office">Office</option>
                                        <option value="Work fax">Work fax</option>
                                        <option value="Other">Other</option>
                                        <option value='customas'>Custom</option>
                                    </select>

                                    <Customtype
                                        custom_name={custom}
                                        Formik={TanantsFramik}
                                        custom_value={TanantsFramik.values[custom]}
                                        datashow={custom ? "block" : "hidden"}
                                        onClicked={Closecustom}
                                    />

                                </div>
                            </div>


                            <div className='flex gap-2'>

                                <div className="w-[100%]">
                                    <input
                                        name="primary_email"
                                        id="primary_email"
                                        placeholder="Primary Email"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.primary_email}
                                        className="font-medium  w-full text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    />
                                    {TanantsFramik.errors.primary_email &&
                                        <span className='text-red-500'>{TanantsFramik.errors.primary_email}</span>
                                    }
                                </div>

                            </div>

                        </div>


                        <div className='grid sm:grid-cols-2 grid-cols-1 py-4 sm:gap-[20px] gap-[10px] sm:my-[10px]'>

                            <div className='grid grid-cols-1 gap-2 '>
                                <div>
                                    <span className="text-[15px] text-gray-500">Status:</span>

                                    <select
                                        name="status"
                                        id=""
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.status}
                                        className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                        bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none">
                                        <option selected>Choose Status</option>
                                        <option value="Vacant">Vacant</option>
                                        <option value="Occupied">Occupied</option>
                                    </select>

                                    {TanantsFramik.errors.status &&
                                        <span className='text-red-500'>{TanantsFramik.errors.status}</span>
                                    }
                                </div>

                                <div>
                                    <span className="text-[15px] text-gray-500">Complex:</span>

                                    <select
                                        name="complex"
                                        id=""
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.complex}
                                        className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                        bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none">
                                        <option selected>Choose Complex</option>
                                        <option value="Oakland">Oakland</option>
                                        <option value="Oakland Court">Oakland Court</option>
                                    </select>

                                    {TanantsFramik.errors.complex &&
                                        <span className='text-red-500'>{TanantsFramik.errors.complex}</span>
                                    }

                                </div>
                            </div>

                        </div>


                        <div className='grid sm:grid-cols-2 grid-cols-1 pt-2 sm:gap-[20px] gap-[10px] sm:my-[10px]'>

                            <div>
                                <div className="pt-4">
                                    <span className="text-[15px] text-gray-500">Primary Contact Info</span>
                                    <hr className="my-1 border-t-2" />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 gap-2'>
                                <div className="">
                                    <input
                                        name="primary_fname"
                                        id="primary_fname"
                                        placeholder="First Name"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.primary_fname}
                                        className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    />
                                    {TanantsFramik.errors.primary_fname &&
                                        <span className='text-red-500'>{TanantsFramik.errors.primary_fname}</span>
                                    }
                                </div>



                                <div className="">
                                    <input
                                        name="primary_lname"
                                        id="primary_lname"
                                        placeholder="Last Name"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.primary_lname}
                                        className="font-medium  w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    />
                                    {TanantsFramik.errors.lname &&
                                        <span className='text-red-500'>{TanantsFramik.errors.primary_lname}</span>
                                    }
                                </div>
                            </div>



                            <div className='flex gap-2'>
                                <div className="w-[100%]">
                                    <input
                                        name="primary_title"
                                        id="primary_title"
                                        placeholder="Title"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.primary_title}
                                        className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    />
                                </div>
                            </div>

                            {TanantsFramik.errors.primary_title &&
                                <span className='text-red-500'>{TanantsFramik.errors.primary_title}</span>
                            }

                            <div className='flex gap-2'>
                                <div className="w-[65%]">
                                    <input
                                        name="primary_phone"
                                        id="primary_phone"
                                        placeholder="Primary Phone"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.primary_phone}
                                        className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                         bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    />

                                    {TanantsFramik.errors.primary_phone &&
                                        <span className='text-red-500'>{TanantsFramik.errors.primary_phone}</span>
                                    }
                                </div>

                                <div className="w-[35%]">
                                    <select
                                        name='primary_phone_type'
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.primary_phone_type}
                                        className="font-medium w-full text-[12px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                        bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none"
                                    >
                                        <option value="Mobile">Mobile</option>
                                        <option value="Work">Work</option>
                                        <option value="Office">Office</option>
                                        <option value="Work fax">Work fax</option>
                                        <option value="Other">Other</option>
                                        <option value='custom'>Custom</option>
                                    </select>

                                    {/* <Customtype
                                        custom_name='primary_phone_type'
                                        Formik={TanantsFramik.handleChange}
                                        custom_value={TanantsFramik.values.primary_phone_type}
                                        datashow={custom? "block" : "hidden"}
                                        onClicked={Closecustom}
                                    /> */}
                                </div>
                            </div>

                            <div className='flex gap-2'>
                                <div className="w-[65%]">
                                    <input
                                        name="primary_second_phone"
                                        id="primary_second_phone"
                                        placeholder="Secondary Phone"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.primary_second_phone}
                                        className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                         bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    />

                                    {TanantsFramik.errors.primary_second_phone &&
                                        <span className='text-red-500'>{TanantsFramik.errors.primary_second_phone}</span>
                                    }
                                </div>

                                <div className="w-[35%]">
                                    <select
                                        name='primary_second_phone_type'
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.primary_second_phone_type}
                                        className="font-medium w-full text-[12px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                        bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none"
                                    >
                                        <option value="Mobile">Mobile</option>
                                        <option value="Work">Work</option>
                                        <option value="Office">Office</option>
                                        <option value="Work fax">Work fax</option>
                                        <option value="Other">Other</option>
                                        <option value='custom'>Custom</option>
                                    </select>

                                    {/* <Customtype
                                        custom_name='primary_second_phone_type'
                                        Formik={TanantsFramik.handleChange}
                                        custom_value={TanantsFramik.values.primary_second_phone_type}
                                        datashow={custom? "block" : "hidden"}
                                        onClicked={Closecustom}
                                    /> */}
                                </div>
                            </div>



                            <div className='flex gap-2'>
                                <div className="w-[100%]">
                                    <input
                                        name="primary_contact_email"
                                        id="primary_contact_email"
                                        placeholder="Contact Email"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.primary_contact_email}
                                        className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    />


                                    {TanantsFramik.errors.primary_contact_email &&
                                        <span className='text-red-500'>{TanantsFramik.errors.primary_contact_email}</span>
                                    }
                                </div>

                            </div>

                        </div>

                        <div className='grid sm:grid-cols-2 grid-cols-1 pt-2 sm:gap-[20px] gap-[10px] sm:my-[10px]'>

                            <div>
                                <div className="pt-4">
                                    <span className="text-[15px] text-gray-500">Secondary Contact Info</span>
                                    <hr className="my-1 border-t-2" />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 gap-2'>
                                <div className="">
                                    <input
                                        name="secondary_fname"
                                        id="secondary_fname"
                                        placeholder="First Name"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.secondary_fname}
                                        className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    />
                                    {TanantsFramik.errors.secondary_fname &&
                                        <span className='text-red-500'>{TanantsFramik.errors.secondary_fname}</span>
                                    }
                                </div>



                                <div className="">
                                    <input
                                        name="secondary_lname"
                                        id="secondary_lname"
                                        placeholder="Last Name"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.secondary_lname}
                                        className="font-medium  w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    />
                                    {TanantsFramik.errors.secondary_lname &&
                                        <span className='text-red-500'>{TanantsFramik.errors.secondary_lname}</span>
                                    }
                                </div>
                            </div>



                            <div className='flex gap-2'>
                                <div className="w-[100%]">
                                    <input
                                        name="secondary_title"
                                        id="secondary_title"
                                        placeholder="Title"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.secondary_title}
                                        className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    />
                                </div>
                            </div>

                            {TanantsFramik.errors.secondary_title &&
                                <span className='text-red-500'>{TanantsFramik.errors.secondary_title}</span>
                            }

                            <div className='flex gap-2'>
                                <div className="w-[65%]">
                                    <input
                                        name="secondary_primary_phone"
                                        id="secondary_primary_phone"
                                        placeholder="Primary Phone"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.secondary_primary_phone}
                                        className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                         bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    />

                                    {TanantsFramik.errors.secondary_primary_phone &&
                                        <span className='text-red-500'>{TanantsFramik.errors.secondary_primary_phone}</span>
                                    }
                                </div>

                                <div className="w-[35%]">
                                    <select
                                        name='secondary_primary_phone_type'
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.secondary_primary_phone_type}
                                        className="font-medium w-full text-[12px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                        bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none"
                                    >
                                        <option value="Mobile">Mobile</option>
                                        <option value="Work">Work</option>
                                        <option value="Office">Office</option>
                                        <option value="Work fax">Work fax</option>
                                        <option value="Other">Other</option>
                                        <option value='custom' >Custom</option>
                                    </select>

                                    {/* <Customtype
                                        custom_name='secondary_primary_phone_type'
                                        Formik={TanantsFramik.handleChange}
                                        custom_value={TanantsFramik.values.secondary_primary_phone_type}
                                        datashow={custom? "block" : "hidden"}
                                        onClicked={Closecustom}
                                    /> */}
                                </div>
                            </div>

                            <div className='flex gap-2'>
                                <div className="w-[65%]">
                                    <input
                                        name="secondary_phone"
                                        id="secondary_phone"
                                        placeholder="Secondary Phone"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.secondary_phone}
                                        className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                         bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    />

                                    {TanantsFramik.errors.secondary_phone &&
                                        <span className='text-red-500'>{TanantsFramik.errors.secondary_phone}</span>
                                    }
                                </div>

                                <div className="w-[35%]">
                                    <select

                                        name='secondary_phone_type'
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.secondary_phone_type}
                                        className="font-medium w-full text-[12px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                        bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none"
                                    >
                                        <option value="Mobile">Mobile</option>
                                        <option value="Work">Work</option>
                                        <option value="Office">Office</option>
                                        <option value="Work fax">Work fax</option>
                                        <option value="Other">Other</option>
                                        <option value='custom' >Custom</option>
                                    </select>

                                    {/* <Customtype
                                        custom_name='secondary_phone_type'
                                        Formik={TanantsFramik.handleChange}
                                        custom_value={TanantsFramik.values.secondary_phone_type}
                                        datashow={custom? "block" : "hidden"}
                                        onClicked={Closecustom}
                                    /> */}
                                </div>
                            </div>



                            <div className='flex gap-2'>
                                <div className="w-[100%]">
                                    <input
                                        name="secondary_contact_email"
                                        id="secondary_contact_email"
                                        placeholder="Contact Email"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.secondary_contact_email}
                                        className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    />

                                    {TanantsFramik.errors.secondary_contact_email &&
                                        <span className='text-red-500'>{TanantsFramik.errors.secondary_contact_email}</span>
                                    }
                                </div>
                            </div>
                        </div>


                        <div className='grid sm:grid-cols-2 grid-cols-1 py-0 sm:gap-[20px] gap-[10px] sm:my-[10px]'>

                            <div>
                                <div className="pt-4">
                                    <span className="text-[15px] text-gray-500">Notes</span>
                                    <hr className="my-1 border-t-2" />
                                </div>
                            </div>

                            <div className='flex gap-2'>
                                <div className="w-[100%]">
                                    <textarea
                                        name="notes"
                                        id="notes"
                                        placeholder="Enter Notes"
                                        rows="4"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.notes}
                                        className="font-medium w-full text-[13px] py-[10px] px-[5px] rounded-[5px]
                                        bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    >
                                    </textarea>


                                    {TanantsFramik.errors.notes &&
                                        <span className='text-red-500'>{TanantsFramik.errors.notes}</span>
                                    }
                                </div>
                            </div>

                        </div>


                        <div className='grid sm:grid-cols-2 grid-cols-1 py-0 sm:gap-[20px] gap-[10px] sm:my-[10px]'>

                            <div>
                                <div className="pt-4">
                                    <span className="text-[15px] text-gray-500">Add Photos</span>
                                    <hr className="my-1 border-t-2" />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 gap-2'>
                                <div className="w-[100%]">
                                    <input
                                        name="photos"
                                        id="photos"
                                        type="file"
                                        accept='image/*'
                                        className="py-2 w-full"
                                        // onChange={(event) => {
                                        //     TanantsFramik.setFieldValue('photos', event.target.files[0]);
                                        // }}

                                        onChange={(event)=>setImage(event.target.files[0])}
                                        value={TanantsFramik.photos}
                                    />


                                    {TanantsFramik.errors.photos &&
                                        <span className='text-red-500'>{TanantsFramik.errors.photos}</span>
                                    }
                                </div>

                                <div className="w-[100%]">
                                    <textarea
                                        name="photos_details"
                                        id="photos_details"
                                        placeholder="Enter photo details"
                                        rows="4"
                                        onChange={TanantsFramik.handleChange}
                                        value={TanantsFramik.values.photos_details}
                                        className="font-medium w-full text-[13px] py-[10px] px-[5px] rounded-[5px]
                                        bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                                    >
                                    </textarea>


                                    {TanantsFramik.errors.photos_details &&
                                        <span className='text-red-500'>{TanantsFramik.errors.photos_details}</span>
                                    }
                                </div>


                            </div>

                        </div>


                        <div className="fixed bottom-0 left-0 w-full shadow-[1px_-10px_13px_2px_#0000000d] " >

                            <div className="grid grid-cols-2 gap-[1px] w-full bg-[#fff] ">
                                <div className="py-2 bg-white flex justify-center">
                                    <div className="w-full flex justify-center">
                                        <button type="submit" className="text-white px-4 py-2 w-[70%] mx-auto bg-blue-500 rounded-[10px]">Save</button>
                                    </div>
                                </div>

                                <div className=" bg-white py-2 flex justify-center">
                                    <div className="px-4 py-2 w-[70%] mx-auto w-full flex justify-center bg-red-100 text-red-600 
                                        rounded-[10px] ">
                                        <span className="">CANCEL</span>
                                    </div>
                                </div>

                            </div>

                        </div>



                    </div>


                </form>
            </div>

        </div>
    )

}

export default TanantsFrom;