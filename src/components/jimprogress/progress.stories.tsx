import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import Progress, { ProgressProps } from "./progress";
import ProgressDoc from "./progress-doc.mdx";
import Card from "../Card/card";
import Button from "../Button";

const BaseProgress = () => {
  const commonCss = { marginBottom: 20 };
  const cardCss = { margin: "20px 20px 0 0", width: 500 };
  return (
    <div className="container">
      <div className="item">
        <Card title="基础使用" style={cardCss} shadow>
          <Progress
            percent={60}
            theme="primary"
            showText={false}
            style={commonCss}
            max={100}
          />
        </Card>
      </div>
    </div>
  );
};

export default {
  component: Progress,
  title: "jimProgress 进度条",
  parameters: {
    docs: {
      page: ProgressDoc,
      source: {
        type: "code",
      },
    },
    controls: {
      // include: ['percent', 'strokeHeight', 'showText', 'theme'],
      hideNoControlsWarning: true,
    },
  },
  argTypes: {
    percent: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
    theme: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "success",
          "info",
          "warning",
          "danger",
          "light",
          "dark",
        ],
      },
    },
  },
} as Meta;

const _default: Story<ProgressProps> = () => <BaseProgress />;

// primary
export const Primary = _default.bind({});

Primary.args = {
  theme: "primary",
  percent: 30,
  strokeHeight: 10,
  showText: true,
};
