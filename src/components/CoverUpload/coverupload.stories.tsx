import React, { useState,useEffect, useCallback} from "react";
import { Meta, Story } from "@storybook/react";
import BetterTable from "./coverupload";
import "../../styles/common.stories";
import CoverUpload from "./coverupload";


function Intro() {
  
    return (
      <div>
          <CoverUpload
          />
      </div>
    );
  }

export default {
  component: CoverUpload,
  title: "coverupload 表格"
} as Meta;

const _default: Story<any> = () => <Intro />;

export const Primary = _default.bind({});
