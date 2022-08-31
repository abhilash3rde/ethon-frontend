import React, { useState } from 'react'
import { useFormik } from 'formik'

function EditNotesPopup({ index, detail, datashow, onClick, formik }) {
   const [showNotes, setShowNotes] = useState(false)
   const NoteFormik = useFormik({
      initialValues: {
         detail: detail
      },
      onSubmit: (values, { resetForm }) => {
         try {
            const oldData = formik.values.notes
            oldData[index] = values

            formik.setFieldValue('notes', [...oldData])
            console.log(values)
            resetForm()
            setShowNotes(false)
         } catch (error) {
            console.log(error)
         }
      }
   })

   console.log(detail)
   return (
      <div className={datashow}>
         <div
            style={{ transition: '.5s' }}
            className="DeletePopup h-screen bg-[#22222238] w-full fixed z-[100] top-0 left-0 overflow-hidden"
         >
            <div>
               <div className="flex justify-end items-center mb-[10px]">
                  <div className="w-[50%] flex justify-center ">
                     <div
                        className="w-[100%] py-[13px] mx-auto flex text-[12px] justify-center text-white bg-orange-400 
                                    rounded-[10px] hover:bg-bg-orange-200 hover:text-white"
                     >
                        <span className="">ADD NOTES</span>
                     </div>
                  </div>
               </div>

               <div>
                  <div className="h-screen transition-all bg-[#22222238] w-full fixed z-[100] top-0 left-0 overflow-hidden backdrop-blur-[1px]">
                     <div className="">
                        <div className="absolute w-[80%] top-[22%] left-[10%] mx-auto bg-white rounded-[10px]">
                           <div className="text-black text-center pt-8">
                              <div className="grid grid-cols-1 mx-4 ">
                                 <div className="">
                                    <h1 className=" text-left">Edit Notes</h1>
                                 </div>

                                 <textarea
                                    value={NoteFormik.values.detail}
                                    onChange={NoteFormik.handleChange}
                                    rows="6"
                                    placeholder="Enter Your Details"
                                    name="detail"
                                    id="detail"
                                    className="font-medium w-full text-[15px] py-[5px] px-[10px] rounded-[5px]
                                     bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none"
                                 />
                              </div>

                              <div className="flex justify-center mt-4">
                                 <div className="bg-[#fb923c] rounded-bl-[10px] w-[50%] flex justify-center">
                                    <button
                                       type="button"
                                       className=" py-4 mx-auto w-full flex justify-center text-black 
                                        rounded-[10px] "
                                       onClick={() => {
                                          NoteFormik.handleSubmit()
                                          onClick()
                                       }}
                                    >
                                       save
                                    </button>
                                 </div>

                                 <div
                                    onClick={onClick}
                                    className=" bg-[#9e9e9e4f] rounded-br-[10px] w-[50%]  flex justify-center"
                                 >
                                    <div
                                       className="py-4 w-[100%] mx-auto flex justify-center text-black 
                                               rounded-[10px]"
                                    >
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
            </div>
         </div>
      </div>
   )
}

export default EditNotesPopup;
