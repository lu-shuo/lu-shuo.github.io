# 原型链

```javascript
function Person() {}
let person = new Person()
person.__proto__ === Person.prototype // true
Object.getPrototypeOf(person) === Person.prototype // true
```

## prototype

每一个函数都有 prototype 属性，且**只有函数**有 prototype 属性。这个属性指向一个对象，这个对象即是通过这个构造函数构造出的**实例**的**原型**。

原型可以理解为每一个 JavaScript 对象(null 除外)在创建的时候就会与之关联的另一个对象，每一个对象都会从原型"继承"属性。

![](https://gitee.com/cn-darren/pic/raw/master/img/prototype1.png)

## `__proto__`

对象如何指向自己的原型，即通过`__proto__`，如文章顶部代码所示。

![](https://gitee.com/cn-darren/pic/raw/master/img/prototype2.png)

## constructor

一个构造函数可以构造多个实例，所以`prototype`没有指向实例的属性。但是原型对于函数来说则是一对一的关系，`prototype`的`constructor`属性指向对应的构造函数。

```
function Person() {}
let person = new Person()
console.log(Person === Person.prototype.constructor); // true
console.log(Person === person.constructor); // true
// person并没有constructor属性，会从原型中即Person.prototype中读取。
```

## 原型链

对象在查找属性时，如果自身没有要找的属性，便会去自身的原型上查找，如果还没有，就会去原型的原型上查找。每个原型也是对象，就是由 Object 构造函数生成的，所以最终会找到 Object 的 prototype。再往上找的话，会发现`Object.prototype.__proto__`为 null，即原型链的尽头。

下图中相互串联的原型组成的蓝色链状结构即为**原型链**。

![](https://gitee.com/cn-darren/pic/raw/master/img/prototype5.png)

### 注意

#### proto

其次是 **proto** ，绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 Person.prototype 中，实际上，它是来自于 Object.prototype ，与其说是一个属性，不如说是一个 getter/setter，当使用 obj.**proto** 时，可以理解成返回了 Object.getPrototypeOf(obj)。

#### 真的是继承吗？

最后是关于继承，前面我们讲到“每一个对象都会从原型‘继承’属性”，实际上，继承是一个十分具有迷惑性的说法，引用《你不知道的 JavaScript》中的话，就是：

继承意味着复制操作，然而 JavaScript 默认并不会复制对象的属性，相反，JavaScript 只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。
