import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/index';
import List from './components/List/index';
import Footer from './components/Footer/index';

export default class App extends Component {
  state = {
    todos: [
      {
        id: '001',
        name: '吃饭',
        done: true,
      },
      {
        id: '002',
        name: '睡觉',
        done: true,
      },
      {
        id: '003',
        name: '打代码',
        done: false,
      },
    ],
  };

  /**
   * addToDo 用于添加一个todo，接收的参数是todo对象。
   * @param {Object} todoObj
   */
  addToDo = (todoObj) => {
    //获取原todos
    const { todos } = this.state;
    //追加一个todo
    console.log(todoObj);
    const newTodos = [todoObj, ...todos];
    //更新状态
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addToDo={this.addToDo}></Header>
          <List todos={todos}></List>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
