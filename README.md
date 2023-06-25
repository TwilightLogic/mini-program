# Leaning mini-program

## 1. 代码结构

### 1.1 JSON 配置文件

#### 1.1.1 app.json

是当前小程序的全局配置，包括了小程序的所有**页面路径、窗口外观、界面表现、底部 tab**等。

- pages: 用来记录当前小程序所有页面的路径
- window: 用来定义小程序所有页面的背景色、文字颜色等
- style: ：全局定义小程序组件所使用的样式版本
- sitemapLocation：用来指明 sitemap.json 的位置

#### 1.1.2 sitemap.json

微信现已开放小程序内搜索，效果类似于 PC 网页的 SEO。sitemapjson 文件用来配置小程序页面是**否允许微信索引**

如果`index.json`和`app.json`的配置冲突，则会以`index.json`的配置为准

#### 1.1.3 新增小程序页面

只需要在 `app.json-＞pages` 中新增页面的存放路径，小程序开发者工具即可帮我们自动创建对应的页面文件

#### 1.1.4 修改项目首页

只需要调整 `app.json-＞pages` 数组中页面路径的前后顺序，即可修改项目的首页。小程序会把排在第一位的页
面，当作项目首页进行渲染

### 1.2 WXML 模版

WXML(weixinMarkupLanguage)是小程序框架设计的一套标签语言，用来构建小程序页面的结构，其作
用类似于网页开发中的 HTML。

#### 1.2.1 与 HTML 的区别

1. 标签名称不同

- HTML (div, span, img, a)
- WXML (view, text, image, navigator)

2. 属性节点不同

- `<a href="#">超链接</a>`
- `<navigator url="/pages/home/home"></navigator>`

3. 提供了类似子 Vue 中的模板语法

- 数据绑定
- 列表渲染
- 条件渲染

### 1.3 WXSS 样式

#### 1.3.1 与 CSS 的区别

1. 新增了 rpx 尺寸单位

- CSS 中需要手动进行像素单位换算，例如 rem
- wxss 在底层支持新的尺寸单位 rpx，在不同大小的屏幕上小程序会自动进行换算

2. 提供了全局的样式和局部样式

- 项目根目录中的`app.wxss`会作用于所有小程序页面
- 局部页面的`.wxss`样式仅对当前页面生效

3. WXSS 仅支持部分的 CSS 选择器

### 1.4 js

小程序中的 JS 文件分为三大类，分别是：

1. app.js

- 是整个小程序项目的入口文件，通过调用 App()函数来启动整个小程序

2. 页面的.js 文件

- 是页面的入口文件，通过调用 Page()函数来创建并运行页面

3. 普通的.js 文件

- 是普通的功能模块文件，用来封装公共的函数或属性供页面使用

## 2. 宿主环境

小程序的宿主环境就是**手机微信**

小程序宿主环境包含的内容

1. 通信模型
2. 运行机制
3. 组件
4. API

### 2.1 通信模型

#### 2.1.1 通信的主体

小程序中通信的主体是渲染层和逻辑层，其中：

- WXML 模板和 WXSS 样式工作在渲染层
- JS 脚本工作在逻辑层

#### 2.1.2 小程序的通信模型

分为两部分（都是由微信客户端进行转发）：

- 渲染层和逻辑层之间的通信
- 逻辑层和第三方服务器之间的通信

### 2.2 运行机制

1. 把小程序的代码包下载到本地
2. 解析 app.json 全局配置文件
3. 执行 app.js 小程序入口文件，调用`App()`创建小程序实例
4. 渲染小程序首页
5. 小程序启动完成

### 3.1 组件

#### 3.1.1 小程序中组件的分类

小程序中的组件也是由宿主环境提供的，开发者可以基于组件快速搭建出漂亮的页面结构。官方把小程序的组
件分为了 9 大类，分别是：

1. 视图容器
2. 基础肉容
3. 表单组件
4. 导航组件
5. 媒体组件
6. map 地图组件
7. canvas 画布组件
8. 开放能力
9. 无障碍访问

#### 3.1.2 常用的视图容器类组件

1. `view`

- 普通视图区域
- 类似于 HTML 中的`<div>`，是一个块级元素
- 常用来实现页面的布局效果

2. `scroll-view`

