import React, { FC } from "react";
import classNames from "classnames";
import './style.scss'


const prefixCls = "jim-btn";

export const Button: FC<any> = (props) => {
  const {
    btnType,
    children,
    className,
    large,
    ...restProps
  } = props;

  const classes = classNames(prefixCls, className,{
    [`${prefixCls}-largesize`]: large
  });

  const clickbutton = function(){
    
  }
  
  return (
    <button className={classes} {...restProps} onClick={clickbutton}>
      <span className='inline-text'>{children}</span>
    </button>
  );
};

Button.defaultProps = {
  className: "",
  disabled: false,
  size: "sm",
  btnType: "default",
  href: "http://www.baidu.com",
};

export default Button;
