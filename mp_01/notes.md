# Leaning mini-program

## 代码结构

### JSON配置文件

#### app.json 

是当前小程序的全局配置，包括了小程序的所有**页面路径、窗口外观、界面表现、底部tab**等。

- pages: 用来记录当前小程序所有页面的路径
- window: 用来定义小程序所有页面的背景色、文字颜色等
- style: ：全局定义小程序组件所使用的样式版本
- sitemapLocation：用来指明sitemap.json的位置

#### sitemap.json

微信现已开放小程序内搜索，效果类似于PC网页的SEO。sitemapjson文件用来配置小程序页面是**否允许微信索引**

如果`index.json`和`app.json`的配置冲突，则会以`index.json`的配置为准

#### 新增小程序页面

只需要在 `app.json-＞pages` 中新增页面的存放路径，小程序开发者工具即可帮我们自动创建对应的页面文件

#### 修改项目首页

只需要调整 `app.json-＞pages` 数组中页面路径的前后顺序，即可修改项目的首页。小程序会把排在第一位的页
面，当作项目首页进行渲染

### WXML模版

WXML(weixinMarkupLanguage)是小程序框架设计的一套标签语言，用来构建小程序页面的结构，其作
用类似于网页开发中的HTML。

#### 与HTML的区别
1. 标签名称不同
- HTML (div, span, img, a)
- WXML (view, text, image, navigator)

2. 属性节点不同
- `<a href="#">超链接</a>`
- `<navigator url="/pages/home/home"></navigator>`

3. 提供了类似子Vue中的模板语法
- 数据绑定
- 列表渲染
- 条件渲染

### WXSS样式

#### 与CSS的区别

1. 新增了rpx尺寸单位
- CSS中需要手动进行像素单位换算，例如rem
- wxss在底层支持新的尺寸单位rpx，在不同大小的屏幕上小程序会自动进行换算

2. 提供了全局的样式和局部样式
- 项目根目录中的`app.wxss`会作用于所有小程序页面
- 局部页面的`.wxss`样式仅对当前页面生效

3. WXSS仅支持部分的CSS选择器

### js

小程序中的JS文件分为三大类，分别是：
1. app.js
- 是整个小程序项目的入口文件，通过调用App()函数来启动整个小程序
2. 页面的.js文件
- 是页面的入口文件，通过调用Page()函数来创建并运行页面
3. 普通的.js文件
- 是普通的功能模块文件，用来封装公共的函数或属性供页面使用

## 宿主环境