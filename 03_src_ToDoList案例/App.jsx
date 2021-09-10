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

  /**
   * UpdateTodo用于更新一个todo对象
   * @param {*} id
   * @param {*} done
   */
  updateToDo = (id, done) => {
    //获取状态中的todos
    const { todos } = this.state;
    //匹配处理数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return todoObj;
    });
    this.setState({ todos: newTodos });
  };

  /**
   * deleteTodo用于删除一个todo对象
   * @param {*} id
   */
  deleteToDo = (id) => {
    //获取原来的todos
    const { todos } = this.state;
    //删除指定id的todo对象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });

    //更新状态
    this.setState({ todos: newTodos });
  };

  /**
   * checkAllTodo 用于全选
   */
  checkAllTodo = (done) => {
    //获取原来的todos
    const { todos } = this.state;
    //加工数据
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done };
    });
    debugger;
    //更新状态
    this.setState({ todos: newTodos });
  };

  //clearAllDone 用于清除所有已完成的
  clearAllDone = () => {
    //获取原来的todos
    const { todos } = this.state;
    //过滤数据
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done;
    });
    //更新状态
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addToDo={this.addToDo}></Header>
          <List
            todos={todos}
            updateToDo={this.updateToDo}
            deleteToDo={this.deleteToDo}
          ></List>
          <Footer
            todos={todos}
            checkAllTodo={this.checkAllTodo}
            clearAllDone={this.clearAllDone}
          ></Footer>
        </div>
      </div>
    );
  }
}
