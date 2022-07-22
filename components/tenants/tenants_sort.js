

function TenantsSort() {
    return (
        <div className="App">
            <div className='flex justify-between items-center gap-[10px] py-2 px-4'>
                <div className='w-[10%]'>
                    <h1 className="md:text-5xl font-medium cursor-pointer text-center text-base ">Sort: </h1>
                </div>

                <div className='w-[40%]'>
                    <select className=" w-full border-2 text-[10px] bg-white py-2 px-[2px] rounded-[10px] focus:outline-none focus:border-theme">
                        <option selected>Alphabetically</option>
                        <option>Size</option>
                        <option>Number</option>
                    </select>
                </div>

                <div className='w-[50%]'>
                    <div className='w-full'>
                        <input
                            className="border-2 rounded-[10px]  w-full focus:outline-none focus:border-theme 
                            text-[10px] py-2 px-2 rounded-[10px] focus:outline-none focus:border-theme "
                            placeholder="Search than Enter" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TenantsSort;