import React, { useMemo, useCallback, useEffect, useState, memo } from "react";
import ReactCropper from './cropper'

function coverUpload(props: any) {
  return (
    <div>
      <ReactCropper />
    </div>
  );
}

export default coverUpload;
