import SubHeader from '../../components/tenants/header'
import Link from 'next/link'
import Input from '../../components/projects/form/Input'
import { useFormik } from 'formik'
import AddPhoto from '../../components/projects/form/addPhotos'
import { IoTrashOutline } from 'react-icons/io5'
import { useEffect, useState } from 'react'
import DeletePhotoPopup from '../../components/tenants/details/deletePhotopopup'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import {
   deleteProjectPhotoAPI,
   EditProjectAPI,
   postProjectsAPI,
   postProjectsPhotosAPI
} from '../../redux/APIS/API'
import Select from '../../components/projects/form/Select'
import { useRouter } from 'next/router'

function Projectform() {
   const [showDeletePopup, setShowDeletePopup] = useState(false)
   const [deleteID, setDeleteID] = useState(true)
   const [deleteType, setDeleteType] = useState('')
   const [photosApi, setPhotos] = useState([])

   const router = useRouter()

   const DeletePopupOpen = (id, type) => {
      setDeleteID(id)
      setDeleteType(type)
      setShowDeletePopup(true)
   }

   const DeletePopupClose = () => {
      setShowDeletePopup(false)
   }

   const userId = useSelector((state) => state.userActive?.user?.id)
   const editProject = useSelector(
      (state) => state.projectDetails.details?.data?.data
   )

   const ProjectEdit = router.query.edit

   useEffect(() => {
      if (ProjectEdit) {
         console.log(ProjectEdit)
         setPhotos([...editProject.photos])
      } else {
         // router.push('/projects/form')
      }
   }, [])

   const ProjectsFormik = useFormik({
      initialValues: {
         author: '' + userId,
         status: editProject?.status && ProjectEdit ? editProject?.status : '',
         services:
            editProject?.services && ProjectEdit ? editProject?.services : '',
         project_name:
            editProject?.project_name && ProjectEdit
               ? editProject?.project_name
               : '',
         project_date:
            editProject?.project_date && ProjectEdit
               ? editProject?.project_date
               : '',
         project_detail:
            editProject?.project_detail && ProjectEdit
               ? editProject?.project_detail
               : '',
         photos: []
      },
      onSubmit: async (values) => {
         try {
            if (ProjectEdit === 'true') {
               const editProjectID = editProject.ID
               values.project_id = '' + editProjectID
               const respon = await EditProjectAPI(values)
               console.log(respon)
               const data = {
                  project_id: '' + editProjectID,
                  author: '' + userId,
                  photos: values.photos
               }
               console.log(data)
               const AddPhotos = await postProjectsPhotosAPI(data)
               console.log(AddPhotos)
               router.push('/projects/list')
            } else {
               const respon = await postProjectsAPI(values)
               console.log(respon)
               toast.success(respon.data.message)
               const Addproject_id = respon.data.data.project_id
               console.log(Addproject_id)
               const data = {
                  project_id: '' + Addproject_id,
                  author: '' + userId,
                  photos: values.photos
               }
               console.log(data)
               const AddPhotos = await postProjectsPhotosAPI(data)
               console.log(AddPhotos)
               router.push('/projects/list')
            }
         } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
            console.log('err', error.response)
         }
      }
   })

   const deletePhoto = (indexDelete) => {
      const photos = ProjectsFormik.values.photos.filter(
         (item, index) => index !== indexDelete
      )
      ProjectsFormik.setFieldValue('photos', [...photos])
      toast.success('Photo deleted Successfully')
      setShowDeletePopup(false)
   }

   const deletePhotoAPI = async (id) => {
      const ProjectId = editProject.ID
      let data = {
         project_id: ProjectId,
         photo_ids: [id]
      }
      console.log(data)
      const respon = await deleteProjectPhotoAPI(data)
      console.log(respon)
      const photos = photosApi.filter((item) => item.photo_id !== id)
      toast.success('Photo deleted Successfully')
      setShowDeletePopup(false)
      setPhotos([...photos])
   }

   function data() {
      alert('data in my world')
   }

   return (
      <div className="App">
         <header className="z-50 bg-[#fff] pt-2 shadow-[1px_5px_13px_2px_#0000000d] overflow-scroll ">
            {ProjectEdit ? (
               <SubHeader
                  title={'Edit Project'}
                  backUrl={'/projects/details'}
               />
            ) : (
               <SubHeader title={'Add Project'} backUrl={'/projects/list'} />
            )}
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
                        name={'project_name'}
                        placeholder={'Full Name'}
                        // value={'project_name'}
                        formik={ProjectsFormik}
                     />

                     <div className="grid grid-cols-2 gap-2">
                        <Select
                           name={'status'}
                           formik={ProjectsFormik}
                           option={['Draft', 'Progress', 'Publish']}
                        />

                        <Input
                           name={'services'}
                           placeholder={'Enter Services'}
                           // value={'services'}
                           formik={ProjectsFormik}
                        />
                     </div>

                     <div className="flex w-[70%]">
                        <Input
                           name={'project_date'}
                           placeholder={'Emter Date'}
                           // value={'project_date'}
                           type={'date'}
                           formik={ProjectsFormik}
                        />
                     </div>

                     <div className="flex ">
                        <textarea
                           name="project_detail"
                           id="project_detail"
                           placeholder="Enter Details"
                           onChange={ProjectsFormik.handleChange}
                           value={ProjectsFormik.values.project_detail}
                           rows="4"
                           className="font-medium w-full text-[15px] py-[10px] px-[10px] rounded-[5px]
                                    bg-[#FFF] text-[#000] border-2 border-[#cfcfcf8f] focus:border-black focus:outline-none"
                        />
                     </div>

                     {/* add contractor and tenants btn */}

                     <div className="grid grid-cols-1 gap-2 mt-4 w-[70%]">
                        {ProjectEdit ? (
                           <div
                              // onClick={() =>
                              //     router.push('/projects/contractor')
                              // }
                              className="flex gap-1 justify-center bg-orange-400 border-orange-400 text-white border-2 py-2 px-4  
                                         rounded-[10px] hover:border-theme"
                           >
                              <h1>Add Contractor</h1>
                           </div>
                        ) : (
                           <div
                              // onClick={() => router.push('/projects/contractor')}
                              className="flex gap-1 justify-center bg-orange-400 border-orange-400 text-white border-2 py-2 px-4  
                                         rounded-[10px] hover:border-theme"
                           >
                              <h1>Add Contractor</h1>
                           </div>
                        )}

                        <div
                           className="flex gap-1 justify-center bg-orange-400 border-orange-400 text-white border-2 py-2 px-4  
                                         rounded-[10px] hover:border-theme"
                        >
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

                     <div className="grid mt-[25px] grid-cols-2 gap-x-[2px] gap-y-[15px]">
                        {ProjectsFormik?.values?.photos?.map((item, index) => (
                           <div
                              key={index}
                              className="h-32 w-32 shadow-sm rounded-md group relative "
                           >
                              <img
                                 src={item.image}
                                 alt={'Photo'}
                                 className="w-full object-cover rounded-md object-center h-full"
                              />

                              <div
                                 className="absolute bg-white shadow-lg top-1 right-1 rounded-[10px] w-[40px] h-[40px] text-center"
                                 onClick={() =>
                                    DeletePopupOpen(index, 'deletePhoto')
                                 }
                              >
                                 <IoTrashOutline className="text-[25px] text-red-500 mt-[7px] ml-[8px] " />
                              </div>
                           </div>
                        ))}
                        {photosApi?.length > 0 &&
                           photosApi?.map((item, index) => (
                              <div
                                 key={index}
                                 className="h-32 w-32 shadow-sm rounded-md group relative "
                              >
                                 <img
                                    src={item.photo_src}
                                    alt={'Photo'}
                                    className="w-full object-cover rounded-md object-center h-full"
                                 />

                                 <div
                                    className="absolute bg-white shadow-lg top-1 right-1 rounded-[10px] w-[40px] h-[40px] text-center"
                                    onClick={() =>
                                       DeletePopupOpen(
                                          item.photo_id,
                                          'deletePhotoAPI'
                                       )
                                    }
                                 >
                                    <IoTrashOutline className="text-[25px] text-red-500 mt-[7px] ml-[8px] " />
                                 </div>
                              </div>
                           ))}
                     </div>
                  </div>

                  <DeletePhotoPopup
                     deletePhoto={() => {
                        if (deleteType === 'deletePhoto') {
                           deletePhoto(deleteID)
                        } else {
                           deletePhotoAPI(deleteID)
                        }
                     }}
                     datashow={showDeletePopup ? 'block' : 'hidden'}
                     onClicked={DeletePopupClose}
                  />
               </div>
            </div>
         </div>

         <div className="fixed bottom-0 left-0 w-full shadow-[1px_-10px_13px_2px_#0000000d] ">
            <div className="grid grid-cols-2 w-full bg-[#fff] ">
               <div className="flex justify-center">
                  <div className="w-full flex justify-center">
                     <button
                        type="submit"
                        className="text-white px-4 py-2 w-full mx-auto bg-blue-500"
                        onClick={() => ProjectsFormik.handleSubmit()}
                     >
                        Save
                     </button>
                  </div>
               </div>
               {ProjectEdit ? (
                  <Link href="/projects/details">
                     <div className="flex justify-center">
                        <div className="px-4 py-2 w-full mx-auto flex justify-center bg-red-100 text-red-600">
                           <span className="">CANCEL</span>
                        </div>
                     </div>
                  </Link>
               ) : (
                  <Link href="/projects/list">
                     <div className="flex justify-center">
                        <div className="px-4 py-2 w-full mx-auto flex justify-center bg-red-100 text-red-600">
                           <span className="">CANCEL</span>
                        </div>
                     </div>
                  </Link>
               )}
            </div>
         </div>
      </div>
   )
}
export default Projectform
