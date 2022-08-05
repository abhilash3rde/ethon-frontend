import { useRouter } from "next/router";
import Link from "next/link";
import { useFormik, setFieldValue } from 'formik';
import SubHeader from "../../components/tenants/header";
import Input from "../../components/contractors/form/ConInput";



function ContractorsForm() {

    const router = useRouter();

    const ContractorFormik = useFormik({
        initialValues: {
            name: '',
           
        },
        onSubmit: values => {

            console.log(values)


        }
    })


    return (
        <div className="App">
            <header className="z-50 bg-[#fff] pt-4 pt-2 shadow-[1px_5px_13px_2px_#0000000d] overflow-hidden">
                <SubHeader title={"Add Contractors"} backUrl={'/contractors/list'} />
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
                                    name={'company'}
                                    placeholder={'Company Name'}
                                    formik={ContractorFormik}
                                />

                                <Input
                                    name={'account_number'}
                                    placeholder={'Account Name'}
                                    formik={ContractorFormik}
                                />

                            </div>



                        </div>
                    </div>


                    <div className="fixed bottom-0 left-0 w-full shadow-[1px_-10px_13px_2px_#0000000d] " >

                        <div className="grid grid-cols-2 w-full bg-[#fff] ">

                            <div className="flex justify-center">
                                <div className="w-full flex justify-center">
                                    <button type="submit" className="text-white px-4 py-2 w-full mx-auto bg-blue-500">Save</button>
                                </div>
                            </div>

                            <Link href='/contractors/list'>
                                <div className="flex justify-center" >
                                    <div className="px-4 py-2 w-full mx-auto w-full flex justify-center bg-red-100 text-red-600">
                                        <span className="">CANCEL</span>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>

                </form>
            </div>




        </div>
    )
}

export default ContractorsForm;