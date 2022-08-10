import { useRouter } from "next/router";
import Link from "next/link";
import { useFormik, setFieldValue } from 'formik';
import SubHeader from "../../components/tenants/header";
import Input from "../../components/contractors/form/ConInput";
import Select from "../../components/contractors/form/Select";
import { useState, useEffect } from "react";
import Custom from "../../components/contractors/form/custom";
import { EditContractorsAPI, postContratorsAPI } from "../../redux/APIS/API";
import { useSelector } from "react-redux";
import toast from 'react-hot-toast';






function ContractorsForm() {
    const [custom, setCustom] = useState(false);
    const [loader, setLoader] = useState(false);

    function CustomClose() {
        setCustom(false)
    }




    const router = useRouter();

    const userEdit = router.query.edit
    console.log(userEdit)

    const userId = useSelector((state) => state.userActive.user?.id)


    const editContractors = useSelector((state) => state.contractorsDetail.contractorsDetail?.data.data)

    console.log(editContractors, "edit type")


    useEffect(() => {

        if (userEdit) {
            console.log('edit true')
            console.log(userEdit, 'params')
        } else {
            router.push('/contractors/form');
            console.log('add new user')
        }

    }, [])


    const validate = (values) => {
        const errors = {};

        if (!values.company_email) {
            errors.company_email = 'Please enter email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.company_email)) {
            errors.company_email = 'Invalid email address';
        }

        if (!values.primary_email) {
            errors.primary_email = 'Please enter email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.primary_email)) {
            errors.primary_email = 'Invalid email address';
        }

        return errors;
    };


    const ContractorFormik = useFormik({
        initialValues: {
            author: '' + userId,
            company_name: editContractors?.company_name && userEdit ? editContractors?.company_name : "",
            unit: editContractors?.unit && userEdit ? editContractors?.unit : "",
            account_number: editContractors?.account_number && userEdit ? editContractors?.account_number : "",
            street_address: editContractors?.street_address && userEdit ? editContractors?.street_address : "",
            services: editContractors?.services && userEdit ? editContractors?.services : "",
            city: editContractors?.city && userEdit ? editContractors?.city : "",
            state: editContractors?.state && userEdit ? editContractors?.state : "",
            zip: editContractors?.zip && userEdit ? editContractors?.zip : "",
            company_primary_phone: editContractors?.company_primary_phone && userEdit ? editContractors?.company_primary_phone : "",
            company_primary_phone_type: editContractors?.company_primary_phone_type && userEdit ? editContractors?.company_primary_phone_type : "",
            company_secondary_phone: editContractors?.company_secondary_phone && userEdit ? editContractors?.company_secondary_phone : "",
            company_secondary_phone_type: editContractors?.company_secondary_phone_type && userEdit ? editContractors?.company_secondary_phone_type : "",
            company_email: editContractors?.company_email && userEdit ? editContractors?.company_email : "",

            // primary detalis
            primary_fname: editContractors?.primary_fname && userEdit ? editContractors?.primary_fname : "",
            primary_lname: editContractors?.primary_lname && userEdit ? editContractors?.primary_lname : "",
            primary_title: editContractors?.primary_title && userEdit ? editContractors?.primary_title : "",
            primary_phone_type: editContractors?.primary_phone_type && userEdit ? editContractors?.primary_phone_type : "",
            primary_phone: editContractors?.primary_phone && userEdit ? editContractors?.primary_phone : "",
            primary_secondary_number: editContractors?.primary_secondary_number && userEdit ? editContractors?.primary_secondary_number : "",
            primary_secondary_number_type: editContractors?.primary_secondary_number_type && userEdit ? editContractors?.primary_secondary_number_type : "",
            primary_email: editContractors?.primary_email && userEdit ? editContractors?.primary_email : "",

            // notes
            notes: editContractors?.notes && userEdit ? editContractors?.notes : "",

        },
        validate,
        onSubmit: async values => {
            try {

                if (userEdit === "true") {

                    values.tenantId = '' + editTenants_id
                    const respon = await EditContractorsAPI(values)
                    console.log(respon)


                } else {
                    setLoader(true)
                    const respon = await postContratorsAPI(values)
                    console.log(respon)
                    toast.success(respon.data.message)
                    router.push('/contractors/list')
                }
            } catch (error) {
                setLoader(false)
                toast.error(error.response.data.message);
                console.log(error.response)

            }


        }
    })


    // console.log(ContractorFormik.values, "gnahse")

    useEffect(() => {

        if (ContractorFormik.values.services === 'Custom') {
            setCustom('services')
        }

        if (ContractorFormik.values.company_primary_phone_type === 'Custom') {
            setCustom('company_primary_phone_type')
        }

        if (ContractorFormik.values.company_secondary_phone_type === 'Custom') {
            setCustom('company_secondary_phone_type')
        }

        if (ContractorFormik.values.primaryfirst_number_type === 'Custom') {
            setCustom('primaryfirst_number_type')
        }

        if (ContractorFormik.values.primary_secondary_number_type === 'Custom') {
            setCustom('primary_secondary_number_type')
        }


    }, [
        ContractorFormik.values.services,
        ContractorFormik.values.company_primary_phone_type,
        ContractorFormik.values.company_secondary_phone_type,
        ContractorFormik.values.primaryfirst_number_type,
        ContractorFormik.values.primary_secondary_number_type
    ])


    return (
        <div className="App">
            <header className="z-50 bg-[#fff] pt-4 pt-2 shadow-[1px_5px_13px_2px_#0000000d] overflow-hidden">
                {/* <SubHeader title={"Add Contractors"} backUrl={'/contractors/list'} /> */}

                {userEdit ?
                    <SubHeader title={'Edit Contractors'} backUrl={'/contractors/details'} /> :
                    <SubHeader title={'Add Contractors'} backUrl={'/contractors/list'} />
                }
            </header>

            <div className="px-4 pb-16 pt-6 ">
                <form onSubmit={ContractorFormik.handleSubmit}>

                    <div>
                        <div>
                            {/* Company Info */}
                            <div className="pb-4">
                                <span className="text-[15px] text-gray-500">Company Info</span>
                                <hr className="my-1 border-t-2" />
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <Input
                                    name={'company_name'}
                                    placeholder={'Company Name'}
                                    formik={ContractorFormik}
                                />

                                <Input
                                    name={'account_number'}
                                    placeholder={'Account Number'}
                                    type={'number'}
                                    formik={ContractorFormik}
                                />

                                <Select
                                    name={'services'}
                                    formik={ContractorFormik}
                                    option={[
                                        'Christmas Lights',
                                        'Electrical',
                                        'Fire / Hazard ',
                                        'Flags',
                                        'Grease Traps',
                                        'HVAC',
                                        'Irrigation',
                                        'Landscaping',
                                        'Custom',
                                    ]}
                                />

                                <Custom
                                    custom_name={custom}
                                    Formik={ContractorFormik}
                                    custom_value={ContractorFormik.values[custom]}
                                    datashow={custom ? "block" : "hidden"}
                                    onClicked={CustomClose}
                                />

                                <Input
                                    name={'street_address'}
                                    placeholder={'Street Address'}
                                    formik={ContractorFormik}
                                />

                                <Input
                                    name={'unit'}
                                    placeholder={'Apt. / Unit / Bidg.'}
                                    formik={ContractorFormik}
                                />

                                {/* city state zip */}

                                <div className="flex gap-2">
                                    <div className="w-[40%]">
                                        <Input
                                            name={'city'}
                                            placeholder={'City'}
                                            formik={ContractorFormik}
                                        />
                                    </div>

                                    <div className="w-[30%]">
                                        <Input
                                            name={'state'}
                                            placeholder={'State'}
                                            formik={ContractorFormik}
                                        />
                                    </div>


                                    <div className="w-[30%]">
                                        <Input
                                            name={'zip'}
                                            placeholder={'Zip'}
                                            type={'number'}
                                            formik={ContractorFormik}
                                        />
                                    </div>

                                </div>

                                {/* number and email */}

                                <div className="grid gap-2">

                                    <div className="flex gap-1">
                                        <div className="w-[60%]">
                                            <Input
                                                name={'company_primary_phone'}
                                                placeholder={'Primary Phone'}
                                                type={'number'}
                                                formik={ContractorFormik}
                                            />
                                        </div>

                                        <div className="w-[40%]">
                                            <Select
                                                name={'company_primary_phone_type'}
                                                formik={ContractorFormik}
                                                option={[
                                                    'Mobile',
                                                    'Work',
                                                    'Office',
                                                    'Work fax',
                                                    'Other',
                                                    'Custom'
                                                ]}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-1">
                                        <div className="w-[60%]">
                                            <Input
                                                name={'company_secondary_phone'}
                                                placeholder={'Secondary Phone'}
                                                type={'number'}
                                                formik={ContractorFormik}
                                            />
                                        </div>

                                        <div className="w-[40%]">
                                            <Select
                                                name={'company_secondary_phone_type'}
                                                formik={ContractorFormik}
                                                option={[
                                                    'Mobile',
                                                    'Work',
                                                    'Office',
                                                    'Work fax',
                                                    'Other',
                                                    'Custom'
                                                ]}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Input
                                            name={'company_email'}
                                            placeholder={'Primary Email'}
                                            formik={ContractorFormik}
                                            validation={ContractorFormik.errors.company_email}
                                        />
                                        {ContractorFormik.errors.company_email &&
                                            <span className='text-red-500 text-[12px]'>{ContractorFormik.errors.company_email}</span>
                                        }
                                    </div>

                                </div>


                                {/* Company Info */}
                                <div className="pb-4">
                                    <span className="text-[15px] text-gray-500">Contact Info</span>
                                    <hr className="my-1 border-t-2" />
                                </div>

                                <div className="grid gap-2">



                                    <Input
                                        name={'primary_fname'}
                                        placeholder={'First Name'}
                                        formik={ContractorFormik}
                                    />


                                    <Input
                                        name={'primary_lname'}
                                        placeholder={'Last Name'}
                                        formik={ContractorFormik}
                                    />


                                    <Input
                                        name={'primary_title'}
                                        placeholder={'Title'}
                                        formik={ContractorFormik}
                                    />


                                    {/* number and email */}

                                    <div className="grid gap-2">

                                        <div className="flex gap-1">
                                            <div className="w-[60%]">
                                                <Input
                                                    name={'primary_phone'}
                                                    placeholder={'Primary Phone'}
                                                    type={'number'}
                                                    formik={ContractorFormik}
                                                />
                                            </div>

                                            <div className="w-[40%]">
                                                <Select
                                                    name={'primaryfirst_number_type'}
                                                    formik={ContractorFormik}
                                                    option={[
                                                        'Mobile',
                                                        'Work',
                                                        'Office',
                                                        'Work fax',
                                                        'Other',
                                                        'Custom'
                                                    ]}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex gap-1">
                                            <div className="w-[60%]">
                                                <Input
                                                    name={'primary_secondary_number'}
                                                    placeholder={'Secondary Phone'}
                                                    formik={ContractorFormik}
                                                    type={'number'}
                                                />
                                            </div>

                                            <div className="w-[40%]">
                                                <Select
                                                    name={'primary_secondary_number_type'}
                                                    formik={ContractorFormik}
                                                    option={[
                                                        'Mobile',
                                                        'Work',
                                                        'Office',
                                                        'Work fax',
                                                        'Other',
                                                        'Custom'
                                                    ]}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <Input
                                                name={'primary_email'}
                                                placeholder={'Primary Email'}
                                                formik={ContractorFormik}
                                                validation={ContractorFormik.errors.primary_email}
                                            />

                                            {ContractorFormik.errors.primary_email &&
                                                <span className='text-red-500 text-[12px]'>{ContractorFormik.errors.primary_email}</span>
                                            }

                                        </div>

                                    </div>
                                </div>

                                <span className="text-[15px] text-gray-500">Add Notes</span>

                                <textarea
                                    name='notes'
                                    id='notes'
                                    onChange={ContractorFormik.handleChange}
                                    value={ContractorFormik.values.notes}
                                    placeholder='Enter Notes'
                                    rows='4'
                                    className="font-medium text-[15px] py-[10px] px-[10px] rounded-[5px]
                                    bg-[#FFF] border-[#cfcfcf8f] w-full text-theme border-2 focus:border-theme focus:outline-none"
                                />


                            </div>



                        </div>
                    </div>


                    <div className="fixed bottom-0 left-0 w-full shadow-[1px_-10px_13px_2px_#0000000d] " >

                        <div className="grid grid-cols-2 w-full bg-[#fff] ">
                            {loader ?

                                <div className="flex justify-center">
                                    <div className="w-full flex justify-center">
                                        <span className="text-white px-4 py-2 w-full mx-auto bg-blue-300 text-center">Save</span>
                                    </div>
                                </div> :

                                <div className="flex justify-center">
                                    <div className="w-full flex justify-center">
                                        <button type="submit" className="text-white px-4 py-2 w-full mx-auto bg-blue-500">Save</button>
                                    </div>
                                </div>

                            }


                            {userEdit ?
                                <Link href='/contractors/details'>
                                    <div className="flex justify-center" >
                                        <div className="px-4 py-2 w-full mx-auto w-full flex justify-center bg-red-100 text-red-600">
                                            <span className="">CANCEL</span>
                                        </div>
                                    </div>
                                </Link> :
                                <Link href='/contractors/list'>
                                    <div className="flex justify-center" >
                                        <div className="px-4 py-2 w-full mx-auto w-full flex justify-center bg-red-100 text-red-600">
                                            <span className="">CANCEL</span>
                                        </div>
                                    </div>
                                </Link>
                            }

                        </div>
                    </div>

                </form>
            </div>




        </div>
    )
}

export default ContractorsForm;