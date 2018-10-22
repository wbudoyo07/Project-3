import React from "react";

export const ListItemDrag = (((this.state.items.map((item, i, props) => (
  
  <li className="list-group-item"
  data-id={i}
            key={i}
            draggable='true'
            onDragEnd={this.dragEnd.bind(this)}
            onDragStart={this.dragStart.bind(this)}>
    {props.children}
  </li>
)))));