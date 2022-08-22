
function NavigationButton(props) {
    return (
        <div className="fixed bottom-0 left-0 w-full shadow-[1px_-10px_13px_2px_#0000000d] " >
            <div className={props?.BtnFirst ? 'grid-cols-2 grid w-full bg-white' : "grid-cols-1 grid w-full bg-white"}>
                {props?.BtnFirst ?
                    <div onClick={props?.BtnFirstOnclick} className="flex justify-center">
                        <div className="px-4 py-2 w-full mx-auto w-full flex justify-center bg-blue-500">
                            <button type="submit" className="text-white">{props?.BtnFirst}</button>
                        </div>
                    </div>
                    : null}
                <div
                    onClick={props?.SecondOnClick}
                    className="flex justify-center">
                    <div className="px-4 py-2 w-full mx-auto w-full flex justify-center bg-red-100 text-red-600">
                        <span className="">{props?.BtnSecond}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NavigationButton;