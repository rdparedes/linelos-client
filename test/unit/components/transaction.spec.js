import React from "react";
import { shallow, configure } from "enzyme";
import Transaction from "../../../src/components/transaction";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Transaction", () => {
  it("renders a row with required data", () => {
    const fakeTransaction = {
      tienda: "PAYPAL *BLIZZARDENT",
      monto: 19.99,
      fecha: "2017-07-25T17:54:00Z"
    };
    const componentText = shallow(
      <Transaction
        tienda={fakeTransaction.tienda}
        monto={fakeTransaction.monto}
        fecha={fakeTransaction.fecha}
      />
    ).text();
    expect(componentText).toContain(fakeTransaction.tienda);
    expect(componentText).toContain(fakeTransaction.monto);
    expect(componentText).toContain(fakeTransaction.fecha);
  });
});
