import { Parallax } from 'react-parallax';
import Satellite from '../img/satellite.jpeg'

const ImageTwo = () => (
//     min-height: 100vh;
//   position: relative;
    <Parallax className='h-screen flex justify-center items-center' blur={0} bgImage={Satellite} strength={500} bgImageStyle={{minHeight:"100vh"}}>
        <div className='absolute bg-black/90 rounded px-6 py-2 w-[200px] text-white '>
            <span className="">a trip to Space</span>
        </div>
    </Parallax>
);

export default ImageTwo