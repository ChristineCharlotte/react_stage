//状态在哪里，操作状态的方法就在哪里
import React, { Component } from 'react';

export default class Item extends Component {
  //规定鼠标移入的状态
  state = {
    mouse_in_item: false,
  };

  //鼠标移入、移出的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse_in_item: flag });
    };
  };

  //勾选、取消勾选某一个todo的回调
  handleCheck = (id) => {
    return (event) => {
      console.log(this.props);
      this.props.updateToDo(id, event.target.checked);
    };
  };

  //删除一个todo的回调
  handleDelete = (id) => {
    this.props.deleteToDo(id);
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse_in_item } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse_in_item ? '#ddd' : 'white' }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={() => {
            this.handleDelete(id);
          }}
          className="btn btn-danger"
          style={{ display: mouse_in_item ? 'block' : 'none' }}
        >
          删除
        </button>
      </li>
    );
  }
}
