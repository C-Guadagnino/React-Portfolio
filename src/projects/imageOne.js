import { Parallax } from 'react-parallax';
import Homepage from "../images/moonmoon.jpeg"

const ImageOne = () => (
    <Parallax className='image bg-gradient-to-b from-gray-400 via-gray-600 to-gray-900' style={{height: "800px"}} strength={800}>
        <div className='content'>
            <span className='image-txt'> About me </span>
        </div>
    </Parallax>
);

export default ImageOne