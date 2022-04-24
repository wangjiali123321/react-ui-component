import React, { useMemo, useCallback, useEffect, useState, memo } from "react";
import ReactCropper from './cropper'
import { of, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

function coverUpload(props: any) {
  const [cropperShow, setCropperShow] = useState<Boolean>(false);
  function showSelectPic(){
    setCropperShow(true)
  }
  // 发出四个字符串
  const example = of('WAIT', 'ONE', 'SECOND', 'Last will display');
  /*
    只有在最后一次发送后再经过一秒钟，才会发出值，并抛弃在此之前的所有其他值
  */
  const debouncedExample = example.pipe(debounce(() => timer(1000)));
  /*
      在这个示例中，所有的值都将被忽略，除了最后一个
      输出: 'Last will display'
  */
  const subscribe = debouncedExample.subscribe(val => console.log(val));
  return (
    <div>
      <div onClick={()=> showSelectPic()}>上传图片</div>
      <ReactCropper />
      <input id="example"></input>
    </div>
  );
}

export default coverUpload;
