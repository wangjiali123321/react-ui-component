import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import JimButton, { BaseButtonProps } from "./button";
import ButtonDoc from "./button-doc.mdx";
import Card from "../Card/card";
import "../../styles/common.stories";

const BaseButton = () => {
  const commonCss = { marginBottom: 20, marginRight: 20 };
  const cardCss = { margin: "20px 20px 0 0" };
  const textCss = { fontSize: 14, marginBottom: 20 };
  return (
    <div className="container">
      <div className="item">
        <Card title="基础使用" style={cardCss} shadow>
          <div style={textCss}>
            支持<code> 5种 </code>类型的按钮
          </div>
          <JimButton type="default" style={commonCss}>
            Default
          </JimButton>
        </Card>
      </div>
    </div>
  );
};

export default {
  component: JimButton,
  title: "jimStar",
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
    href: {
      options: ["http://www.baidu.com", "http://www.google.com"],
      control: { type: "radio" },
    },
  },
  parameters: {
    docs: {
      page: ButtonDoc,
      source: {
        type: "code",
      },
    },
    layout: "centered",
    controls: { exclude: ["className", "btnType"] },
  },
} as Meta;

// _default
const _default: Story<BaseButtonProps> = () => <BaseButton />;

export const Primary = _default.bind({});

Primary.args = {
  className: "",
  disabled: false,
  size: "sm",
  btnType: "default",
  href: "http://www.baidu.com",
};
