



function Input(props) {
    return (
        <input
            name={props?.name}
            id={props?.name}
            placeholder={props?.placeholder}
            onChange={props?.formik.handleChange}
            values={props?.formik.values.props?.name}
            className="font-medium text-[15px] h-[50px] py-[10px] px-[10px] rounded-[5px]
            bg-[#FFF] border-[#cfcfcf8f]  text-theme border-2 focus:border-theme focus:outline-none"

        />
    )
}

export default Input;