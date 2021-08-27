import React, { Component } from 'react';

export default class Item extends Component {
  //规定鼠标移入的状态
  state = {
    mouse_in_item: false,
  };

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse_in_item: flag });
    };
  };

  render() {
    const { name, done } = this.props;
    const { mouse_in_item } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse_in_item ? '#ddd' : 'white' }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse_in_item ? 'block' : 'none' }}
        >
          删除
        </button>
      </li>
    );
  }
}
