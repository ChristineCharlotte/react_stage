## 一、todoList 案例相关知识点

1.拆分组件、实现静态组件，注意 className、style 的写法
2、动态初始化列表。如何确定将数据放在哪个组件中？
—— 在某个组件使用：放在自身的 state 中
—— 在某些组件中使用：放在他们共同的福组件 state 中（官方称此操作为：状态提升）
3、关于父子组件之间的通信： 1. 【 父组件 】给【 子组件 】传递数据：通过 props 传递 2. 【 子组件 】给【 父组件 】传递数据：通过 props 传递，要求父提前给子传递一个函数
4、注意 defaultChecked 和 checked 的区别，类似的还有 defaultValue 和 value
5、状态在哪里。操作状态的方法就在哪里

## 四、路由组件与一般组件

        1.写法不同
                一般组件：<Demo />
                路由组件：<Route path='/demo' component={Demo}/>
        2.存放位置不同
                一般组件：components
                路由组件：pages
        3.接收的props不同：
                一般组件：写组件标签时传递了什么，就能收到什么
                路由组件：接收到三个固定的属性
                        history:
                                go: ƒ go(n)
                                goBack: ƒ goBack()
                                goForward: ƒ goForward()
                                push: ƒ push(path,state)
                                replace: ƒ replace(path,state)
                        location:
                                pathname:'/about'
                                search:''
                                state:undefined
                        match:
                                params: {}
                                path: '/about'
                                url: '/about'

## 六、Switch 的使用

1.通常情况下，path 和 component 是一一对应的关系
2.Switch 可以提高路由匹配效率（单一匹配）

## 七、解决多级路径刷新页面样式丢失的问题

        1. public/index.html 中 引入样式时，不写./ 写/ （常用）
        2. public/index.html 中 引入样式时，不写./ 写%PUBLIC_URL% （常用）
        3. 使用HashRouter

## 八、路由的严格匹配与模糊匹配

        1. 默认使用的是模糊匹配（简单记：【输入的路径】必须要包含要【匹配的路径】，且顺序要一致）
        2. 开启严格匹配：<Route exact={true} path="/about" component={About}>
        3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

## 九、 Redirect 的使用

        1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
        2. 具体编码：
           <Switch>
             <Route path="/about" component={About} />
             <Route path="/home" component={Home} />
             <Redirect to="/home" />
           </Switch>

## 十、 嵌套路由

        1.注册了子路由时，要写上父路由的path值
        2.路由的匹配是按照注册路由的顺序进行的

## 十一、 向路由组件传递参数

        1. params参数
                路由链接（携带参数）：<Link to:'/demo/test/tom/18'>详情</Link>
                注册路由（声明接收）：<Route path="/demo/test/:name/:age" component={Test}>
                接收参数: const {id, title} = this.props.match.params


        2. search参数
                路由链接（携带参数）：<Link to='/demo/test?name=tom&age=18'>详情</Link>
                注册路由（无需声明，正常注册即可）：<Route path="/demo/test" component={Test}/>
                接收参数：this.props.location.search
                备注：获取到的search是urlencoded编码字符串，需要借助 querystring 或 URLSearchParams解析


        3.state参数
                路由链接（不携带参数）：<Link to={{pathname:'/demo/test', state:{name:'tom',age:18}}}>详情</Link>
                注册路由（无需声明，正常注册即可）：<Route path="/demo/test" component={Test}>
                接收参数：this.props.location.state
                备注：刷新也可以保留住参数

## 十二、 编程式路由导航

        1. withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
        2. withRouter的返回值是一个新组件

## 十三、 BrowserRouter 与 HashRouter 的区别

        1. 底层的原理不一样:
                BrowserRouter使用的是H5的History API，不兼容IE9及以下版本
                HashRouter使用的是URL的哈希值
        2. path表现形式不一样
                BrowserRouter的路径没有#，例如：localhost:3000/demo/test
                HashRouter的路径包含#，例如：localhost:3000/#/demo/test
        3.刷新后对路由state参数的影响
                (1) BrowserRouter没有任何影响，因为state保存在history对象中
                (2) HashRouter刷新后会导致state参数的丢失！
        4.备注：HashRouter可以用于解决一些路径错误相关的问题

# Create React App

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
 Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
 You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
 See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
 It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
 Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
