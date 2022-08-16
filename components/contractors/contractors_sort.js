import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getContractorsFilter } from "../../redux/action/contractors";


function ContractorsSort() {

    const [searchTitle, setSeachTitle] = useState("")
    const [searchOption, setSeachOption] = useState("a-z")

    const dispatch = useDispatch()

    useEffect(() => {
        if (searchTitle!==""||searchOption!=="a-z"){
           
            let data ={
                posts_per_page: "100",
                paged: "1",
                sort_by_field: searchOption?searchOption:"",
                search_by_keyword: searchTitle?searchTitle:""            
            }
            const delayDebounceFn=   setTimeout(() => {
                dispatch(getContractorsFilter(data))
            }, 2000);
           
          
              return () => clearTimeout(delayDebounceFn)
        }else {
            let data ={
                posts_per_page: "-1",
                paged: "1",
                sort_by_field: searchOption?searchOption:"",
                search_by_keyword: searchTitle?searchTitle:""
            }
            dispatch(getContractorsFilter(data))
            
        }
      
        
    }, [dispatch, searchOption, searchTitle])
  
 


    return (
        <div className="App">
            <div className='flex justify-between items-center gap-[10px] py-2 px-4'>
                <div className='w-[10%]'>
                    <h1 className="md:text-5xl font-medium cursor-pointer text-center text-base ">Sort: </h1>
                </div>

                <div className='w-[40%]'>
                    <select
                        name='sort_by_field'
                        id='sort_by_field'
                        onChange={(e) => setSeachOption(e.target.value)}
                        value={searchOption}   
                         className=" w-full border-2 text-[10px] bg-white py-2 px-[2px] rounded-[10px] focus:outline-none focus:border-theme">
                         {/* <option value='none'>selectOption</option> */}
                        <option value='a-z'>Alphabetically</option>
                        <option value='services'>Services</option>
                    </select>

                </div>

                <div className='w-[50%]'>
                    <div className='w-full'>
                        <input
                            name='search_by_keyword'
                            value={searchTitle}
                             onChange={(e)=>setSeachTitle(e.target.value)}
                            className="border-2 rounded-[10px]  w-full focus:outline-none focus:border-theme 
                            text-[10px] py-2 px-2 rounded-[10px] focus:outline-none focus:border-theme "
                            placeholder="Search than Enter" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContractorsSort;