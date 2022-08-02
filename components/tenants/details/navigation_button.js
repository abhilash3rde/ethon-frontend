
function NavigationButton(props){
        return(
            <div className="fixed bottom-0 left-0 w-full shadow-[1px_-10px_13px_2px_#0000000d] " >
            <div className="grid grid-cols-2 gap-[1px] w-full bg-white ">
                <div  onClick={props.BtnFirstOnclick} className="py-2 bg-white flex justify-center">
                    <div className="px-4 py-2 w-[70%] mx-auto w-full flex justify-center bg-blue-500 rounded-[10px]">
                        <button type="submit" className="text-white">{props.BtnFirst}</button>
                    </div>
                </div>
                {/* <hr className="border-t-0 border-l-2"/> */}
                <div
                onClick={props.SecondOnClick} 
                className=" bg-white py-2 flex justify-center">
                    <div className="px-4 py-2 w-[70%] mx-auto w-full flex justify-center bg-red-100 text-red-600 
                    rounded-[10px] ">
                        <span className="">DELETE</span>
                    </div>
                </div>
            </div>
        </div>
        )
    
}

export default NavigationButton;