import React, { useState } from "react";
import { Formik, Form } from "formik";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import Confirmation from "./components/Confirmation";
import {
  stepOneValidation,
  stepTwoValidation,
} from "./schemas/validationSchemas";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);

  const initialValues = {
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  };

  const validationSchema = [stepOneValidation, stepTwoValidation][step - 1];

  const handleSubmit = (values: typeof initialValues) => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      alert(`Form Submitted Successfully!\n${JSON.stringify(values, null, 2)}`);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow rounded">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={true}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form>
            {step === 1 && (
              <StepOne
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
              />
            )}
            {step === 2 && (
              <StepTwo
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
              />
            )}
            {step === 3 && <Confirmation values={values} />}

            <div className="flex justify-between mt-4">
              {step > 1 && (
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={() => setStep(step - 1)}
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded ml-auto"
              >
                {step === 3 ? "Submit" : "Next"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;
