import React, { FC } from "react";
import classNames from "classnames";
import './style.scss'
import { fromEvent } from 'rxjs';
import { throttleTime, scan } from 'rxjs/operators';


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

  // generaor
  function* chef(){  //大厨
      console.log("炒鸡");
      yield "worker";//交由伙计处理
      console.log("上料");
      yield "worker";//交由伙计处理
  }
  function* worker(){  //伙计
      console.log("准备工作");
      yield "chef";   //交由大厨处理
      console.log("炖鸡");
      yield "chef";   //交由大厨处理
      console.log("上菜");
    }
  var ch = chef();
  var wk = worker();
    
  function run(gen:any){  //流程控制
      var v = gen.next();
      if(v.value =="chef"){
          run(ch);
      }else if(v.value =="worker"){
          run(wk);
      }
  }
  run(wk);//开始执行

  //1s后打印111，2s后打印222，3s打印333
  
  // function one() {
  //   setTimeout(() => {
  //     console.log(111);
  //     iterator.next() //执行第二个暂停点
  //   },1000)
  // }
  // function two() {
  //   setTimeout(() => {
  //     console.log(222);
  //     iterator.next() //执行第三个暂停点
  //   },2000)
  // }
  // function three() {
  //   setTimeout(() => {
  //     console.log(333);
  //   },3000)
  // }
  
  // function * gen() {
  //     yield one()
  //     yield two()
  //     yield three()
  // }
  // let iterator = gen()
  // iterator.next() //执行第一个暂停点

  function spawn(genF:any) {
    return new Promise(function(resolve, reject) {
      const gen = genF();
      function step(nextF:any) {
        let next;
        try {
          next = nextF();
        } catch(e) {
          return reject(e);
        }
        if(next.done) {
          return resolve(next.value);
        }
        Promise.resolve(next.value).then(function(v) {
          step(function() { return gen.next(v); });
        }, function(e) {
          step(function() { return gen.throw(e); });
        });
      }
      step(function() { return gen.next(undefined); });
    });
  }

  fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    scan(count => count + 1, 0)
  )
  .subscribe(count => console.log(`Clicked ${count} times`));
  
  // ts
  // http://www.semlinker.com/ts-comprehensive-tutorial/#3-1-%E7%B1%BB%E5%9E%8B%E6%96%AD%E8%A8%80

  // 算法
  // function flattenDeep(arr) {
  //   return Array.isArray(arr) ? arr.reduce( (acc, cur) => [...acc, ...flattenDeep(cur)] , [])
  //    : [arr] }

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
