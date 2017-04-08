# vue-pattern-input

A Vue2.0 Component used RegExp to limit the user's input, and works like native input element.

## Table of contents

- [Demo build setup](#demo-build-setup)
- [Live Demo](#live-demo)
- [What's included](#whats-included)
- [Quick start](#quick-start)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [License](#license)

## Demo build setup

``` bash
# install dependencies
npm install
or
cnpm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Live demo

Just click there: [Live Demo](http://htmlpreview.github.io/?https://github.com/RoamIn/vue-pattern-input/blob/master/view/demo.html).

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
vue-pattern-input/
├── ...
├── src/
│   ├── /component
│   │   └── pattern-input.vue
│   └── /js
│      └── ... demo ...
└── /view
    └── demo.html
```

## Quick start

#### Parameter declaration

```
/**
 * Component Settings
 * @param  {String} pattern     Using for: RegExp(pattern[, flags])
 * @param  {String} flags       Using for: RegExp(pattern[, flags])
 * @param  {String} replacement Using for: String.prototype.replace(regexp, replacement)
 * ~~@param  {String} placeholder The placeholder of the input~~
 * @param  {String\Number} val  For v-model
 * @return {String}             
 */
```

#### Vue script
```
setting: {
  pattern: '^[0\\D]*|\\D*', // Match string that doen't belong to the positive integer
  flags: 'g',
  replacement: '',
  val: '223'
}
```

#### Vue template
```
<pattern-input class="your-class-name"
               :pattern="setting.pattern"
               :flags="setting.flags"
               :replacement="setting.replacement"
               v-model="setting.val"></pattern-input>
```

> This setting will make user input positive integer only.

## Bugs and feature requests

Have a bug or a feature request? If your problem or idea is not addressed yet, [please open a new issue](https://github.com/RoamIn/vue-pattern-input/issues/new).

## License

Code released under the [MIT License](https://github.com/RoamIn/vue-pattern-input/blob/master/LICENSE).