- 可滚动的视图区域
- 常用来实现滚动列表效果

3. `swiper`, `swiper-iter`

- 轮播图容器组件和轮播图 item 组件

> **`swiper`组件的常用属性：**
>
> - `indicator-dots`: 是否显示面板指示点
> - `indicator-color`: 指示点颜色
> - `indicator-active-color`: 当前选中的指示点颜色
> - `autoplay`: 是否自动切换
> - `interval`: 自动切换时间间隔
> - `circular`: 是否采用衔接滑动

#### 3.1.3 常用的基础内容组件

1. `text`

- 文本组件
- 类似于 HTML 里的`<span>`，是一个行内元素

2. `rich-text`

- 富文本组件
- 支持把 HTML 字符串渲染为 WXML 结构

##### 3.1.3.1 `text`组件的基本使用

1. 通过 `text` 组件的 `selectable` 属性，实现长按选中文本内容的效果（只有`text`支持长按选中）

2. 通过`rich-text`组件的 nodes 属性节点，把 HTML 字符串渲染为对应的 UI 结构：

```html
<rich-text nodes="h1 style='color:red;'">标题</rich-text>
```

#### 3.1.4 其他常用组件

1. `button`

- 按钮组件
- 功能比 HTML 中的 button 按钮丰富
- 通过`open-type`属性可以调用微信提供的各种功能（客服、转发、获取用户授权、获取用户信息等）

2. `image`

- 图片组件
- image 组件默认宽度约 300pX、高度约 240px

3. `navigator`

- 页面导航组件
- 类似于 HTML 中的 a 链接

> **`image`组件的`mode`属性用来指定图片的裁剪和缩放模式，常用的 mode 属性值如下：**
>
> - `scaleToFill`: （默认值）缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素。
> - `aspectFit`: 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
> - `aspectFill`: 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取
> - `widthFix`: 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变。
> - `heightFix`: 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变。

### 4.1 API

小程序官方把 API 分为了如下 3 大类：

1. 事件监听 API

- 特点：以 on 开头，用来监听某些事件的触发
- 举例：wx.onWindowResize(function callback)监听窗口尺寸变化的事件（这里的`wx`可以理解成 browser 的顶级元素`window`）

2. 同步 API

- 特点 1：以 Sync 结尾的 API 都是同步 API
- 特点 2：同步 API 的执行结果，可以通过函数返回值直接获取，如果执行出错会抛出异常
- 举例：`wx.setStorageSync('key, value')` 向本地存储中写入内容

3. 异步 API

- 特点：类似于 jQuery 中的`$.ajax(options)`函数，需要通过 success、fail、complete 接收调用的结果
- 举例：`wx.request()` 发起网络数据请求，通过 success 回调函数接收数据

## 3. 协同工作和发布

...

## WXML - 模板语法

### 4.1 数据绑定

#### 4.1.1 Mustache 语法的格式

