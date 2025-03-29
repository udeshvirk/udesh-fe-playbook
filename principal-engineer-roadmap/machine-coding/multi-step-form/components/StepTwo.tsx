import React from "react";
import { FormikErrors, FormikTouched } from "formik";

interface Props {
  values: { address: string; city: string; zip: string };
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const StepTwo: React.FC<Props> = ({
  values,
  errors,
  touched,
  handleChange,
}) => (
  <div>
    <input
      className="border px-3 py-2 rounded w-full"
      name="address"
      placeholder="Address"
      value={values.address}
      onChange={handleChange}
    />
    {touched.address && errors.address && (
      <div className="text-red-500">{errors.address}</div>
    )}

    <input
      className="border px-3 py-2 rounded w-full mt-2"
      name="city"
      placeholder="City"
      value={values.city}
      onChange={handleChange}
    />
    {touched.city && errors.city && (
      <div className="text-red-500">{errors.city}</div>
    )}

    <input
      className="border px-3 py-2 rounded w-full mt-2"
      name="zip"
      placeholder="Zip Code"
      value={values.zip}
      onChange={handleChange}
    />
    {touched.zip && errors.zip && (
      <div className="text-red-500">{errors.zip}</div>
    )}
  </div>
);

export default StepTwo;
