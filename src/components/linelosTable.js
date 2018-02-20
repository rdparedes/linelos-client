import React from "react";
import Transaction from "./transaction";

const LinelosTable = ({ transactions }) => (
  <table>
    <thead>
      <tr>
        <th>Establecimiento</th>
        <th>Monto</th>
        <th>Fecha de la transacción</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => (
        <Transaction
          key={transaction.fecha}
          tienda={transaction.tienda}
          monto={transaction.monto}
          fecha={transaction.fecha}
        />
      ))}
    </tbody>
  </table>
);

export default LinelosTable;
