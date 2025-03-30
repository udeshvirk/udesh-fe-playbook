
# ⚡ Vite Essentials – Fast Frontend Tooling

Vite is a modern, lightning-fast frontend build tool that focuses on speed, simplicity, and a great developer experience.

---

## 🚀 What is Vite?

Vite (pronounced "veet") is a **next-generation frontend tooling** that leverages **native ES modules** in the browser and **esbuild** for blazing fast performance.

---

## 📦 Key Features

- Lightning-fast cold start using native ESM
- Instant Hot Module Replacement (HMR)
- Built-in support for Vue, React, TypeScript, JSX
- Highly configurable with plugins
- Pre-bundling using `esbuild` for performance

---

## 🧱 Basic Project Setup

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

---

## 📁 Project Structure

```
/my-app
  ├── index.html
  ├── vite.config.js
  ├── /src
  │   ├── main.js
  │   └── App.vue (if Vue)
```

---

## 🔧 Configuration (`vite.config.js`)

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
```

---

## 🧪 Vite vs Webpack

| Feature              | Vite                     | Webpack              |
|----------------------|--------------------------|----------------------|
| Cold Start           | Instant                  | Slower (bundling)    |
| HMR Speed            | Instant                  | Slower               |
| Config Complexity    | Minimal                  | High                 |
| Out-of-box Support   | Modern JS, TS, JSX, Vue  | Needs loaders        |
| Build Time           | Faster (esbuild)         | Slower (Webpack)     |

---

## ⚙️ Server Options

```js
server: {
  host: '0.0.0.0',
  port: 3000,
  strictPort: true,
  open: true,
  proxy: {
    '/api': 'http://localhost:8080'
  }
}
```

---

## 📦 Build Options

```js
build: {
  outDir: 'dist',
  minify: 'esbuild', // or 'terser'
  sourcemap: true,
  rollupOptions: {
    input: './index.html'
  }
}
```

---

## 🔌 Plugins

Install and use plugins like this:

```bash
npm install @vitejs/plugin-react
```

```js
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

Useful plugins:
- `@vitejs/plugin-vue`
- `@vitejs/plugin-react`
- `vite-plugin-pwa`
- `vite-plugin-compression`

---

## 🧪 Environment Variables

Create a `.env` or `.env.local` file:

```env
VITE_API_URL=https://api.example.com
```

Use in code:
```js
console.log(import.meta.env.VITE_API_URL);
```

---

## 🪄 CSS & Assets

- CSS modules supported out of the box.
- Static assets go in `/public`.
- Supports `postcss.config.js`, `tailwind.config.js`.

---

## ✅ Best Practices

- Use `.env` for secrets and endpoints.
- Prefer native ESM packages.
- Use `vite.config.js` for custom behavior (proxy, alias, etc.).
- Analyze bundles with `rollup-plugin-visualizer`.

---

## 📚 Resources

- [Vite Official Site](https://vitejs.dev)
- [Awesome Vite](https://github.com/vitejs/awesome-vite)
- [VitePress](https://vitepress.dev/) – Static site generator by Vite team

---

Let me know if you want to dive into:
- SSR with Vite
- PWA support
- Deploying Vite apps
