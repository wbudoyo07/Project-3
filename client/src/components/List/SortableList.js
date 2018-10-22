import React from "react";
import SortableItem from "./SortableItem"
import "./List.css";
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

export const SortableList = SortableContainer(({items}) => {
    return (
      <div className="list-overflow-container">
      <ul className="list-group">>
        {items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      </ul>
      </div>
    );
  });