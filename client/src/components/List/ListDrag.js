import React from "react";
import "./List.css";

export const ListDrag = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul className="list-group"
      onDragOver={this.dragOver.bind(this)}>
        {children}
      </ul>
    </div>
  );
};
