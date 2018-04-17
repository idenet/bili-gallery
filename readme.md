# bilibili Gallery

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
