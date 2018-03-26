import React from "react";

const formatAsMoney = monto => `\$${monto.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}`;
const formatAsDate = fecha => new Date(fecha).toLocaleDateString("es-EC");

const Transaction = ({ tienda, monto, fecha }) => (
  <tr>
    <td>{tienda}</td>
    <td>{formatAsMoney(monto)}</td>
    <td>{formatAsDate(fecha)}</td>
  </tr>
);

export default Transaction;
