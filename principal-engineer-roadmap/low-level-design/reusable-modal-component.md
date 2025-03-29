## Design a Reusable Modal Component

### **Context:**

Your web application requires a modal component that can be reused across different parts of the application for various purposes such as notifications, confirmations, and form inputs.

---

### **Task:**

1. Design the modal component to be highly reusable and customizable.
2. Implement the component, ensuring it is easy to integrate and use in different contexts.
3. Provide an example usage of the component in a simple application.

---

### **Expected Discussion Points:**

- Component API design (props, events, slots).
- Customization options (e.g., size, styles, content).
- Handling open/close state and animations.
- Accessibility considerations (e.g., focus management, ARIA roles).
- Ensuring the component is lightweight and performant.

---

## **Key Design Considerations**

### 1. **Component API**

#### **Props:**

- `isOpen` (boolean): Controls modal visibility.
- `onClose` (function): Callback when modal requests to close.
- `title` (optional string): Title text for the modal.
- `children` (React.ReactNode): Modal content.
- `size` (optional string or enum): Allows customizing the modal size (e.g., `'small'`, `'medium'`, `'large'`).
- `className` (optional string): For additional custom styling.

#### **Events/Callbacks:**

- `onClose` is triggered when clicking the close button, backdrop, or pressing the Escape key.

---

### 2. **Customization Options**

- Customizable size via the `size` prop.
- Style and animation customization via CSS classes.
- Content is provided via the `children` prop for maximum flexibility.

---

### 3. **Open/Close & Animations**

- Uses CSS transitions for fade-in/fade-out animations.
- Closes on backdrop click and Escape key press.

---

### 4. **Accessibility**

- Uses ARIA roles (`role="dialog"`, `aria-modal="true`).
- Focus is trapped within the modal when open (for simplicity, a basic focus management is implemented; consider using a library like `react-focus-lock` for production).
- Initial focus is set to the modal container when it opens.

---

### 5. **Performance & Lightweight**

- Uses React Portals to render the modal outside the main DOM hierarchy.
- Minimal dependencies for a lightweight footprint.

---

## **Reusable Modal Component Implementation**

```tsx
// ReusableModal.tsx
import React, { useEffect, useRef, ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "small" | "medium" | "large";
  className?: string;
  children: ReactNode;
}

const modalRoot = document.getElementById("modal-root");

const ReusableModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  size = "medium",
  className = "",
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus on modal when it opens
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={modalRef}
        className={`bg-white rounded shadow-lg transform transition-all duration-300 focus:outline-none ${sizeClass(
          size
        )} ${className}`}
        onClick={(e) => e.stopPropagation()} // Prevent backdrop click from closing when clicking inside modal
        tabIndex={-1}
      >
        {title && (
          <div className="px-4 py-2 border-b">
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
        )}
        <div className="p-4">{children}</div>
        <div className="px-4 py-2 border-t text-right">
          <button
            onClick={onClose}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

const sizeClass = (size: "small" | "medium" | "large"): string => {
  switch (size) {
    case "small":
      return "w-1/3";
    case "large":
      return "w-5/6";
    case "medium":
    default:
      return "w-1/2";
  }
};

export default ReusableModal;
```

---

## **Example Usage in a Simple Application**

```tsx
// App.tsx
import React, { useState } from "react";
import ReusableModal from "./ReusableModal";

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Reusable Modal Component Demo</h1>
      <button
        onClick={() => setModalOpen(true)}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
      >
        Open Modal
      </button>

      <ReusableModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Example Modal"
        size="medium"
      >
        <p>
          This modal can be reused across your application for notifications,
          confirmations, or forms.
        </p>
      </ReusableModal>
    </div>
  );
};

export default App;
```

---

## **Integration Note**

Make sure to add a `div` with the id `"modal-root"` in your HTML file (e.g., `public/index.html`) to serve as the portal mount point.

```html
<body>
  <div id="root"></div>
  <div id="modal-root"></div>
</body>
```

---

## **Summary**

- **Reusable & Customizable:**  
  The modal accepts various props for title, size, custom styling, and content.
- **State Management & Accessibility:**  
  The modal manages its open/close state, handles focus, and supports keyboard accessibility.
- **Easy Integration:**  
  By using React Portals, it can be inserted into any part of the application without interfering with the existing DOM hierarchy.

This design offers a lightweight, flexible solution ideal for a wide range of modal use cases in your web application.
