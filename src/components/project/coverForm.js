import { useRef } from "react";
export default function CoverForm(){
    const inputFile = useRef(null);

    const onButtonClick = () => {
        inputFile.current.click();
      };

    return (
        <div className="cover-form">
            <p className="cover-title ">Upload Project Banner</p>
            <p className="cover-des ">Please select png, jpg or jpeg image with minimum dimension of width: 625px, height: 355px</p>
            <button className="p-btn cover-img-btn btn-primary" onClick={onButtonClick}>Choose a project cover image</button>
            <input type='file' id='file' ref={inputFile}  accept="image/*" style={{display: 'none'}}/>
        </div>

    )
}