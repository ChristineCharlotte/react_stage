import React, { Component } from 'react';
import PubSub from 'pubsub-js'; // 引入
import './index.css';

export default class List extends Component {
  state = {
    // 初始化状态
    users: [], // users初始值为数组
    isFirst: true, // 是否第一次打开页面
    isLoading: false, // 标识是否处于加载中
    err: '', // 存储请求相关的错误信息
  }; // 初始化状态，users初始值为数组

  componentDidMount() {
    this.token = PubSub.subscribe('atguigu', (_, stateObj) => {
      this.setState(stateObj);
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state;
    console.log(users, isFirst, isLoading, err);

    return (
      <div className="row">
        {isFirst ? (
          <h2>欢迎使用，输入关键字,随后点击搜索</h2>
        ) : isLoading ? (
          <h2>Loading ......</h2>
        ) : err ? (
          <h2 style={{ color: 'red' }}>{err}</h2>
        ) : (
          users.map((userObj) => {
            return (
              <div className="card" key={userObj.key}>
                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                  <img
                    src={userObj.avatar_url}
                    style={{ width: '100px' }}
                    alt="Avatar"
                  />
                </a>
                <p className="card-text">
                  {userObj.login} - {userObj.id}
                </p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
