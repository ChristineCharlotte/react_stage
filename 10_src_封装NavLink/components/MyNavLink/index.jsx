import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MyNavLink extends Component {
  render() {
    // const { name } = this.props;
    // children属性 是标签体的内容
    return (
      <NavLink
        activeClassName="demo"
        className="list-group-item"
        {...this.props}
      />
    );
  }
}
