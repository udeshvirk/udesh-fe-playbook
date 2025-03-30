
# 🎨 Advanced HTML & CSS Notes

A deep dive into advanced topics in HTML and CSS for building modern, accessible, and responsive web applications.

---

## 🔧 Advanced HTML Concepts

### 1. Semantic HTML
- Use tags that describe the content purpose.
- Examples: `<article>`, `<section>`, `<aside>`, `<figure>`, `<time>`, `<mark>`, `<details>`.

**Benefits:**
- Better SEO
- Improved accessibility
- Easier maintenance

---

### 2. Forms and Validation
- Use `<form>`, `<fieldset>`, `<legend>`, and `<label>`.
- Use built-in validation attributes:
  - `required`
  - `pattern`
  - `min`, `max`, `step`
  - `type="email"`, `type="tel"`, etc.

**Custom Validation:**
```html
<input id="age" type="number" required>
<script>
  document.getElementById('age').addEventListener('input', function(e) {
    if (e.target.value < 18) {
      e.target.setCustomValidity("You must be 18 or older.");
    } else {
      e.target.setCustomValidity("");
    }
  });
</script>
```

---

### 3. Accessibility (a11y)
- Use `aria-*` attributes for assistive technologies.
- Use `role`, `aria-label`, `aria-hidden`, etc.
- Always use `<label>` with form controls.
- Ensure good tab order and keyboard navigation.

---

### 4. Web Components
- Custom elements, shadow DOM, and templates.

```js
class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<p>Hello from component</p>";
  }
}
customElements.define('my-component', MyComponent);
```

---

## 💅 Advanced CSS Concepts

### 1. Specificity & Cascade
- Specificity determines which styles apply.
- Inline > ID > Class > Element
- The last rule wins if specificity is equal.

---

### 2. Positioning
- `static`, `relative`, `absolute`, `fixed`, `sticky`
- `z-index` to layer elements (only works on positioned elements)

---

### 3. Flexbox
```css
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
```

**Common properties:**
- `flex-grow`, `flex-shrink`, `flex-basis`
- `gap` for spacing

---

### 4. CSS Grid
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
```

**Advanced Features:**
- `grid-template-areas`
- `minmax()`, `auto-fill`, `auto-fit`

---

### 5. Custom Properties (CSS Variables)
```css
:root {
  --primary-color: #007bff;
}
button {
  background: var(--primary-color);
}
```

---

### 6. Animations & Transitions
```css
transition: all 0.3s ease;
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

### 7. Responsive Design
- Use media queries:
```css
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
```

- Use relative units: `em`, `rem`, `%`, `vw`, `vh`

---

### 8. CSS Functions
- `calc()`, `clamp()`, `min()`, `max()`

```css
font-size: clamp(1rem, 2vw, 2rem);
```

---

### 9. Advanced Selectors
- Attribute selectors: `[type="text"]`
- Pseudo-classes: `:nth-child(2n)`, `:not()`, `:focus-visible`
- Pseudo-elements: `::before`, `::after`

---

### 10. Layered Effects with `mix-blend-mode` and `filter`
```css
.overlay {
  mix-blend-mode: multiply;
  filter: blur(2px) brightness(80%);
}
```

---

## 🔥 Modern Best Practices

- Prefer `flex`/`grid` over floats.
- Avoid `!important` unless absolutely necessary.
- Use `normalize.css` or reset styles.
- Use logical properties: `margin-inline-start`, `padding-block-end`
- Test accessibility with screen readers or Lighthouse

---

## 📚 Additional Resources

- [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Web.dev by Google](https://web.dev/)
- [CSS Tricks](https://css-tricks.com/)

---

Let me know if you'd like a visual guide, interactive playgrounds, or printable cheat sheets!
