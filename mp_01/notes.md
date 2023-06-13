## Leaning mini-program

### 代码结构

`app.json` 是当前小程序的全局配置，包括了小程序的所有**页面路径、窗口外观、界面表现、底部tab**等。

- pages: 用来记录当前小程序所有页面的路径
- window: 用来定义小程序所有页面的背景色、文字颜色等
- style: ：全局定义小程序组件所使用的样式版本
- sitemapLocation：用来指明sitemap.json的位置

`sitemap.json` 

微信现已开放小程序内搜索，效果类似于PC网页的SEO。sitemapjson文件用来配置小程序页面是**否允许微信索引**

如果`index.json`和`app.json`的配置冲突，则会以`index.json`的配置为准

### 新增小程序页面

只需要在 `app.json-＞pages` 中新增页面的存放路径，小程序开发者工具即可帮我们自动创建对应的页面文件，