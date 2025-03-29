## Implement a Shopping Cart State Management

### **Context:**

Your e-commerce web application needs a robust state management solution to handle the shopping cart, which includes adding, updating, and removing items.

---

### **Task:**

1. Design the state structure for the shopping cart.
2. Implement the actions and reducers (or equivalent) to manage the state.
3. Ensure the solution integrates well with the frontend framework you are using.

---

### **Expected Discussion Points:**

- State management approach (e.g., Redux, Vuex, Context API).
- Designing the state schema to handle cart items, quantities, and totals.
- Implementing actions for adding, updating, and removing items.
- Using middleware or side effects (e.g., for asynchronous actions).
- Testing the state management logic and ensuring it is maintainable.

---

## **1. State Structure**

The cart state is defined as follows:

- **items:** An array of cart items. Each item includes:
  - `id`: Unique identifier for the item.
  - `name`: Name of the product.
  - `price`: Price of the product.
  - `quantity`: Quantity of the product in the cart.
- **total:** A computed value representing the total price of all items in the cart.

---

## **2. Redux Slice for Cart**

We use Redux Toolkit’s `createSlice` to create actions and reducers in one place. This approach makes the state management logic concise and easy to maintain.

```tsx
// cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart. If it exists, increase the quantity.
    addItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
      // Recalculate total
      state.total = state.items.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
    },
    // Update the quantity of an existing item.
    updateItem: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity = quantity;
      }
      // Recalculate total
      state.total = state.items.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
    },
    // Remove an item from the cart.
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      // Recalculate total
      state.total = state.items.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
    },
    // Clear the entire cart.
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, updateItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
```

---

## **3. Integration with the Frontend**

To integrate this into your React application:

1. Add the reducer to your Redux store.

```tsx
// store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

2. Use Redux hooks (`useSelector`, `useDispatch`) in your components to:
   - Dispatch actions (e.g., add, update, or remove items).
   - Read the cart state (e.g., items and total).

```tsx
// ShoppingCart.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { addItem, updateItem, removeItem, clearCart } from "./cartSlice";

const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, total } = useSelector((state: RootState) => state.cart);

  const handleAddItem = () => {
    dispatch(
      addItem({ id: "1", name: "Product 1", price: 29.99, quantity: 1 })
    );
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={handleAddItem}>Add Product 1</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} × {item.quantity}
            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div>Total: ${total.toFixed(2)}</div>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default ShoppingCart;
```

---

## **4. Middleware and Side Effects**

For asynchronous actions (e.g., syncing cart state with a backend):

- Use **Redux Thunk** (built into Redux Toolkit) or other middleware.
- Example use case:
  - Sync cart state with a backend when a user adds or removes items.
  - Fetch the initial cart state when the application loads.

Handle these asynchronous actions using extra reducers in your slice.

```tsx
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartItem } from "./cartSlice";
import axios from "axios";

export const syncCart = createAsyncThunk(
  "cart/syncCart",
  async (cartItems: CartItem[]) => {
    const response = await axios.post("/api/cart/sync", cartItems);
    return response.data;
  }
);
```

---

## **5. Testing the State Management Logic**

### **Testing Reducers:**

- Write unit tests that:
  - Dispatch actions (e.g., add, update, remove items).
  - Verify that the resulting state matches expectations.

### **Testing Middleware:**

- Mock API calls and test asynchronous actions using libraries like Jest or MSW (Mock Service Worker).

---

## **Summary**

- **State Schema:**

  - Defined with an array of cart items and a computed total for simplicity and clarity.

- **Actions:**

  - Provided for adding, updating, removing, and clearing cart items.

- **Integration:**

  - Uses Redux Toolkit to simplify reducer and action creation, ensuring easy integration into a React application.

- **Side Effects:**

  - Managed using Redux Thunk for asynchronous operations like syncing with a backend.

- **Maintainability:**
  - The code is modular, self-contained, and easy to test, ensuring long-term scalability and reliability.
