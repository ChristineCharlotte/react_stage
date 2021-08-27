import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/index';
import List from './components/List/index';
import Footer from './components/Footer/index';

export default class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header></Header>
          <List></List>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
