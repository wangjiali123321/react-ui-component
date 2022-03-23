import React, { Component } from "react";
import { ConfigContext } from "./service";

export default class test extends Component<any, any> {
  static contextType = ConfigContext;
  constructor(props: any) {
    super(props);
    this.state = {
      num: 0,
      type: "原生"
    };
    // console.log('constructor')
  }
  componentDidMount() {
    console.log(this.context);
  }

  render() {
    // console.log('render')
    return null;
  }
}
