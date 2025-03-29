import React from "react";
import { FormikErrors, FormikTouched } from "formik";

interface Props {
  values: { name: string; email: string };
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const StepOne: React.FC<Props> = ({
  values,
  errors,
  touched,
  handleChange,
}) => (
  <div>
    <input
      className="border px-3 py-2 rounded w-full"
      name="name"
      placeholder="Name"
      value={values.name}
      onChange={handleChange}
    />
    {touched.name && errors.name && (
      <div className="text-red-500">{errors.name}</div>
    )}

    <input
      className="border px-3 py-2 rounded w-full mt-2"
      name="email"
      placeholder="Email"
      value={values.email}
      onChange={handleChange}
    />
    {touched.email && errors.email && (
      <div className="text-red-500">{errors.email}</div>
    )}
  </div>
);

export default StepOne;
