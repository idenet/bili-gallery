# bilibili Gallery

```
npm i  
// 安装包

npm run serve 
// 开启
```

## vue-cli 3.0
奇奇怪怪的小问题有点多，不过比起之前那么多配置，真的好很多了

## 总结
1. 提取dumb组件(只渲染数据)，到后来基本都是复用的，写代码就是前面慢后面快
2. css还是要加强，写得有点慢
3. 中间组件(获取数据传给子组件)虽然代码很少，但是代码重复好多，如何提取出来是个问题
4. vue写起来真的很利索
5. 很奇怪用浏览器有点卡(这是可以预见的，图很大)，手机反而不怎么卡

## 小问题
因为image链接都是原图，如果加上@700w.webp 电脑上是可以显示的，手机上不能显示。不明白为什么
已经加上了`<meta name="referrer" content="never">`
## 图片 size 不一样，如果我想使用 img，让超过的部分 hidden

第一种 使用 background

```
backgroundSize: cover 背景图等比缩放到容器
// 注意这种智能使用背景图模式
```

第二种 使用 img

```
.container {
  width: 100%;
  height: 0;
  padding-bottom: 75%;
  overflow: hidden;
  > img {
    width: 100%
  }
}
```

这种是等比缩放高度，只显示 75%

## bug

1.  rank 页滑动到最后有一些显示不了为什么？

**注意** 在使用定位的时候，不要用`height：100%`。。。
