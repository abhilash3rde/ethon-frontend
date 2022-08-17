import SubHeader from "../../components/tenants/header";
import Link from "next/link";



function form() {
    return (
        <div className="App">
            <header className="z-50 bg-[#fff] pt-4 pt-2 shadow-[1px_5px_13px_2px_#0000000d] overflow-scroll ">
                <SubHeader title={'Add Project'} backUrl={'/projects/list'} />
            </header>





            <div className="fixed bottom-0 left-0 w-full shadow-[1px_-10px_13px_2px_#0000000d] " >
                <div className="grid grid-cols-2 w-full bg-[#fff] ">
                    <div className="flex justify-center">
                        <div className="w-full flex justify-center">
                            <button type="submit" className="text-white px-4 py-2 w-full mx-auto bg-blue-500">Save</button>
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
export default form;