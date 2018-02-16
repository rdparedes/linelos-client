import React from "react";

const Transaction = ({ tienda, monto, fecha }) => (
  <tr>
    <td>{tienda}</td>
    <td>{monto}</td>
    <td>{fecha}</td>
  </tr>
);

export default Transaction;
