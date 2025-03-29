import React from "react";

interface Props {
  values: {
    name: string;
    email: string;
    address: string;
    city: string;
    zip: string;
  };
}

const Confirmation: React.FC<Props> = ({ values }) => (
  <div className="space-y-2">
    <p>
      <strong>Name:</strong> {values.name}
    </p>
    <p>
      <strong>Email:</strong> {values.email}
    </p>
    <p>
      <strong>Address:</strong> {values.address}, {values.city}, {values.zip}
    </p>
  </div>
);

export default Confirmation;
