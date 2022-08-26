import { useState } from "react"
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { postTenantsAddPhotosAPI } from "../../../redux/APIS/API";
import { useDispatch, useSelector } from "react-redux";
import { getTenantDetail } from "../../../redux/action/tenants-detail";
import { useRouter } from "next/router";
import { IoTrashOutline } from "react-icons/io5";
import { IoAddSharp } from "react-icons/io5";





function AddPhotoD() {

    const [showPopup, setShowPopup] = useState(true);
    const [selectedImage, setSelectedImage] = useState();

    const dispatch = useDispatch()
    const open = () => {
        setShowPopup(false)
        console.log("false")
    }

    const close = () => {
        setShowPopup(true)
        console.log("true")
    }

    const validate = (values) => {
        const errors = {};

        if (!values.image) {
            errors.image = "Please Select image"
        }

        return errors;
    }


    const router = useRouter()


    const Tenants_id = useSelector((state) => state.tenantsDetails.tenantsDetails?.data?.ID)

    console.log(Tenants_id, 'Tenants_id id')

    const userId = useSelector((state) => state.userActive.user?.id)
    console.log(userId, 'Tenants_id id')

    const PhotoFormik = useFormik({
        initialValues: {
            image: '',
            detail: '',
        },
        // validate,
        onSubmit: async (values, { resetForm }) => {
            try {
                const respon = await postTenantsAddPhotosAPI({
                    "post_id": Tenants_id,
                    "author": userId,
                    "photos": [values]
                })
                toast.success(respon.data.message)
                setShowPopup(true)
                dispatch(getTenantDetail(Tenants_id))
                resetForm();

            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
    })


    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };


    return (
        <div>

            <div className="flex justify-end items-center mb-[10px]">
                <div
                    className="w-[50%] flex justify-center ">
                    <div
                        onClick={open}
                        className="w-[100%] py-[13px] mx-auto flex text-[12px] justify-center text-white bg-orange-400 
                                    rounded-[10px] hover:bg-bg-orange-200 hover:text-white">
                        <span className="">ADD PHOTOS</span>
                    </div>
                </div>
            </div>
            <div
                className={showPopup ? "hidden" : "block"}
            >
                <div className='h-screen transition-all bg-[#22222238] w-full fixed z-[100] top-0 left-0 overflow-hidden backdrop-blur-[1px]'>


                    <form method='POST' onSubmit={PhotoFormik.handleSubmit}>

                        <div className="">

                            <div className="absolute w-[80%] top-[22%] left-[10%] mx-auto bg-white rounded-[10px]">
                                <div className="text-black text-center px-4 pt-8">

                                    {/* <input
                                        type='file'
                                        capture='environment'
                                        accept='image/*'
                                        name="image"
                                        id="image"
                                        onChange={async (e) => {
                                            const file = e.target.files[0];
                                            const base64 = await convertToBase64(file);
                                            PhotoFormik.setFieldValue('image', base64);
                                        }}
                                        value={PhotoFormik.image}
                                        className="font-medium w-full mb-[20px] text-[15px] py-[5px] h-[45px] px-[10px] rounded-[5px]
                                         bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none"
                                    /> */}

                                    <div className="grid grid-cols-2 gap-x-[10px] mb-4">



                                        <label className="w-full flex flex-col items-center  py-[5px] h-[35px] px-[10px] bg-white text-blue rounded-lg 
                                        tracking-wide bg-[#cfcfcf8f] cursor-pointer">
                                            <span className="mt-1 text-[12px] leading-normal">Take Photo</span>
                                            <input
                                                type='file'
                                                capture='environment'
                                                accept='image/*'
                                                name="image"
                                                id="image"
                                                onChange={async (e) => {
                                                    const file = e.target.files[0];
                                                    const base64 = await convertToBase64(file);
                                                    // setSelectedImage(base64)
                                                    PhotoFormik.setFieldValue('image', base64);
                                                }}
                                                value={PhotoFormik.image}
                                                className='hidden'
                                            />
                                        </label>



                                        <label className="w-full flex flex-col items-center py-[5px] h-[35px] bg-white text-blue rounded-lg 
                                        tracking-wide bg-[#cfcfcf8f] cursor-pointer">
                                            <span className="mt-1 text-[12px] leading-normal">Choose Photo</span>
                                            <input
                                                type='file'
                                                accept='image/*'
                                                name="image"
                                                id="image"
                                                onChange={async (e) => {
                                                    const file = e.target.files[0];
                                                    const base64 = await convertToBase64(file);
                                                    // setSelectedImage(base64)
                                                    PhotoFormik.setFieldValue('image', base64);
                                                }}
                                                value={PhotoFormik.image}
                                                className='hidden'
                                            />
                                        </label>



                                    </div>

                                    <div className='mb-4 flex gap-2'>
                                        <label className="w-[50px] justify-center flex flex-col items-center py-[5px] h-[50px] bg-white text-blue rounded-lg 
                                        tracking-wide cursor-pointer border-2 border-black border-dashed">
                                            {/* <span className="mt-1 text-[12px] leading-normal">Choose Photo</span> */}
                                            <IoAddSharp className="text-2xl " />
                                            <input
                                                type='file'
                                                accept='image/*'
                                                name="image"
                                                id="image"
                                                onChange={async (e) => {
                                                    const file = e.target.files[0];

                                                    const base64 = await convertToBase64(file);
                                                    setSelectedImage(base64)
                                                    PhotoFormik.setFieldValue('image', base64);
                                                }}
                                                value={PhotoFormik.image}
                                                className='hidden'
                                            />
                                        </label>



                                        {PhotoFormik.values.image &&
                                            <div className='h-[50px] w-[50px] rounded-md shadow-lg mb-4 group relative '>
                                                <img
                                                    src={PhotoFormik.values.image}
                                                    className="w-full object-cover rounded-md object-center h-full"
                                                />
                                            </div>
                                        }
                                    </div>


                                    <textarea
                                        rows="6"
                                        placeholder="Enter Your Details"
                                        name="detail"
                                        id="detail"
                                        onChange={PhotoFormik.handleChange}
                                        value={PhotoFormik.values.detail}
                                        className="font-medium w-full text-[15px] py-[5px] px-[10px] rounded-[5px]
                                      bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none"
                                    />



                                </div>

                                <div className="flex justify-center mt-4">

                                    <div
                                        className="bg-[#fb923c] rounded-bl-[10px] w-[50%] flex justify-center">
                                        <button type="submit" className=" py-4 w-[100%] mx-auto w-full flex justify-center text-black 
                                            rounded-[10px] ">
                                            Add
                                        </button >
                                    </div>

                                    <button
                                        onClick={() => {
                                            PhotoFormik.handleReset()
                                            setShowPopup(true)
                                        }}

                                        type='reset'
                                        className=" bg-[#9e9e9e4f] rounded-br-[10px] w-[50%]  flex justify-center">
                                        <div className=" py-4 w-[100%] mx-auto w-full flex justify-center text-black 
                                            rounded-[10px] ">
                                            <span className="">Cancel</span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default AddPhotoD;