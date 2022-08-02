import { useState } from "react"
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { postTenantsAddPhotosAPI } from "../../../redux/APIS/API";
import { useDispatch, useSelector } from "react-redux";
import { getTenantDetail } from "../../../redux/action/tenants-detail";
import { useRouter } from "next/router";



function AddPhoto(props) {

    const [showPopup, setShowPopup] = useState(true);

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

        if (!values.detail) {
            errors.detail = "Please Select Photos Details"
        }

        return errors;
    }


    const router = useRouter()


    // const Tenants_id = useSelector((state) => state.tenantsDetails.tenantsDetails.data.ID)

    // console.log(Tenants_id,'Tenants_id id')
    
    // const userId = useSelector((state) => state.userActive.user?.id)
    // console.log(userId,'Tenants_id id')

    const PhotoFormik = useFormik({
        initialValues: {
            image: '',
            detail: '',
        },
        validate,
        onSubmit: async values => {
            try{
                // const data = {
                //     'photos': [values]
                // }
                // console.log(data)
                // event.preventDefault();
                // console.log(values)
                props.formik.setFieldValue('photos',[...props.formik.values.photos,values])
                console.log(values)
                setShowPopup(true)
            }catch (error){
                console.log(error)
            }


            // try {
            //     const respon = await postTenantsAddPhotosAPI({
            //         "post_id": Tenants_id,
            //         "author": userId,
            //         "photos":[values]
            //     })
            //     toast.success(respon.data.message)
            //     setShowPopup(true)
            //     router.push('/tenants/tenants_list')
            // } catch (error) {
            //     toast.error(error.response.data.message)
            // }
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
                                <div className="text-black text-center px-4 py-8">

                                    <input
                                        type='file'
                                        capture='environment'
                                        accept='image/*'
                                        name="image"
                                        id="image"
                                        onChange={async (e)  => {
                                            const file = e.target.files[0];
                                            const base64 = await convertToBase64(file);
                                            PhotoFormik.setFieldValue('image', base64);
                                        }}
                                        value={PhotoFormik.image}
                                        className="font-medium w-full mb-[20px] text-[15px] py-[5px] h-[45px] px-[10px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none"
                                    />
                                    {PhotoFormik.errors.image &&
                                        <span className='text-red-500 text-[12px]'>{PhotoFormik.errors.image}</span>
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

                                    {PhotoFormik.errors.detail &&
                                        <span className='text-red-500 text-[12px]'>{PhotoFormik.errors.detail}</span>
                                    }

                                    <div className="flex justify-center">

                                        <div
                                            onClick={()=> PhotoFormik.handleSubmit()}
                                            // onSubmit={PhotoFormik.handleSubmit}
                                            className="bg-white w-[50%] py-2 flex justify-center">
                                            <button type="button" className=" py-2 w-[100%] mx-auto w-full flex justify-center text-green-600 
                                        rounded-[10px] ">
                                                Add
                                            </button >
                                        </div>

                                        <div
                                            onClick={close}
                                            className=" bg-white w-[50%]  py-2 flex justify-center">
                                            <div className=" py-2 w-[100%] mx-auto w-full flex justify-center text-gray-500 
                                         rounded-[10px] ">
                                                <span className="">Cancel</span>
                                            </div>
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