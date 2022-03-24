import React from "react";
import { Story, Meta } from "@storybook/react";
import Alert, { BaseAlertProps } from "./alert";
import AlertDoc from "./alert-doc.mdx";
import Card from "../Card/card";
import "../../styles/common.stories";
import { fromEvent } from 'rxjs';
import { throttleTime, scan } from 'rxjs/operators';

const BaseAlert = () => {
  const commonCss = { width: 450, marginBottom: 20 };
  const cardCss = { margin: "20px 20px 0 0" };
  fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    scan(count => count + 1, 0)
  )
  .subscribe(count => console.log(`Clicked ${count} times`));
  return (
    <div className="container">
      <Alert
        style={commonCss}
        message="这是一个 default 类型 alert"
        type="normal"
      />
      {/* <Alert
        style={commonCss}
        message="这是一个 default 类型 alert"
        type="success"
      /> */}
    </div>
  );
};

export default {
  Component: Alert,
  title: "Alert 警告提示"
} as Meta;

const _default: Story<BaseAlertProps> = () => <BaseAlert />;

// default
export const Primary = _default.bind({});

Primary.args = {
};
