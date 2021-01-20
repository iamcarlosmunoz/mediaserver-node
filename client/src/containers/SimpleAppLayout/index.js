import React from "react";
import "./styles.css";

const SimpleAppLayout = ({ children }) => {
  return (
    <div className="imposter imposter--center">
      {children}
    </div>
  );
};

export default SimpleAppLayout;