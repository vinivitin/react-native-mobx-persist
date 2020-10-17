# react-native-mobx-persist

### Install mobx

```
yarn add mobx mobx-react mobx-persist
```

### Add decorators support

```
yarn add --save-dev @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators
```

### Configure `babel.config.js`

```
module.exports = function (api) {
  api.cache(true);
  return {
    ...
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: false }],
    ],
  };
};
```

🚀🚀🚀

### Additional info

- https://mobx.js.org/README.html
- https://react-native-async-storage.github.io/async-storage/
- https://github.com/pinqy520/mobx-persist
- https://dev.to/lloyds-digital/why-you-should-use-mobx-state-tree-in-your-next-react-project-l3
