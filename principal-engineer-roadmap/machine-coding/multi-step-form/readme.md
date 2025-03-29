## Build a Multi-Step Form with Validation

**Context:**  
Your application requires a multi-step form to collect user information with validation at each step.

---

## **Task:**

1. Develop a multi-step form component with validation.
2. Implement navigation between form steps and handle form submission.
3. Ensure validation rules are applied at each step.

---

## **Expected Implementation Details:**

- **Form Component Structure:** Steps, navigation, and submission.
- **Form State & Validation Rules:** Manage state and apply validation rules.
- **Validation Errors:** Display errors and prevent navigation on invalid input.
- **Form Data Management:** Handle data across steps and final submission.
- **User-Friendly UI/UX:** Provide clear navigation and feedback.

---

## ✅ **Implementation Details:**

- **React with TypeScript:** For robust, type-safe components.
- **Formik and Yup:** For form handling and schema-based validation.
- **Tailwind CSS:** To quickly style the UI and provide a responsive user experience.

---

## 📌 **Form Structure:**

1. **Step 1:** Personal Information (Name, Email)
2. **Step 2:** Address Information (Address, City, Zip Code)
3. **Step 3:** Confirmation and Submission

---

## 🗂 **Project Structure:**

```
MultiStepForm/
│
├── components/
│   ├── StepOne.tsx
│   ├── StepTwo.tsx
│   └── Confirmation.tsx
│
├── schemas/
│   └── validationSchemas.ts
│
└── MultiStepForm.tsx
```

- Organized into reusable components for each step.
- Centralized validation schemas for maintainability.

---

## 🚀 **Complete Implementation:**

### ✅ **1. Validation Schemas (`validationSchemas.ts`):**

- Centralized Yup schemas for each step.
- Ensures consistent and dynamic validation.

---

### ✅ **2. Step Components:**

#### 🔸 **`StepOne.tsx`:**

- Handles personal information input (Name, Email).
- Validates required fields and email format.

#### 🔸 **`StepTwo.tsx`:**

- Handles address information (Address, City, Zip Code).
- Validates required fields and zip code format.

#### 🔸 **`Confirmation.tsx`:**

- Displays a summary of all entered data.
- Allows users to confirm or go back to edit.

---

### ✅ **3. Main Component (`MultiStepForm.tsx`):**

- Manages form state and step navigation.
- Integrates validation schemas dynamically.
- Handles final submission of form data.

---

## ⚙️ **Key Features & Validation:**

- **Step Navigation:** Prevents moving forward if the current step is invalid.
- **Dynamic Validation:** Uses Yup schemas per step to ensure accurate validation.
- **Clear UX:** Immediate, clear feedback about validation errors.
- **Final Confirmation:** Shows a summary before final submission.

---

## 🚩 **Testing the Implementation:**

- Verify validation at each step (e.g., empty fields, invalid email, incorrect zip).
- Confirm correct navigation between steps.
- Ensure final submission captures all form data correctly.

---

## 🎯 **Why this Solution is Ideal:**

- **Maintainable & Extensible:** Easy to add or modify steps.
- **Robust Validation:** Schema-based ensures consistent user inputs.
- **Intuitive UX/UI:** Simple, responsive, clear navigation, and feedback.
