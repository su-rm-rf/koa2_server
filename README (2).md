要形成思考，而不是机械式的背诵记忆

了解：概念、demo
掌握：会使用大多数常用的API完成业务开发
熟悉：对原理、性能优化、源码有深刻的认知
精通：能从源码、架构层面进行完善或重写


# 技术栈
  服务端渲染 React SSR
  路由 React-Router
  状态管理 React-Redux @Reduxjs/toolkit
  构建 Webpack
  服务端框架 Koa

# 步骤
转译
模板注入
  注意前后空格
吸水

Redux
  <Provider store={ store }></Provider>
  configureStore({
    reducer: { slice }
  })
  slice = createSlice({ name, initialState, reducers })
  useSelector, useDispatch

# 依赖项
react react-dom react-router react-router-dom react-redux @reduxjs/toolkit
@types/react @types/react-dom
webpack webpack-cli webpack-merge
@babel/core babel-loader @babel/preset-env @babel/preset-react @babel/preset-typescript
mini-css-extract-plugin css-loader sass sass-loader less less-loader postcss postcss-loader postcss-preset-env
koa 

# 常见问题
The first argument must be of type string or an instance of Buffer. Received an instance of Uint8Array
React版本太高，降级到18.0

self is not defined
在webpack的server配置中添加output.globalObject:'this'

document is not defined
在webpack的client和server配置中加上target:'web'/'node'

Functions are not valid as a React child. at RenderedRoute...
使用<Routes>模式加载routes，而不是用useRoutes()

export 'Provider' (imported as 'Provider') was not found in 'react-redux' (module has no exports)
在webpack的common配置resolve.extensions添加'.js'

# dotenv
dotenv源码解析 https://www.ab62.cn/article/33201.html
在多个.env文件之间切换 https://qa.1r1g.com/sf/ask/3878423881/
NODE_ENV不应当用于设置应用程序环境，可以使用单独的环境变量，比如BASE_ENV

