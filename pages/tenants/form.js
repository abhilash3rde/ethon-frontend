// import NavigationButton from "../../components/tenants/details/navigation_button";
import SubHeader from '../../components/tenants/header'
import { useFormik, setFieldValue } from 'formik'
import {
   createNoteAPI,
   deleteTenantsPhotoAPI,
   EditTenantsAPI,
   postTenantsAddPhotosAPI,
   postTenantsAPI
} from '../../redux/APIS/API'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import Customtype from '../../components/tenants/details/customtype'
import { useState, useEffect } from 'react'
import AddPhoto from '../../components/tenants/details/addPhotos'
import { useDispatch, useSelector } from 'react-redux'
import DeletePhotoPopup from '../../components/tenants/details/deletePhotopopup'
import DeleteNotesPopup from '../../components/tenants/details/deleteNotesPopup'
import EditNotesPopup from '../../components/tenants/details/editNotesPopup'
import { IoTrashOutline, IoFlagSharp } from 'react-icons/io5'
import Link from 'next/link'
import { reactLocalStorage } from 'reactjs-localstorage'
import AddNotes from '../../components/tenants/details/addnotes'
import { assignTenantsAPI } from '../../redux/APIS/API'

function TanantsFrom() {
   const [custom, setCustom] = useState(false)
   const [showDeletePopup, setShowDeletePopup] = useState(false)
   const [showNotesPopup, setShowNotesPopup] = useState(false)
   const [showEditNotesPopup, setShowEditNotesPopup] = useState(false)
   const [photosApi, setPhotos] = useState([])
   const [tenantLoader, setTenantLoader] = useState(false)
   const [deleteID, setDeleteID] = useState(true)
   const [deleteType, setDeleteType] = useState('')
   const [detail, setDetail] = useState()
   const [index, setIndex] = useState()

   function Closecustom() {
      setCustom(false)
   }

   const LoaderinActive = () => {
      setTenantLoader(true)
   }

   const DeleteOpen = (id, type) => {
      setDeleteID(id)
      setDeleteType(type)
      setShowDeletePopup(true)
   }

   const DeleteNotes = (id, type) => {
      setDeleteID(id)
      setDeleteType(type)
      setShowNotesPopup(true)
   }

   const DeleteClose = () => {
      setShowDeletePopup(false)
   }

   const dispatch = useDispatch()

   const editTenants = useSelector(
      (state) => state.tenantsDetails.tenantsDetails?.data
   )

   const editTenants_id = useSelector(
      (state) => state.tenantsDetails.tenantsDetails?.data?.ID
   )
   console.log(editTenants, 'Tenants_id id')

   const userId = useSelector((state) => state.userActive.user?.id)
   console.log(userId, 'user id')

   const router = useRouter()
   const userEdit = router.query.edit
   const projectId = router.query.project_id
   console.log(router.query)
   useEffect(() => {
      if (userEdit) {
         console.log('edit true')
         console.log(userEdit, 'params')
         setPhotos([...editTenants.photos])
      } else {
         //router.push('/tenants/form')
      }
   }, [])

   useEffect(() => {
      const tokenVaild = reactLocalStorage.get('token', true)
      if (tokenVaild == true) {
         router.push('/')
      }
   }, [])

   const validate = (values) => {
      const errors = {}

      if (!values.primary_email) {
         errors.primary_email = 'Please enter email'
      } else if (
         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.primary_email)
      ) {
         errors.primary_email = 'Invalid email address'
      }

      if (!values.primary_contact_email) {
         errors.primary_contact_email = 'Please enter email'
      } else if (
         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
            values.primary_contact_email
         )
      ) {
         errors.primary_contact_email = 'Invalid email address'
      }

      if (!values.secondary_contact_email) {
         errors.secondary_contact_email = 'Please enter email'
      } else if (
         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
            values.secondary_contact_email
         )
      ) {
         errors.secondary_contact_email = 'Invalid email address'
      }

      return errors
   }

   const TanantsFramik = useFormik({
      initialValues: {
         author: '' + userId,
         company_name:
            editTenants?.company_name && userEdit
               ? editTenants?.company_name
               : '',
         street_address:
            editTenants?.street_address && userEdit
               ? editTenants?.street_address
               : '',
         unit: editTenants?.unit && userEdit ? editTenants?.unit : '',
         mailbox: editTenants?.mailbox && userEdit ? editTenants?.mailbox : '',
         city: editTenants?.city && userEdit ? editTenants?.city : '',
         state: editTenants?.state && userEdit ? editTenants?.state : '',
         zip_code:
            editTenants?.zip_code && userEdit ? editTenants?.zip_code : '',
         phone_number:
            editTenants?.phone_number && userEdit
               ? editTenants?.phone_number
               : '',
         phone_number_type:
            editTenants?.phone_number_type && userEdit
               ? editTenants?.phone_number_type
               : '',
         primary_email:
            editTenants?.primary_email && userEdit
               ? editTenants?.primary_email
               : '',
         status: editTenants?.status && userEdit ? editTenants?.status : '',
         complex: editTenants?.complex && userEdit ? editTenants?.complex : '',

         primary_fname:
            editTenants?.primary_fname && userEdit
               ? editTenants?.primary_fname
               : '',
         primary_lname:
            editTenants?.primary_lname && userEdit
               ? editTenants?.primary_lname
               : '',
         primary_title:
            editTenants?.primary_title && userEdit
               ? editTenants?.primary_title
               : '',
         primary_phone:
            editTenants?.primary_phone && userEdit
               ? editTenants?.primary_phone
               : '',
         primary_phone_type:
            editTenants?.primary_phone_type && userEdit
               ? editTenants?.primary_phone_type
               : '',
         primary_second_phone:
            editTenants?.primary_second_phone && userEdit
               ? editTenants?.primary_second_phone
               : '',
         primary_second_phone_type:
            editTenants?.primary_second_phone_type && userEdit
               ? editTenants?.primary_second_phone_type
               : '',
         primary_contact_email:
            editTenants?.primary_contact_email && userEdit
               ? editTenants?.primary_contact_email
               : '',

         secondary_fname:
            editTenants?.secondary_fname && userEdit
               ? editTenants?.secondary_fname
               : '',
         secondary_lname:
            editTenants?.secondary_lname && userEdit
               ? editTenants?.secondary_lname
               : '',
         secondary_title:
            editTenants?.secondary_title && userEdit
               ? editTenants?.secondary_title
               : '',
         secondary_primary_phone:
            editTenants?.secondary_primary_phone && userEdit
               ? editTenants?.secondary_primary_phone
               : '',
         secondary_primary_phone_type:
            editTenants?.company_name && userEdit
               ? editTenants?.company_name
               : '',
         secondary_phone:
            editTenants?.secondary_phone && userEdit
               ? editTenants?.secondary_phone
               : '',
         secondary_phone_type:
            editTenants?.secondary_phone_type && userEdit
               ? editTenants?.secondary_phone_type
               : '',
         secondary_contact_email:
            editTenants?.secondary_contact_email && userEdit
               ? editTenants?.secondary_contact_email
               : '',

         notes: editTenants?.notes && userEdit ? editTenants?.notes : [],
         photos: []
      },
      validate,
      onSubmit: async (values) => {
         try {
            if (userEdit === 'true') {
               setTenantLoader(true)
               values.author = '' + userId
               values.tenantId = '' + editTenants_id
               console.log(values)
               const respon = await EditTenantsAPI(values)
               toast.success(respon.data.message)
               const data = {
                  post_id: '' + editTenants_id,
                  author: '' + userId,
                  photos: values.photos
               }
               if (data.photos.length > 0) {
                  const responsive = await postTenantsAddPhotosAPI(data)
               }
               console.log(respon.data)
               setTenantLoader(false)
               router.push('/tenants/list')
            } else if (projectId) {
               setTenantLoader(true)

               const respon = await postTenantsAPI(values)
               console.log(respon.data.data.tenant_id, ' my dataaa')
               const tenant_idd = respon.data.data.tenant_id
               const data = {
                  post_id: '' + tenant_idd,
                  author: '' + userId,
                  photos: values.photos
               }

               if (data.photos.length > 0) {
                  const responsive = await postTenantsAddPhotosAPI(data)
               }

               const response = await assignTenantsAPI({
                  project_id: '' + projectId,
                  tenant_ids: [tenant_idd]
               })

               console.log('assigned tenant succesfully', response)
               toast.success(response.data.message)
               setTenantLoader(false)
               //console.log(respon.message)
               router.push('/projects/list')
            } else {
               console.log('add tenants screen load now')
               setTenantLoader(true)

               const respon = await postTenantsAPI(values)
               console.log(respon.data.data.tenant_id, 'asadasdsd my data')
               const tenant_idd = respon.data.data.tenant_id
               const data = {
                  post_id: '' + tenant_idd,
                  author: '' + userId,
                  photos: values.photos
               }

               if (data.photos.length > 0) {
                  const responsive = await postTenantsAddPhotosAPI(data)
               }
               const Notedata = {
                  post_id: '' + tenant_idd,
                  author: '' + userId,
                  notes: values.notes
               }
               const responNotes = await createNoteAPI(Notedata)
               console.log(responNotes)
               toast.success(respon.data.message)
               setTenantLoader(false)
               router.push('/tenants/list')

            }
         } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
            console.log(error.response)
            setTenantLoader(false)
         }
      }
   })

   useEffect(() => {
      if (TanantsFramik.values.phone_number_type === 'custom') {
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

   const deleteNotes = (indexDelete) => {
      const notes = TanantsFramik.values.notes.filter(
         (item, index) => index !== indexDelete
      )
      TanantsFramik.setFieldValue('notes', [...notes])
      toast.success('Notes deleted Successfully')
      setShowNotesPopup(false)
   }
   const deletePhoto = (indexDelete) => {
      const photos = TanantsFramik.values.photos.filter(
         (item, index) => index !== indexDelete
      )
      TanantsFramik.setFieldValue('photos', [...photos])
      toast.success('Photo deleted Successfully')
      setShowDeletePopup(false)
   }
   const deletePhotoapi = async (id) => {
      try {
         const data = {
            photo_ids: [id]
         }
         await deleteTenantsPhotoAPI(data)
         const photos = photosApi.filter((item) => item.photo_id !== id)
         toast.success('Photo deleted Successfully')
         setShowDeletePopup(false)

         setPhotos([...photos])
      } catch (error) {}
   }
   return (
      <div className="App">
         <header className="z-50 bg-[#fff] pt-2  shadow-[1px_5px_13px_2px_#0000000d] sticky top-0 overflow-hidden">
            {userEdit ? (
               <SubHeader title={'Edit Tenants'} backUrl={'/tenants/details'} />
            ) : (
               <SubHeader title={'Add Tenants'} backUrl={'/tenants/list'} />
            )}
         </header>

         <div className="px-4 pb-16 pt-6 ">
            <form method="POST" onSubmit={TanantsFramik.handleSubmit}>
               {/* Company Info */}
               <div>
                  <div className="pb-4">
                     <span className="text-[15px] text-gray-500">
                        Company Info
                     </span>
                     <hr className="my-1 border-t-2" />
                  </div>

                  <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[20px] gap-[10px] sm:my-[10px]">
                     <div className="grid grid-cols-1">
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
                     {TanantsFramik.errors.company_name && (
                        <span className="text-red-500 text-[12px]">
                           {TanantsFramik.errors.company_name}
                        </span>
                     )}

                     <div className="grid grid-cols-1">
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

                     {TanantsFramik.errors.street_address && (
                        <span className="text-red-500 text-[12px]">
                           {TanantsFramik.errors.street_address}
                        </span>
                     )}
                     <div className="grid grid-cols-2 gap-2">
                        <input
                           name="unit"
                           id="unit"
                           placeholder="Unit #"
                           type="number"
                           onChange={TanantsFramik.handleChange}
                           value={TanantsFramik.values.unit}
                           className="font-medium text-[15px] w-full h-[50px] py-[10px] px-[20px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                        />

                        <input
                           name="mailbox"
                           id="mailbox"
                           placeholder="Mailbox #"
                           type="number"
                           onChange={TanantsFramik.handleChange}
                           value={TanantsFramik.values.mailbox}
                           className="font-medium text-[15px] w-full h-[50px] py-[10px] px-[20px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                        />
                     </div>

                     <div className="flex gap-2">
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
                           {TanantsFramik.errors.city && (
                              <span className="text-red-500 text-[12px]">
                                 {TanantsFramik.errors.city}
                              </span>
                           )}
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
                           {TanantsFramik.errors.state && (
                              <span className="text-red-500 text-[12px]">
                                 {TanantsFramik.errors.state}
                              </span>
                           )}
                        </div>

                        <div className="w-[30%]">
                           <input
                              name="zip_code"
                              id="zip_code"
                              placeholder="Zip"
                              type="number"
                              onChange={TanantsFramik.handleChange}
                              value={TanantsFramik.values.zip_code}
                              className="font-medium  w-full text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                           />

                           {TanantsFramik.errors.zip_code && (
                              <span className="text-red-500 text-[12px]">
                                 {TanantsFramik.errors.zip_code}
                              </span>
                           )}
                        </div>
                     </div>

                     <div className="flex gap-2">
                        <div className="w-[65%]">
                           <input
                              name="phone_number"
                              id="phone_number"
                              placeholder="Primary Phone"
                              type="number"
                              onChange={TanantsFramik.handleChange}
                              value={TanantsFramik.values.phone_number}
                              className="font-medium w-full text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px]
                                bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                           />
                           {TanantsFramik.errors.phone_number && (
                              <span className="text-red-500 text-[12px]">
                                 {TanantsFramik.errors.phone_number}
                              </span>
                           )}
                        </div>

                        <div className="w-[35%]">
                           <select
                              name="phone_number_type"
                              onChange={TanantsFramik.handleChange}
                              value={TanantsFramik.values.phone_number_type}
                              className="font-medium w-full text-[12px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                     bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none"
                           >
                              <option defaultValue="Mobile">Mobile</option>
                              <option value="Work">Work</option>
                              <option value="Office">Office</option>
                              <option value="Work fax">Work fax</option>
                              <option value="Other">Other</option>
                              <option value="custom">Custom</option>
                           </select>

                           <Customtype
                              custom_name={custom}
                              Formik={TanantsFramik}
                              custom_value={TanantsFramik.values[custom]}
                              datashow={custom ? 'block' : 'hidden'}
                              onClicked={Closecustom}
                           />
                        </div>
                     </div>

                     <div className="flex gap-2">
                        <div className="w-[100%]">
                           <input
                              name="primary_email"
                              id="primary_email"
                              placeholder="Primary Email"
                              onChange={TanantsFramik.handleChange}
                              value={TanantsFramik.values.primary_email}
                              className={
                                 TanantsFramik.errors.primary_email
                                    ? 'font-medium w-full text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px] bg-[#FFF] text-[#000] border-2 border-red-500 focus:border-red-500 focus:outline-none'
                                    : 'font-medium w-full text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px] bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none'
                              }
                           />
                           {TanantsFramik.errors.primary_email && (
                              <span className="text-red-500 text-[12px]">
                                 {TanantsFramik.errors.primary_email}
                              </span>
                           )}
                        </div>
                     </div>
                  </div>

                  <div className="grid sm:grid-cols-2 grid-cols-1 py-4 sm:gap-[20px] gap-[10px] sm:my-[10px]">
                     <div className="grid grid-cols-1 gap-2 ">
                        <div>
                           <span className="text-[15px] text-gray-500">
                              Status:
                           </span>

                           <select
                              name="status"
                              id=""
                              onChange={TanantsFramik.handleChange}
                              value={TanantsFramik.values.status}
                              className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                        bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none"
                           >
                              <option selected>Choose Status</option>
                              <option value="Vacant">Vacant</option>
                              <option value="Occupied">Occupied</option>
                           </select>

                           {TanantsFramik.errors.status && (
                              <span className="text-red-500 text-[12px]">
                                 {TanantsFramik.errors.status}
                              </span>
                           )}
                        </div>

                        <div>
                           <span className="text-[15px] text-gray-500">
                              Complex:
                           </span>

                           <select
                              name="complex"
                              id=""
                              onChange={TanantsFramik.handleChange}
                              value={TanantsFramik.values.complex}
                              className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                        bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none"
                           >
                              <option selected>Choose Complex</option>
                              <option value="Oakland">Oakland</option>
                              <option value="Oakland Court">
                                 Oakland Court
                              </option>
                           </select>

                           {TanantsFramik.errors.complex && (
                              <span className="text-red-500 text-[12px]">
                                 {TanantsFramik.errors.complex}
                              </span>
                           )}
                        </div>
                     </div>
                  </div>

                  <div className="grid sm:grid-cols-2 grid-cols-1 pt-2 sm:gap-[20px] gap-[10px] sm:my-[10px]">
                     <div>
                        <div className="pt-4">
                           <span className="text-[15px] text-gray-500">
                              Primary Contact Info
                           </span>
                           <hr className="my-1 border-t-2" />
                        </div>
                     </div>

                     <div className="grid grid-cols-1 gap-2">
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
                           {TanantsFramik.errors.primary_fname && (
                              <span className="text-red-500 text-[12px]">
                                 {TanantsFramik.errors.primary_fname}
                              </span>
                           )}
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
                           {TanantsFramik.errors.primary_lname && (
                              <span className="text-red-500 text-[12px]">
                                 {TanantsFramik.errors.primary_lname}
                              </span>
                           )}
                        </div>
                     </div>

                     <div className="flex gap-2">
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

                     {TanantsFramik.errors.primary_title && (
                        <span className="text-red-500 text-[12px]">
                           {TanantsFramik.errors.primary_title}
                        </span>
                     )}

                     <div className="flex gap-2">
                        <div className="w-[65%]">
                           <input
                              name="primary_phone"
                              id="primary_phone"
                              placeholder="Primary Phone"
                              type="number"
                              onChange={TanantsFramik.handleChange}
                              value={TanantsFramik.values.primary_phone}
                              className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                         bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                           />

                           {TanantsFramik.errors.primary_phone && (
                              <span className="text-red-500 text-[12px]">
                                 {TanantsFramik.errors.primary_phone}
                              </span>
                           )}
                        </div>

                        <div className="w-[35%]">
                           <select
                              name="primary_phone_type"
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
                              <option value="custom">Custom</option>
                           </select>
                        </div>
                     </div>

                     <div className="flex gap-2">
                        <div className="w-[65%]">
                           <input
                              name="primary_second_phone"
                              id="primary_second_phone"
                              placeholder="Secondary Phone"
                              type="number"
                              onChange={TanantsFramik.handleChange}
                              value={TanantsFramik.values.primary_second_phone}
                              className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                         bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                           />

                           {TanantsFramik.errors.primary_second_phone && (
                              <span className="text-red-500 text-[12px]">
                                 {TanantsFramik.errors.primary_second_phone}
                              </span>
                           )}
                        </div>

                        <div className="w-[35%]">
                           <select
                              name="primary_second_phone_type"
                              onChange={TanantsFramik.handleChange}
                              value={
                                 TanantsFramik.values.primary_second_phone_type
                              }
                              className="font-medium w-full text-[12px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                        bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none"
                           >
                              <option value="Mobile">Mobile</option>
                              <option value="Work">Work</option>
                              <option value="Office">Office</option>
                              <option value="Work fax">Work fax</option>
                              <option value="Other">Other</option>
                              <option value="custom">Custom</option>
                           </select>
                        </div>
                     </div>

                     <div className="flex gap-2">
                        <div className="w-[100%]">
                           <input
                              name="primary_contact_email"
                              id="primary_contact_email"
                              placeholder="Contact Email"
                              onChange={TanantsFramik.handleChange}
                              value={TanantsFramik.values.primary_contact_email}
                              className={
                                 TanantsFramik.errors.primary_contact_email
                                    ? 'font-medium w-full text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px] bg-[#FFF] text-[#000] border-2 border-red-500 focus:border-red-500 focus:outline-none'
                                    : 'font-medium w-full text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px] bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none'
                              }
                           />

                           {TanantsFramik.errors.primary_contact_email && (
                              <span className="text-red-500 text-[12px]">
                                 {TanantsFramik.errors.primary_contact_email}
                              </span>
                           )}
                        </div>
                     </div>
                  </div>

                  <div className="grid sm:grid-cols-2 grid-cols-1 pt-2 sm:gap-[20px] gap-[10px] sm:my-[10px]">
                     <div>
                        <div className="pt-4">
                           <span className="text-[15px] text-gray-500">
                              Secondary Contact Info
                           </span>
                           <hr className="my-1 border-t-2" />
                        </div>
                     </div>

                     <div className="grid grid-cols-1 gap-2">
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
                           {TanantsFramik.errors.secondary_fname && (
                              <span className="text-red-500 text-[12px]">
                                 {TanantsFramik.errors.secondary_fname}
                              </span>
                           )}
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
                           {TanantsFramik.errors.secondary_lname && (
                              <span className="text-red-500 text-[12px]">
                                 {TanantsFramik.errors.secondary_lname}
                              </span>
                           )}
                        </div>
                     </div>

                     <div className="flex gap-2">
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

                     {TanantsFramik.errors.secondary_title && (
                        <span className="text-red-500 text-[12px]">
                           {TanantsFramik.errors.secondary_title}
                        </span>
                     )}

                     <div className="flex gap-2">
                        <div className="w-[65%]">
                           <input
                              name="secondary_primary_phone"
                              id="secondary_primary_phone"
                              placeholder="Primary Phone"
                              type="number"
                              onChange={TanantsFramik.handleChange}
                              value={
                                 TanantsFramik.values.secondary_primary_phone
                              }
                              className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                         bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                           />

                           {TanantsFramik.errors.secondary_primary_phone && (
                              <span className="text-red-500 text-[12px]">
                                 {TanantsFramik.errors.secondary_primary_phone}
                              </span>
                           )}
                        </div>

                        <div className="w-[35%]">
                           <select
                              name="secondary_primary_phone_type"
                              onChange={TanantsFramik.handleChange}
                              value={
                                 TanantsFramik.values
                                    .secondary_primary_phone_type
                              }
                              className="font-medium w-full text-[12px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                        bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none"
                           >
                              <option value="Mobile">Mobile</option>
                              <option value="Work">Work</option>
                              <option value="Office">Office</option>
                              <option value="Work fax">Work fax</option>
                              <option value="Other">Other</option>
                              <option value="custom">Custom</option>
                           </select>
                        </div>
                     </div>

                     <div className="flex gap-2">
                        <div className="w-[65%]">
                           <input
                              name="secondary_phone"
                              id="secondary_phone"
                              placeholder="Secondary Phone"
                              onChange={TanantsFramik.handleChange}
                              value={TanantsFramik.values.secondary_phone}
                              type="number"
                              className="font-medium w-full text-[13px] h-[50px] py-[10px] px-[5px] rounded-[5px]
                                         bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none"
                           />

                           {TanantsFramik.errors.secondary_phone && (
                              <span className="text-red-500 text-[12px]">
                                 {TanantsFramik.errors.secondary_phone}
                              </span>
                           )}
                        </div>

                        <div className="w-[35%]">
                           <select
                              name="secondary_phone_type"
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
                              <option value="custom">Custom</option>
                           </select>
                        </div>
                     </div>

                     <div className="flex gap-2">
                        <div className="w-[100%]">
                           <input
                              name="secondary_contact_email"
                              id="secondary_contact_email"
                              placeholder="Contact Email"
                              onChange={TanantsFramik.handleChange}
                              value={
                                 TanantsFramik.values.secondary_contact_email
                              }
                              className={
                                 TanantsFramik.errors.secondary_contact_email
                                    ? 'font-medium w-full text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px] bg-[#FFF] text-[#000] border-2 border-red-500 focus:border-red-500 focus:outline-none'
                                    : 'font-medium w-full text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px] bg-[#FFF] border-[#cfcfcf8f]  text-[#000] border-2 focus:border-theme focus:outline-none'
                              }
                           />

                           {TanantsFramik.errors.secondary_contact_email && (
                              <span className="text-red-500 text-[12px]">
                                 {TanantsFramik.errors.secondary_contact_email}
                              </span>
                           )}
                        </div>
                     </div>
                  </div>

                  <div className="grid sm:grid-cols-2 grid-cols-1 py-0 sm:gap-[20px] gap-[10px] sm:my-[10px]">
                     <div>
                        <div className="pt-4">
                           <span className="text-[15px] text-gray-500">
                              Notes
                           </span>
                           <hr className="my-1 border-t-2" />
                        </div>
                     </div>

                     <AddNotes formik={TanantsFramik} />
                     {console.log(TanantsFramik?.values)}

<<<<<<< HEAD
                     {TanantsFramik?.values?.notes?.map((item, index) => (
                        <div key={index} className="flex w-full gap-1">
                           <div className="w-[60%]">
                              <span className="text-[12px] ">
                                 {' '}
                                 {item.detail}
                              </span>
                           </div>
                           <div
                              className="w-[20%] text-center"
                              onClick={() => {
                                 setShowEditNotesPopup(true)
                                 setDetail(item.detail)
                                 setIndex(index)
                              }}
                           >
                              <div className="bg-blue-50 px-2 py-2 border-[1px] border-blue-700 color-red-500 text-[10px]">
                                 Edit
                              </div>
                           </div>
                           <div
                              className="w-[20%]  text-center"
                              onClick={() => DeleteNotes(index, 'deleteNotes')}
                           >
                              <div className="bg-red-50 px-2 py-2 border-[1px] border-red-700 color-red-500 text-[10px]">
                                 Delete
                              </div>
                           </div>
                        </div>
                     ))}
=======
                     {
                        //    TanantsFramik?.values?.notes?.map((item, index) => (
                        //    <div key={index} className="flex w-full gap-1">
                        //       <div className="w-[60%]">
                        //          <span className="text-[12px] ">
                        //             {' '}
                        //             {item.detail}
                        //          </span>
                        //       </div>
                        //       <div
                        //          className="w-[20%] text-center"
                        //          onClick={() => {
                        //             setShowEditNotesPopup(true)
                        //             setDetail(item.detail)
                        //             setIndex(index)
                        //          }}
                        //       >
                        //          <div className="bg-blue-50 px-2 py-2 border-[1px] border-blue-700 color-red-500 text-[10px]">
                        //             Edit
                        //          </div>
                        //       </div>
                        //       <div
                        //          className="w-[20%]  text-center"
                        //          onClick={() => DeleteNotes(index, 'deleteNotes')}
                        //       >
                        //          <div className="bg-red-50 px-2 py-2 border-[1px] border-red-700 color-red-500 text-[10px]">
                        //             Delete
                        //          </div>
                        //       </div>
                        //    </div>
                        // ))
                     }
>>>>>>> a1df2bf531baaed4043de3bf78b750ee3d6f375b

                     {showEditNotesPopup && (
                        <EditNotesPopup
                           datashow={showEditNotesPopup ? 'block' : 'hidden'}
                           onClick={() => setShowEditNotesPopup(false)}
                           formik={TanantsFramik}
                           detail={detail}
                           index={index}
                        />
                     )}

                     <DeleteNotesPopup
                        deleteNote={() => deleteNotes(deleteID)}
                        datashow={showNotesPopup ? 'block' : 'hidden'}
                        onClicked={() => setShowNotesPopup(false)}
                     />
                  </div>

                  <div className="grid sm:grid-cols-2 grid-cols-1 py-0 sm:gap-[20px] gap-[10px] sm:my-[10px]">
                     <div>
                        <div className="pt-4">
                           <span className="text-[15px] text-gray-500">
                              Add Photos
                           </span>
                           <hr className="my-1 border-t-2" />
                        </div>
                     </div>

                     <AddPhoto formik={TanantsFramik} />
                  </div>
                  <div className="grid grid-cols-2 gap-x-[2px] gap-y-[15px]">
                     {photosApi?.length > 0 &&
                        photosApi?.map((item, index) => (
                           <div
                              key={index}
                              className="h-32 w-32 rounded-md group relative"
                           >
                              <img
                                 src={item.photo_src}
                                 alt={'Photo'}
                                 className="w-full object-cover rounded-md object-center h-full "
                              />

                              <div
                                 className="absolute bg-white shadow-lg top-1 right-1 rounded-[10px] w-[40px] h-[40px] text-center"
                                 onClick={() =>
                                    DeleteOpen(item.photo_id, 'deletePhotoapi')
                                 }
                              >
                                 <IoTrashOutline className="text-[25px] text-red-500 mt-[7px] ml-[8px] " />
                              </div>
                           </div>
                        ))}
                     {TanantsFramik?.values?.photos?.map((item, index) => (
                        <div
                           key={index}
                           className="h-32 w-32 rounded-md group relative "
                        >
                           <img
                              src={item.image}
                              alt={'Photo'}
                              className="w-full object-cover rounded-md object-center h-full"
                           />

                           <div
                              className="absolute bg-white shadow-lg top-1 right-1 rounded-[10px] w-[40px] h-[40px] text-center"
                              onClick={() => DeleteOpen(index, 'deletePhoto')}
                           >
                              <IoTrashOutline className="text-[25px] text-red-500 mt-[7px] ml-[8px] " />
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="fixed bottom-0 left-0 w-full shadow-[1px_-10px_13px_2px_#0000000d] ">
                     <div className="grid grid-cols-2 w-full bg-[#fff] ">
                        {tenantLoader ? (
                           <div className="flex justify-center">
                              <div className="w-full flex justify-center">
                                 <span className="text-white px-4 py-2 w-full mx-auto text-center bg-blue-300">
                                    Save
                                 </span>
                              </div>
                           </div>
                        ) : (
                           <div className="flex justify-center">
                              <div className="w-full flex justify-center">
                                 <button
                                    type="submit"
                                    className="text-white px-4 py-2 w-full mx-auto bg-blue-500"
                                 >
                                    Save
                                 </button>
                              </div>
                           </div>
                        )}

                        {userEdit ? (
                           <Link href="/tenants/details">
                              <div className="flex justify-center">
                                 <div className="px-4 py-2 w-full mx-auto flex justify-center bg-red-100 text-red-600">
                                    <span className="">CANCEL</span>
                                 </div>
                              </div>
                           </Link>
                        ) : (
                           <Link href="/tenants/list">
                              <div className="flex justify-center">
                                 <div className="px-4 py-2 mx-auto w-full flex justify-center bg-red-100 text-red-600">
                                    <span className="">CANCEL</span>
                                 </div>
                              </div>
                           </Link>
                        )}
                     </div>
                  </div>
               </div>
            </form>
         </div>

         <DeletePhotoPopup
            deletePhoto={() => {
               if (deleteType === 'deletePhoto') {
                  deletePhoto(deleteID)
               } else {
                  deletePhotoapi(deleteID)
               }
            }}
            datashow={showDeletePopup ? 'block' : 'hidden'}
            onClicked={DeleteClose}
         />
      </div>
   )
}

export default TanantsFrom
