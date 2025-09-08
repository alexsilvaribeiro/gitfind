import React from "react";
import "./styles.css";

const ItemList = (props) => {
  return (
    <div className="item-list">
      <strong>{props.title}</strong>
      <p>{props.description}</p>
      <hr />
    </div>
  );
};

export default ItemList;