把 data 中的数据鄉定到页面中渲染，使用 Mustache 语法(双大括号）将变量包起来即可。

#### 4.1.2 Mustache 语法的应用场景

Mustache 语法的主要应用场景如下：

- 绑定内容
- 绑定属性
- 运算（三元运算、算术运算等）

### 4.2 事件绑定

**类型**
tap
input
change

**绑定方式**
bindTap 或 bind:tap
bindInput 或 bind:input
bindChange 或 bind:change

**事件描述**
手指触摸后马上离开，类似于 HTML 中的 click 事件
文本框的输入事件
状态改变时触发

#### 4.2.1 `target` 和 `currentTarget` 的区别

`target` 是触发该事件的源头组件，而 `currentTarget` 则是当前事件所绑定的组件。

#### 4.2.2 `bindtap`的语法格式

在小程序中，不存在 HTML 中的 `onclick` 鼠标点击事件，而是通过 tap 事件来响应用户的触摸行为。

1. 通过`bindtap`，可以为组件绑定 `tap` 触摸事件，语法如下：

```html
<button type="primary" bindtap="btnTapHandler">btn</button>
```

#### 4.2.3 在事件处理函数中为 data 中的数据赋值

```js
Page({
  data: {
    count: 0,
  },
  btnTapHandler(e) {
    this.setData({
      count: this.data.count + 1,
    });
  },
});
```

#### 4.2.4 事件传参

小程序中的事件传参比较特殊，不能在绑定事件的同时为事件处理函数传递参数。例如，下面的代码将不能正常工作：

```html
<button type="primary" bindtap="btnHandler(123)">事件传参</button>
```

可以为组件提供 `data-*` 自定义属性传参，其中 `*` 代表的是参数的名字，示例代码如下：

> 如果是 `data-info="2"` 则代表字符串 `"2"`

```html
<button type="primary" data-info="{{2}}">事件传参</button>
```

最终

- **info**会被解析为**参数的名字**
- 数值 **2** 会被解析为**参数的值**

在事件处理函数中，通过 `event.target.dataset.参数名` 即可获取到具体参数的值，示例代码如下：

```js
btnHandler(event) {
    // dataset是一个对象，包含了所有通过 `data-*` 传递过来的参数项
    console.log(event.target.dataset)
    // 通过 dataset 可以访问到具体的参数值
    console.log(event.target.dataset.info)
}
```

#### 4.2.5 `bindinput`的语法格式

在小程序中，通过 input 事件来响应文本框的输入事件（当触发文本框事件的时候，就会调用 `bindinput` 定义的事件处理函数），语法格式如下：

1. 通过 `bindinput` 可以为文本框绑定输入事件：

```html
<input bindinput="inputHandler" />
```

2.在页面的 `.js` 文件中定义事件处理函数：

```js
inputHandler(e) {
    // e.target.value 是变化过后，文本框最新的值（能拿到文本框当前最新的值）
    console.log(e.target.value)
}
```

#### 4.2.6 实现文本框和 data 之间的数据同步

实现步骤：

1. 定义数据
2. 渲染结构
3. 美化样式
4. 绑定 input 事件处理函数

### 4.3 条件渲染

#### 4.3.1 `wx:if`

在小程序中，使用 `wx:if="{{condition}}"` 来判断是否需要渲染该代码块：

```html
<view wx:if="{{condition}}">True</view>
```

也可以用 `wx:elif` 和 `wx:else` 来添加 else 判断：

```html
<view wx:if="{{type === 1}}">男</view>
<view wx:elif="{{type === 2}}">女</view>
<view wx:else>保密</view>
```

#### 4.3.2 结合 `<block>` 使用 `wx:if`

如果要一次性控制多个组件的展示与隐藏，可以使用一个<block></block>标签将多个组件包装起来，并在<block>标签上使用 `wx:if` 控制属性，示例如下：

```html
<block wx:if="{{true}}">
  <view>1</view>
  <view>2</view>
</block>
```

> **注意：**
>
> `<block>`并不是一个组件，它只是一个包裹性质的容器，不会在页面中做任何渲染。

#### 4.3.3 `hidden`

在小程序中，直接使用 `hidden="{{condition}}"` 也能控制元素的显示与隐藏：

```html
<view hidden="{{condition}}">条件为 true 隐藏，条件为 false 显示</view>
```

#### 4.3.4 `wx:if` 与 `hidden` 的对比

1. 运行方式不同

- `wx:if` 以动态创建和移除元素的方式，控制元素的展示与隐藏
- `hidden` 以切换样式的方式(display:none/block;)，控制元素的显示与隐藏

2. 使用建议

- 频繁切换时，建议使用 `hidden`
- 控制条件复杂时，建议使用 `wx:if` 搭配 `wx:elif` 和 `wx:else` 进行展示与隐藏的切换

### 4.4 列表渲染

#### 4.4.1 `wx:for` 的使用

通过 `wx:for` 可以根据指定的数组，循环渲染重复的组件结构，语法示例如下：

```html
<view wx:for="{{array}}"> 索引是：{{index}}，当前项是：{{item}}</view>
```

#### 4.4.2 `wx:key` 的使用

小程序在实现列表渲染时，建议为渲染出来的列表项指定唯一的 `key` 值，从而提高渲染的效率。

这里是 `index.js` 的 data 数据：

```js
data: {
  userList: [
    { id: 1, name: "Lucas" },
    { id: 2, name: "Logic" },
    { id: 3, name: "Luna" },
  ];
}
```

这里是 WXML：

> 注意：key 值里面不用加 mustache 语法

```html
<view wx:for="{{userList}}" wx:key="id">{{item.name}}</view>
```
