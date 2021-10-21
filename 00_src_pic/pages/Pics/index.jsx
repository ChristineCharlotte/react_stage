import React, { Component } from 'react';

export default class Pics extends Component {
  render() {
    console.log(this.props);
    const { search } = this.props.location;
    const path = search.substring(1);
    console.log(path);
    if (path) {
      return (
        <>
          <img src={require(`../Pics/${path}.png`).default} alt={path} />
        </>
      );
    }
    return <></>;
  }
}
