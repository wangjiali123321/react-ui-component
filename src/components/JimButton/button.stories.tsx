import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import JimButton from "./button";
import ButtonDoc from "./button-doc.mdx";
import "../../styles/common.stories";

const BaseButton = () => {
  return (
    <div className="container">
      <div className="item">
          <JimButton btnType="default" large="true">
            Default
          </JimButton>
      </div>
    </div>
  );
};

export default {
  component: JimButton,
  title: "jimButton 按钮",
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
const _default: Story<any> = () => <BaseButton />;

export const Primary = _default.bind({});

Primary.args = {
  className: "",
  disabled: false,
  size: "sm",
  btnType: "default",
  href: "http://www.baidu.com",
};
