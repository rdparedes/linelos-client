import React from "react";
import LinelosTable from "./linelosTable";

const App = ({ transactions, fetchDataEvent }) => (
  <section>
    <h1>Linelos</h1>
    <button onClick={fetchDataEvent}>Consultar transacciones</button>
    {transactions.length > 0 ? (
      <LinelosTable transactions={transactions} />
    ) : (
      <p>No hay datos</p>
    )}
  </section>
);

export default App;
