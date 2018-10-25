import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 200, clear: "both", paddingTop: 30, textAlign: "center", backgroundColor: "#007BA7" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
