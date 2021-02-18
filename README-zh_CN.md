# vue-pattern-input

[![npm package](https://img.shields.io/npm/v/vue-pattern-input.svg?style=flat-square)](https://www.npmjs.com/package/vue-pattern-input)
[![NPM downloads](https://img.shields.io/npm/dw/vue-pattern-input.svg?style=flat-square)](http://npmjs.com/vue-pattern-input)

在 `input` 输入框上使用正则限制用户的输入。

和原生的输入框完全一致（除了会限制输入）：
- 支持任意原生属性，比如： `maxlength` `class`
- 支持 `v-model`
- 支持所有的原生事件： `change`、`blur` 等等

简体中文 | [English](./README.md)

## 目录

- [在线 Demo](#在线-demo)
- [项目结构](#项目结构)
- [参数说明](#参数说明)
- [快速开始](#快速开始)
- [更新日志](#更新日志)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [一些想法](#一些想法)
- [License](#license)

## 在线 Demo

点击此处: [Live Demo](https://dp31h.csb.app/).

## 项目结构

项目目录结构如下：

```
vue-pattern-input/
├── ...
├── src/
│   └── /component
│       └── pattern-input.vue // core
└── /view
    └── demo.html
```

## 参数说明


Parameter|Type|Default|Required|Description
--- | --- | --- | --- | --- |
regExp | RegExp | null | false | Using for: String.prototype.replace(regexp, replacement)
replacement | String | '' | false | Using for: String.prototype.replace(regexp, replacement)
v-model[.number] | String/Number | | true | Using for getting input value

## 常见的正则

regExp|Description
--- | --- |
/^[0\D]\*\|\D*/g | 只能输入正整数
/[^a-z]/g | 只能输入小写字母
/[^A-Z]/g | 只能输入大写字母
/[^\w]/g | 只能输入 \w, 即 [A-Za-z0-9_]
/[^\u4e00-\u9fa5]/g | 只能输入中文


## 快速开始

#### JavaScript

```javascript
setting: {
  regExp: /^[0\D]*|\D*/g, // Match any character that doesn't belong to the positive integer
  replacement: '',
  val: '223'
}
```

#### HTML

```html
<pattern-input class="your-class-name"
               :regExp="setting.regExp"
               :replacement="setting.replacement"
               @input="handleInput"
               @change="handleChange"
               v-model.number="setting.val"></pattern-input>
```

> This setting will make user input positive integer only.

> When you want get a Number, remember use `v-model.number`, and the safe maxlength is 15.


## 更新日志

### v3.0.0

- 支持 Vue3.0

### v2.1.4

- Use immediate watch

### v2.1.3
- ~~I'm not sure is it necessary to emit all the input events. Now I only emit `input` and `change` events.~~
- Now, you can bind any native event on input !
  ```html
  <pattern-input
                 ...
                 @change="onChange"
                 @blur="onBlur"
                 @focus="onFocus"
                 ...etc
                 ...</pattern-input>
  ```
- Required:
    - Vue: v2.4.0+, because it use [$listeners](https://vuejs.org/v2/api/#vm-listeners)

## Bugs and feature requests

Have a bug or a feature request? If your problem or idea is not addressed yet, [please open a new issue](https://github.com/RoamIn/vue-pattern-input/issues/new).

## 一些想法

~~I'm not sure is it necessary to emit all the input events. Now I only emit `input` and `change` events.~~

我觉得现在这种正则限制输入并不是很好，感觉怪怪的。 可能所需要写的正则是去除所不需要的字符，而不是所需要的字符吧。

## License

Code released under the [MIT License](https://github.com/RoamIn/vue-pattern-input/blob/master/LICENSE).
