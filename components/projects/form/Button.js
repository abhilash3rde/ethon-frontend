import Link from 'next/link';

function Button(props) {

    function bgColor() {
        if (props?.bg) {
            return (props?.bg)
        } else {
            return ('bg-orange-400 ')
        }
    }

    function color() {
        if (props?.color) {
            return (props?.color)
        } else {
            return ('text-white')
        }
    }


    return (
        <div
            onClick={props.href}>
            <div
                className={
                    bgColor() + color()
                    + " flex gap-1 justify-center  border-orange-400  border-2 py-2 px-4 rounded-[10px] hover:border-theme"}>
                <h1>{props?.name}</h1>
            </div>
        </div >
    )
}

export default Button