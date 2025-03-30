
# 📦 Webpack Essentials – A Beginner to Pro Guide

Webpack is a powerful module bundler used to compile JavaScript modules and assets for modern web applications.

---

## 📌 What is Webpack?

Webpack is a **static module bundler**. It takes modules with dependencies and generates static assets representing those modules.

---

## 🧱 Core Concepts

### 1. Entry
The starting point for building the dependency graph.

```js
module.exports = {
  entry: './src/index.js',
};
```

### 2. Output
Where Webpack emits the bundled files.

```js
module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```

### 3. Loaders
Transform files into modules (e.g., compile Sass, convert images to base64).

```js
module: {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ]
}
```

### 4. Plugins
Perform additional tasks like minifying code, injecting HTML, cleaning folders.

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
  new HtmlWebpackPlugin({ template: './src/index.html' })
]
```

### 5. Mode
- `development`: Unminified, fast builds, source maps
- `production`: Minified, optimized

```js
module.exports = {
  mode: 'development',
};
```

---

## 🔄 Webpack Dev Server

A development server with hot reloading and live updates.

```js
devServer: {
  static: './dist',
  hot: true,
  port: 3000,
}
```

---

## 📂 Typical Project Structure

```
/project-root
  ├── dist/
  ├── src/
  │   ├── index.js
  │   └── styles.css
  ├── package.json
  ├── webpack.config.js
```

---

## 🛠 Useful Loaders

| Loader | Purpose |
|--------|---------|
| `babel-loader` | Transpile JS (ES6+) |
| `style-loader`, `css-loader` | Load and inject CSS |
| `sass-loader` | Compile Sass/SCSS |
| `file-loader`, `url-loader` | Handle images, fonts |
| `ts-loader` | TypeScript support |

---

## 🔌 Useful Plugins

| Plugin | Purpose |
|--------|---------|
| `HtmlWebpackPlugin` | Injects script into HTML |
| `CleanWebpackPlugin` | Cleans `dist/` folder before build |
| `MiniCssExtractPlugin` | Extracts CSS into files |
| `DefinePlugin` | Define global constants |

---

## ⚙️ Example Full Config

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    static: './dist',
    hot: true,
    port: 3000
  }
};
```

---

## 🧪 Tips & Best Practices

- Use `contenthash` in filenames for cache busting.
- Use `resolve.extensions` to support `.ts`, `.js`, `.jsx`.
- Enable tree-shaking by using ES modules (`import/export`).
- Use `source-map` in dev mode for debugging.

---

## 📚 Additional Resources

- [Webpack Official Docs](https://webpack.js.org/)
- [SurviveJS - Webpack](https://survivejs.com/webpack/)
- [Awesome Webpack (GitHub)](https://github.com/webpack-contrib/awesome-webpack)

---

Let me know if you want advanced topics like:
- Multi-page setups
- Module federation
- Code splitting
- Performance optimization
