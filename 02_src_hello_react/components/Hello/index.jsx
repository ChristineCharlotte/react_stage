//创建“外壳”组件App
import React, { Component } from 'react';
import hello from './index.module.css';

//创建并暴露App组件
export default class App extends Component {
  render() {
    return <h2 className="hello.title">Hello, React!</h2>;
  }
}
