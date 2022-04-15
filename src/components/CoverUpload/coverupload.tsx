import React, { useMemo, useCallback, useEffect, useState, memo } from "react";
import ReactCropper from './cropper'
import { range } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

function coverUpload(props: any) {
  const [cropperShow, setCropperShow] = useState<Boolean>(false);
  function showSelectPic(){
    setCropperShow(true)
  }
  return (
    <div>
      <div onClick={()=> showSelectPic()}>上传图片</div>
      <ReactCropper />
      {/* {cropperShow && <ReactCropper />} */}
    </div>
  );
}

export default coverUpload;
