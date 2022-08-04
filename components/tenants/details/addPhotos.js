import { useState } from "react"
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { postTenantsAddPhotosAPI } from "../../../redux/APIS/API";
import { useDispatch, useSelector } from "react-redux";
import { getTenantDetail } from "../../../redux/action/tenants-detail";
import { useRouter } from "next/router";
import { IoTrashOutline } from "react-icons/io5";




function AddPhoto(props) {

    const [showPopup, setShowPopup] = useState(true);
    const [selectedImage, setSelectedImage] = useState();

    const router = useRouter()

    const open = () => {
        setShowPopup(false)
        console.log("false")
    }

    const close = () => {
        setShowPopup(true)
        console.log("true")
    }


    const PhotoFormik = useFormik({
        initialValues: {
            image: '',
            detail: '',
        },
        onSubmit: async (values, { resetForm }) => {
            try {
                props.formik.setFieldValue('photos', [...props.formik.values.photos, values])
                console.log(values)
                setShowPopup(true)
                resetForm();
            } catch (error) {
                console.log(error)
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

    // const previewImg = (file) => {
    //     setSelectedImage(file)
    //     console.log(file, 'i am groot')
    // }

          // This function will be triggered when the "Remove This Image" button is clicked
      const removeSelectedImage = () => {
        setSelectedImage();
      };


    return (
        <div>

            <div className="flex justify-end items-center mb-[10px]">
                <div
                    className="w-[50%] flex justify-center ">
                    <div
                        onClick={open}
                        className="w-[100%] py-[13px] mx-auto w-full flex text-[12px] justify-center text-white bg-orange-400 
                                    rounded-[10px] hover:bg-bg-orange-200 hover:text-white">
                        <span className="">ADD PHOTOS</span>
                    </div>
                </div>
            </div>
            <div
                className={showPopup ? "hidden" : "block"}
            >
                <div className='h-screen transition-all bg-[#22222238] w-full fixed z-[100] top-0 left-0 overflow-hidden backdrop-blur-[1px]'>


                    {/* <form method='POST' onSubmit={PhotoFormik.handleSubmit}> */}

                    <div className="">

                        <div className="absolute w-[80%] top-[22%] left-[10%] mx-auto bg-white rounded-[10px]">
                            <div className="text-black text-center px-4 pt-8">

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
                                                setSelectedImage(base64)
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
                                                setSelectedImage(base64)
                                                PhotoFormik.setFieldValue('image', base64);
                                            }}
                                            value={PhotoFormik.image}
                                            className='hidden'
                                        />
                                    </label>



                                </div>
                                {PhotoFormik.values.image &&
                                        <div className='h-20 w-20 rounded-md shadow-lg mb-4 group relative '>
                                            <img
                                                src={PhotoFormik.values.image}
                                                className="w-full object-cover rounded-md object-center h-full"
                                            />
                                        </div>
                                } 

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
                                    onClick={() => PhotoFormik.handleSubmit()}
                                    className="bg-[#fb923c] rounded-bl-[10px] w-[50%] flex justify-center">
                                    <button type="button" className=" py-4 w-[100%] mx-auto w-full flex justify-center text-black 
                                            rounded-[10px] ">
                                        Add
                                    </button >
                                </div>

                                <div
                                    onClick={()=>{
                                        PhotoFormik.handleReset()
                                        setShowPopup(true)
                                    }}
                                    className=" bg-[#9e9e9e4f] rounded-br-[10px] w-[50%]  flex justify-center">
                                    <div className="py-4 w-[100%] mx-auto w-full flex justify-center text-black 
                                            rounded-[10px]">
                                        <span className="">Cancel</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* </fosrm> */}

                </div>
            </div>
        </div>
    )
}

export default AddPhoto;