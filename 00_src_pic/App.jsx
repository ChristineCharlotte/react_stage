import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import Home from './pages/Home'; // About是路由组件
// import About from './pages/About'; // About是路由组件
import Pics from './pages/Pics';
import Header from './components/Header'; // Header是一般组件
import MyNavLink from './components/MyNavLink';

const pictList = [
  {
    title: '水墨',
    path: 'one',
  },
  {
    title: '永忆',
    path: 'two',
  },
  {
    title: '相思',
    path: 'three',
  },
  {
    title: '水晶',
    path: 'four',
  },
  {
    title: '曾批',
    path: 'five',
  },
  {
    title: '细草',
    path: 'six',
  },
  {
    title: '纵使',
    path: 'seven',
  },
  {
    title: '我是',
    path: 'eight',
  },
  {
    title: '樱花',
    path: 'nine',
  },
];
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header a={1} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生Html中，靠<a></a>跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">
                About
              </a>
              <a className="list-group-item active" href="./home.html">
                Home
              </a> */}

              {/* 在react中靠路由链接实现切换组件 -- 编写路由链接*/}

              {/* <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink> */}

              {pictList.map((obj) => {
                return (
                  <MyNavLink to={`/pic?${obj.path}`} key={obj.path}>
                    {obj.title}
                  </MyNavLink>
                );
              })}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route path="/pic" component={Pics} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
