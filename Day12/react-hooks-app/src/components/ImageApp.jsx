import React, {useState} from 'react'

import './ImageApp.css';
import pic from '../image/newimg.png';

const ImageApp = () => {

    const [height,setHeight]=useState(200);
    const [width,setWidth]=useState(200);
    const [rotation,setRotation]=useState(0);

  return (
    <div className='disp'>
        <div className='img'>
            <img src={pic} style={{
                height: height,
                width:width,
                transform:`rotate(${rotation}deg)`,
            }} alt="" />
            
        </div>
        
        <div className="panel">
            <button onClick={()=>{setHeight(height+10)}}>Increase Height</button>
            <button onClick={()=>{setHeight(height-10)}}>Decarese Height</button>
            <button onClick={()=>{setWidth(width+10)}}>Increase Width</button>
            <button onClick={()=>{setWidth(width-10)}}>Decrease Width</button>
            <button onClick={()=>{setRotation(rotation+10)}}>Right Rotation</button>
            <button onClick={()=>{setRotation(rotation-10)}}>Left Rotation</button>
    </div>

    </div>
  )
}

export default ImageApp


