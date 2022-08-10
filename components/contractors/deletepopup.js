import React from "react";
import {useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';
 import { useRouter } from 'next/router';
import { deleteContractorsAPI } from "../../redux/APIS/API";
import { getContractors } from "../../redux/action/contractors";





function DeletePopup(props) {


  const contractors_id = useSelector((state)=> state.contractorsDetail.contractorsDetail?.data?.ID)

  console.log(contractors_id)


  const dispatch = useDispatch()

  const router = useRouter();


    async function deleteUser(){
        try {
          const respon = await deleteContractorsAPI({
            "contractor_ids": [contractors_id]
        })
          console.log(respon)
          console.log(respon.data.message)
          toast.success(respon.data.message)
          dispatch(getContractors())
          router.push('/contractors/list');
        } catch (error) {
            //console.log(error)
          router.push('/contractors/list');
          toast.error(error.response.data.message)
        }
      }

    return (
        <div className={props.datashow}>
            <div style={{transition: '.5s',}} className='DeletePopup h-screen bg-[#22222238] w-full fixed z-[100] top-0 left-0 overflow-hidden'>

                <div className="">

                    <div className="absolute w-[80%]  top-[30%] left-[10%] mx-auto bg-white rounded-[10px]">
                        <div className="text-black text-center px-4 py-8">
                            <p className="text-sm text-gray-500">
                                Are you sure you want to delete?
                                This will permanently delete all
                                data for this client.</p>

                            <div className="flex justify-center">

                                <div
                                    onClick={deleteUser}
                                    className="bg-white w-[50%] py-2 flex justify-center">
                                    <div className=" py-2 w-[100%] mx-auto w-full flex justify-center text-red-600 
                                    rounded-[10px] ">
                                        <span className="">Yes, Delete</span>
                                    </div>
                                </div>

                                <div
                                    onClick={props.onClicked}
                                    className=" bg-white w-[50%]  py-2 flex justify-center">
                                    <div className=" py-2 w-[100%] mx-auto w-full flex justify-center text-blue-600 
                                    rounded-[10px] ">
                                        <span className="">No, Go Back</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default DeletePopup;

