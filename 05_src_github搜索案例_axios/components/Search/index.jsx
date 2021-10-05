import axios from 'axios';
import React, { Component } from 'react';

export default class Search extends Component {
  search = () => {
    // 获取用户输入
    const { value } = this.keyWordElement;
    console.log(value);
    // const { keyWordElement : {value} } = this; 连续解构赋值连续写+重命名
    // 发送请求前通知App更新状态
    this.props.updateAppState({ isFirst: false, isLoading: false });

    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
      (response) => {
        console.log('成功了', response.data);

        // 请求成功后，发送通知App更新状态
        this.props.updateAppState({
          isLoading: false,
          users: response.data.items,
        });
      },
      (error) => {
        console.log('失败了', error);
        // 请求失败后，发送通知App更新状态
        this.props.updateAppState({
          isLoading: false,
          err: error.message,
        });
      }
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索 Github 用户</h3>
        <div>
          <input
            type="text"
            placeholder="请输入："
            ref={(c) => (this.keyWordElement = c)}
          />
          &nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
