# 常用 css 技巧

## 未知尺寸固定宽高比

:::tip 可替换元素
在 CSS 中，可替换元素（replaced element）的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。

简单来说，它们的内容不受当前文档的样式的影响。CSS 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。某些可替换元素，例如 `<iframe>` 元素，可能具有自己的样式表，但它们不会继承父文档的样式。

典型的可替换元素有：`<iframe>`, `<video>`, `<embed>`, `<img>`。
:::

### 可替换元素

可替换元素固定宽高比比较简单，他们本身就有像素高度和宽度的概念，设置 width 或者 height 为一个具体值，另一个属性设置为 auto 即可。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>固定宽高比</title>
    <style>
      .image-wrapper {
        width: 30vw;
        height: auto;
        border: 1px solid greenyellow;
      }
      .image-wrapper img {
        width: 100%;
        /* 消除底部空白 */
        vertical-align: bottom;
      }
    </style>
  </head>
  <body>
    <div class="image-wrapper">
      <img
        src="https://cdn.pixabay.com/photo/2023/06/07/14/21/mountain-8047293_1280.jpg"
        alt=""
      />
    </div>
  </body>
</html>
```

### 普通元素

#### padding-bottom

根据[padding](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding)的定义，当 padding 的值为百分比时，它相对于包含块的宽度。
由此我们可以设置`padding-bottom`为宽度的固定比，以此达到宽高比固定的效果：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>固定宽高比</title>
    <style>
      .wrapper {
        width: 30vw;
      }
      .wrapper .box {
        width: 100%;
        padding-bottom: 56.25%;
        border: 1px solid black;
        position: relative;
      }
      .wrapper .box .content {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="box">
        <div class="content">16:9</div>
      </div>
    </div>
  </body>
</html>
```

这种方式有两个缺点：

- 只能让高度跟随宽度值变化，而不能让宽度跟随高度而变化，因为百分比不能按照包含元素的高度来设置。
- 元素内部是不能放内容的，以为元素实际的高度为 0。可以定义一个绝对定位的子元素来盛放内容，如上面代码所示的`content`。

#### [aspect-ratio](https://developer.mozilla.org/zh-CN/docs/Web/CSS/aspect-ratio)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>固定宽高比</title>
    <style>
      .wrapper {
        width: 200px;
        aspect-ratio: 16/9;
        border: 10px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">16:9</div>
  </body>
</html>
```
