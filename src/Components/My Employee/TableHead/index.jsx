import React from "react";
import "./style.css";

function TableHead(props) {
  return (
    <thead className="thead">
      <th>name</th>
      <th>email</th>
      <th>Phone Number</th>
    </thead>
  );
}

export default TableHead;
