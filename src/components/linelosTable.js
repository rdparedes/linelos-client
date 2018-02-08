import React from "react";
import Record from "./record";

const LinelosTable = ({ records }) => (
  <table>
    <thead>
      <tr>
        <th>Establecimiento</th>
        <th>Monto</th>
        <th>Fecha de la transacción</th>
      </tr>
    </thead>
    <tbody>{records.map(record => <Record />)}</tbody>
  </table>
);

export default LinelosTable;
