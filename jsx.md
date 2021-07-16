* React DOM 在渲染所有输入内容之前，默认会进行转义为字符串。防止注入攻击。

# JSX表示对象

1. Babel将JSX转译为React.createElement()函数调用
```js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

2. React.createElement创建一个描述对象(react元素)
```js
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

3. React通过上述react元素构建DOM