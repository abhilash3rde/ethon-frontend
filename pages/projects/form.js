import SubHeader from "../../components/tenants/header";
import Link from "next/link";
import Input from "../../components/projects/form/Input";
import { useFormik } from 'formik'
import AddPhoto from "../../components/projects/form/addPhotos";
import { IoTrashOutline } from "react-icons/io5";
import { useState } from "react";
import DeletePhotoPopup from "../../components/tenants/details/deletePhotopopup";
import toast from "react-hot-toast";



function Projectform() {

    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [deleteID, setDeleteID] = useState(true);
    const [deleteType, setDeleteType] = useState('');



    const DeletePopupOpen = (id, type) => {
        setDeleteID(id)
        setDeleteType(type)
        setShowDeletePopup(true)
    }

    const DeletePopupClose = () => {
        setShowDeletePopup(false)
    }


    const deletePhoto = (indexDelete) => {
        const photos = ProjectsFormik.values.photos.filter((item, index) => index !== indexDelete)
        ProjectsFormik.setFieldValue("photos", [...photos])
        toast.success('Photo delete Successfully')
        setShowDeletePopup(false)
    }


    const ProjectsFormik = useFormik({
        initialValues: {
            name: '',
            date: '',
            details: '',
            photos: []


        },
        onSubmit: (values) => {
            try {

                console.log(values)

            } catch (error) {

            }
        }
    })



    return (
        <div className="App">
            <header className="z-50 bg-[#fff] pt-4 pt-2 shadow-[1px_5px_13px_2px_#0000000d] overflow-scroll ">
                <SubHeader title={'Add Project'} backUrl={'/projects/list'} />
            </header>

            <div className="px-4 pb-16 pt-6 ">
                <div>
                    <div>
                        {/* Company Info */}
                        <div className="pb-4">
                            <span className="text-[15px] text-gray-500">
                                Company Info
                            </span>
                            <hr className="my-1 border-t-2" />
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            <Input
                                name={'name'}
                                placeholder={'Full Name'}
                                value={'name'}
                                formik={ProjectsFormik}
                            />

                            <div className="flex w-[70%]">
                                <Input
                                    name={'date'}
                                    placeholder={'Emter Date'}
                                    value={'date'}
                                    type={'date'}
                                    formik={ProjectsFormik}
                                />
                            </div>

                            <div className="flex ">
                                <textarea
                                    name='details'
                                    id="details"
                                    placeholder='Enter Details'
                                    onChange={ProjectsFormik.handleChange}
                                    value={ProjectsFormik.values.details}
                                    rows="4"
                                    className='font-medium w-full text-[15px] py-[10px] px-[10px] rounded-[5px]
                                    bg-[#FFF] text-[#000] border-2 border-[#cfcfcf8f] focus:border-black focus:outline-none'
                                />
                            </div>

                            {/* add contractor and tenants btn */}

                            <div className="grid grid-cols-1 gap-2 mt-4 w-[70%]">

                                <div
                                    className="flex gap-1 justify-center bg-orange-400 border-orange-400 text-white border-2 py-2 px-4  
                                         rounded-[10px] hover:border-theme">
                                    <h1>Add Contractor</h1>
                                </div>

                                <div
                                    className="flex gap-1 justify-center bg-orange-400 border-orange-400 text-white border-2 py-2 px-4  
                                         rounded-[10px] hover:border-theme">
                                    <h1>Add Tenants</h1>
                                </div>

                            </div>

                            <div className="pb-4">
                                <span className="text-[15px] text-gray-500">
                                    Add Photos
                                </span>
                                <hr className="my-1 border-t-2" />
                            </div>

                            <AddPhoto formik={ProjectsFormik} />

                            <div className="grid mt-[50px] grid-cols-2 gap-x-[2px] gap-y-[15px]">
                                {ProjectsFormik?.values?.photos?.map((item, index) =>

                                    <div key={index} className='h-32 w-32 shadow-sm rounded-md group relative '>
                                        <img
                                            src={item.image}
                                            alt={"Photo"}
                                            className="w-full object-cover rounded-md object-center h-full"
                                        />

                                        <div
                                            className="absolute bg-white shadow-lg top-1 right-1 rounded-[10px] w-[40px] h-[40px] text-center"
                                            onClick={() => DeletePopupOpen(index, 'deletePhoto')
                                            }>
                                            <IoTrashOutline className="text-[25px] text-red-500 mt-[7px] ml-[8px] " />
                                        </div>

                                    </div>

                                )}
                            </div>

                        </div>

                        <DeletePhotoPopup

                            deletePhoto={() => {
                                if (deleteType === 'deletePhoto') {
                                    deletePhoto(deleteID)
                                } else {
                                    // deletePhotoapi(deleteID)

                                }
                            }}
                            datashow={showDeletePopup ? "block" : "hidden"}
                            onClicked={DeletePopupClose}

                        />




                    </div>
                </div>
            </div>



            <div className="fixed bottom-0 left-0 w-full shadow-[1px_-10px_13px_2px_#0000000d] " >
                <div className="grid grid-cols-2 w-full bg-[#fff] ">
                    <div className="flex justify-center">
                        <div className="w-full flex justify-center">
                            <button
                                type="submit"
                                className="text-white px-4 py-2 w-full mx-auto bg-blue-500"
                                onClick={() => ProjectsFormik.handleSubmit()}
                            >Save</button>
                        </div>
                    </div>

                    <Link href='/projects/list'>
                        <div className="flex justify-center" >
                            <div className="px-4 py-2 w-full mx-auto w-full flex justify-center bg-red-100 text-red-600">
                                <span className="">CANCEL</span>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>



        </div>
    )
}
export default Projectform;