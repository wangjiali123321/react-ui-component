import React, { useMemo, useCallback, useEffect, useState, memo } from "react";
import ReactCropper from './cropper'
import { range } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

function coverUpload(props: any) {
  const source$ = range(0, 10);

  source$.pipe(
    filter(x => x % 2 === 0),
    map(x => x + x),
    scan((acc, x) => acc + x, 0)
  )
  .subscribe(x => console.log(x))
  function showSelectPic(){
    
  }
  return (
    <div>
      <div onClick={()=> showSelectPic()}>上传图片</div>
      {/* <ReactCropper /> */}
    </div>
  );
}

export default coverUpload;
