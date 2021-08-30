import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Item from '../Item';

export default class List extends Component {
  //对接收的props进行：类型和必要性的限制
  static propTypes = {
    updateToDo: PropTypes.func.isRequired,
    deleteToDo: PropTypes.func.isRequired,
  };

  render() {
    const { todos, updateToDo, deleteToDo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              {...todo}
              updateToDo={updateToDo}
              deleteToDo={deleteToDo}
            ></Item>
          );
        })}
      </ul>
    );
  }
}
