import * as Yup from "yup";

export const stepOneValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export const stepTwoValidation = Yup.object({
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  zip: Yup.string()
    .matches(/^\d{5}$/, "Zip must be exactly 5 digits")
    .required("Zip is required"),
});
