# 广州月保车位官网

这是一个可以直接部署上线的静态官网项目，适合停车场月保车位引流获客。

## 文件说明

- `index.html`：网页主体
- `style.css`：页面样式
- `script.js`：停车场数据和表单逻辑

## 本地打开

解压后，双击 `index.html` 即可在浏览器中查看。

## 部署到 GitHub Pages

1. 登录 GitHub
2. 创建新仓库，例如 `parking-website`
3. 上传本项目全部文件
4. 进入仓库 `Settings`
5. 点击 `Pages`
6. Source 选择 `Deploy from a branch`
7. Branch 选择 `main`，目录选择 `/root`
8. 保存后等待几分钟
9. 得到访问链接：`https://你的用户名.github.io/parking-website/`

## 修改联系方式

打开 `index.html`，找到：

```html
<p><strong>微信：</strong>请替换为你的微信号</p>
<p><strong>电话：</strong>请替换为你的手机号</p>
```

把文字替换成你的真实微信号和手机号。

## 修改停车场信息

打开 `script.js`，修改 `parkingLots` 里面的名称、区域、价格和图片。

## 建议

上线后可以把链接放到：

- 小红书主页
- 抖音简介
- 闲鱼商品介绍
- 微信朋友圈
- 停车场推广海报二维码
