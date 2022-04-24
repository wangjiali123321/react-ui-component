import React, { FC } from "react";
import { ThemeProps } from "../Icon/icon";
import { scopedClass } from "../../utils/scopedClass";
import classNames from "classnames";
const sc = scopedClass("jim-chocolate-progress");
import './style.scss'
import { of } from 'rxjs';

export interface ProgressProps {
  /**
   * 控制进度条的进度
   */
  percent: number;
  /**
   * 控制进度条的高度
   */
  strokeHeight?: number;
  /**
   * 是否展示进度条提示
   */
  showText?: boolean;
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * 主题
   */
  theme?: ThemeProps;
  /**
   * 圆形进度条
   */
  circle?: boolean;
  /**
   * 最大值
   */
  max: number;
  className?: string;
  /**
   * 单位
   */
  unit?: string;
  /**
   * 设置圆形进度条的宽度
   */
  width?: number;
  /**
   * 动画效果，条形进度条生效
   */
  animation?: boolean;
}

const prefixCls = "jim-chocolate-progress";
export const Progress: FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight = 12,
    showText,
    style,
    theme,
    animation,
  } = props;
  const { max, className, unit = "%", width = 0, circle } = props;
  const style11 = {width:'50%'}

  //todo  各种use
  //todo rxjs
  // RxJS v6+
  // 依次发出提供的任意数量的值
  const source = of(1, 2, 3, 4, 5);
  // 输出: 1,2,3,4,5
  const subscribe = source.subscribe(val => console.log(val));
  //todo ts 

  return (
    <div className="jim-chocolate-progress" style={style}>
      <div className="jim-chocolate-progress-bar-outer">
         <div className="jim-chocolate-progress-bar-inner" style={style11}>

         </div>
      </div>
    </div>
  );
};

Progress.defaultProps = {
  strokeHeight: 12,
  showText: true,
  theme: "primary",
  percent: 0,
};

export default Progress;