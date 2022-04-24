import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes,useEffect } from "react";
import classNames from "classnames";

// export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button = (props:any) => {
  const {
    icon,
    theme,
    ...restprop
  } = props;
  console.log(restprop)
  useEffect(() => {
    console.log(1);
  }, []);
  return (
    <button >
      123
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
