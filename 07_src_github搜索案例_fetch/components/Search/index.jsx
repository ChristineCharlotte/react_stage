// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class Search extends Component {
  search = async () => {
    // 获取用户输入
    const { value } = this.keyWordElement;
    console.log(value);
    // const { keyWordElement : {value} } = this; 连续解构赋值连续写+重命名
    // 发送请求前通知App更新状态
    PubSub.publish('atguigu', { isFirst: false, isLoading: false });

    //#region
    //发送网络请求 -- 使用axios发送
    // axios.get(`https://api.github.com/search/users?q=${value}`).then(
    //   (response) => {
    //     console.log('成功了', response.data);

    //     // 请求成功后，发送通知List更新状态

    //     PubSub.publish('atguigu', {
    //       isLoading: false,
    //       users: response.data.items,
    //     });
    //   },
    //   (error) => {
    //     console.log('失败了', error);
    //     // 请求失败后，发送通知List更新状态

    //     PubSub.publish('atguigu', {
    //       isLoading: false,
    //       err: error.message,
    //     });
    //   }
    // );
    //#endregion

    // // 发送网络请求 -- 使用fetch发送 (未优化)
    // fetch(`https://api.github.com/search/users?q=${value}`)
    //   .then(
    //     (response) => {
    //       console.log('连接服务器成功');
    //       return response.json();
    //     },
    //     (error) => {
    //       console.log('连接服务器失败了', error);
    //       return new Promise(() => {});
    //     }
    //   )
    //   .then(
    //     (response) => {
    //       console.log('获取数据成功', response);
    //     },
    //     (error) => {
    //       console.log('获取数据失败', error);
    //     }
    //   );

    // // 发送网络请求 -- 使用fetch发送 (优化1)
    // fetch(`https://api.github.com/search/users?q=${value}`)
    //   .then((response) => {
    //     console.log('连接服务器成功');
    //     return response.json();
    //   })
    //   .then((response) => {
    //     console.log('获取数据成功', response);
    //   })
    //   .catch((error) => {
    //     console.log('请求出错', error);
    //   });

    // 发送网络请求 -- 使用fetch发送 (优化2)
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${value}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('error', error);
    }
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
