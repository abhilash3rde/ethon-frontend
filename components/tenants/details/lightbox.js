import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function TanantsLightbox(props){
    return(
        <div className={props.datashow + ''} >
            {/* <div className='absolute top-0 left-0 w-full h-[100%] h-[100%] bg-[#0000006b] z-[99999]' onClick={props.close}>

            <div className='grid items-center h-[100%] mx-[5px]'> 
            <img
                className=''
                src={props.src}
            />
            </div>
            </div> */}
            <Lightbox
            mainSrc={props.src}
            onCloseRequest={props.close}
            // nextSrc={props.nextSrc}
            // prevSrc={props.prevSrc}
            />
        </div>
    )

}

export default TanantsLightbox;