import { IoAdd } from "react-icons/io5";
import Link from 'next/link';




function AddNewClient() {
    return (
        <div className="fixed bottom-24 right-2 z-50 ">
            <Link href="/tenants/tenants_form">
                <a>
                    <div
                        className="flex gap-1 items-center bg-orange-400 border-orange-400 text-white border-2 py-2 px-4 mx-2 mx-2  
                        rounded-[10px] hover:border-theme">

                        <IoAdd />
                        <h1>Add New</h1>

                    </div>
                </a>
            </Link>

        </div>
    )
}

export default AddNewClient;