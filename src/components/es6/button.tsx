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
  // symbol
  const gender = {
    //这样就说明man就是一个独一无二的值，不用再man:'man'   
     man: Symbol(),
     woman: Symbol(),
  }
  function isMan(genderlll:any) {
    
      switch (genderlll) {
          case gender.man:
            // console.log(1)
              console.log('男性');
              break;
          case gender.woman:
            // console.log(2)
              console.log('女性');
              break
      }
  }
  // isMan(gender.man)  //男性
  // console.log('gender.man',gender.man)

  // proxy
  let arr1 = [1,2,3]
  console.log(arr1.splice(-1)) // [3]
  console.log(arr1[-1]) // undefined

  function arrProxy(params:any) {
      let handler = {
          get(target:any,key:any){
            console.log(target,key)
            if (target instanceof Array && target.length > 0) {
                if (key > 0) {
                    return target[key]
                } else {
                    let len = target.length 
                    if (key * -1 > len) {
                        return new Error('该下标不存在')
                    }
                    let index = len + Number(key) // key是字符串
                    return target[index]
                }
            } else if (typeof target === 'object' && target !== null) {
                console.log('这是一个对象')
                return target[key]
            }
          }
      }
      return new Proxy(params,handler)
  }
  let arr = [1,2,3,4,5,6]
  let testArr = arrProxy(arr)
  console.log(testArr[-1]) // 6

  
  return (
    <button className={classes} {...restProps} >
      <span className='inline-text'>{children}21</span>
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
