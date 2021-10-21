import React, { Component } from 'react';

const data = [
  { id: '01', content: '你好，中国' },
  { id: '02', content: '你好，尚硅谷' },
  { id: '03', content: '你好，未来的自己' },
];

export default class Detail extends Component {
  render() {
    console.log(this.props);

    // const { id, title } = this.props.match.params; // 接收params参数

    // const { search } = this.props.location; // 接收search参数
    // console.log(search, 'search');
    // const params = new URLSearchParams(search);
    // const id = params.get('id');
    // const title = params.get('title');
    // console.log(id, title);

    // 接收state参数
    const { id, title } = this.props.location.state || {};

    const findResult =
      data.find((obj) => {
        return obj.id === id;
      }) || {};

    return (
      <ul>
        <li>ID:{id}</li>
        <li>Title: {title}</li>
        <li>Content: {findResult.content}</li>
      </ul>
    );
  }
}
