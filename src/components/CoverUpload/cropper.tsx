import React, { useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const reactCropper: React.FC = () => {
  const cropperRef = useRef<HTMLImageElement>(null);
  const onCrop = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    console.log(cropper.getCroppedCanvas().toDataURL());
  };
  

  return (
    <Cropper
      src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF"
      style={{ height: 400, width: "100%" }}
      // Cropper.js options
      initialAspectRatio={16 / 9}
      guides={false}
      crop={onCrop}
      ref={cropperRef}
    />
  );
};

export default reactCropper;