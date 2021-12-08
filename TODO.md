# 新功能

- [x] 支持脚本创建页面
- [x] 支持 eslint
- [x] 提交代码勾子——eslint校验提交代码
- [x] 图片懒加载
- [x] 错误上报，sourceMap 分析
- [ ] 借助 github 接口实现 错误 定位个人(gihub rest api 目前不支持 blame)
- [x] 埋点上报方案 https://www.npmjs.com/package/appear-polyfill
- [ ] 自动化测试用例
- [x] 页面功能优化，例如画廊
- [x] 引入react-window https://github.com/bvaughn/react-window
- [x] 使用 reselect 优化 useSelect https://react-redux.js.org/api/hooks#useselector
- [ ] 支持不等高瀑布流
- [x] 图片 blur hash
- [ ] 开发环境 - 分路由启



# Bug list
- [x] 首页 卡片 高度不固定


# 优化
- [ ] 路由切换 loading
- [x] 支持刷新当前路由页面（使用 hashRouter 实现）
- [ ] bundle 大小优化
- [x] 线上环境 js 文件不加载 sourceMap
- [x] html 文件追加当前打包 hashId
- [ ] reducer 支持默认导出全部 (导出模块方式暂不支持)
- [x] 抽离 selector 到 meta 文件夹下
- [ ] npm run create 支持 'a-b' 格式
- [x] 埋点窗口点击特效增加上下移动效果
- [x] 埋点数据支持清空
- [ ] 构建缓存