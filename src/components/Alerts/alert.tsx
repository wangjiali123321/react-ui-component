import React, {
  FC,
  MouseEventHandler,
  MouseEvent,
  useState,
  CSSProperties,
} from "react";
import classNames from "classnames";
import Icon from "../Icon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ThemeProps } from "../Icon/icon";

export type AlertType = "success" | "default" | "danger" | "warning" | "normal";

export interface BaseAlertProps {
  className?: string;
  /** 警告提示内容 */
  message: string;
  /** 警告提示的辅助性文字介绍 */
  description?: string;
  /** 默认不显示关闭按钮 */
  closable?: boolean;
  /** 指定警告提示的样式，有四种选择 success、default、warning、danger */
  type?: AlertType;
  /** 关闭时触发的回调函数 */
  onClose?: MouseEventHandler<SVGSVGElement>;
  style?: CSSProperties;
  /**
   * 添加图标到标题后
   */
  icon?: IconProp;
  /**
   * 图标主题
   */
  theme?: ThemeProps;
}

export const Alert: FC<BaseAlertProps> = (props) => {
  const {
    className,
    message,
    description,
    closable,
    type,
    onClose,
    icon,
    theme,
    ...restProps
  } = props;

  return type === 'normal' ? (
    <>
      <div>
        normal
      </div>
    </>
  ): (
    <>
      <div>
        success
      </div>
    </>
  )
};

Alert.defaultProps = {
  closable: false,
  type: "default",
};

export default Alert;
