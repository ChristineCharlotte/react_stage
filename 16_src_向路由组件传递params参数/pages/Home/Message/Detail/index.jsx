import React, { Component } from 'react';

const data = [
  { id: '01', content: '你好，中国' },
  { id: '02', content: '你好，尚硅谷' },
  { id: '03', content: '你好，未来的自己' },
];

export default class Detail extends Component {
  render() {
    // 接收params参数
    const { id, title } = this.props.match.params;
    const findResult = data.find((obj) => {
      return obj.id === id;
    });

    return (
      <ul>
        <li>ID:{id}</li>
        <li>Title: {title}</li>
        <li>Content: {findResult.content}</li>
      </ul>
    );
  }
}
