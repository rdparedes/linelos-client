import { mount, configure } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import App from "../../src/components/app";
import Transaction from "../../src/components/transaction";

configure({ adapter: new Adapter() });

describe("Index", () => {
  it("renders an App component", () => {
    let fakeTransactions = [
      {
        tienda: "STORE 1",
        monto: 2.99,
        fecha: "2017"
      },
      {
        tienda: "STORE 2",
        monto: 1.0,
        fecha: "2018"
      }
    ];
    const wrapper = mount(
      <App transactions={fakeTransactions} fetchDataEvent={() => null} />
    );
    expect(wrapper.find(Transaction).length).toEqual(2);
    expect(wrapper.text()).toContain(fakeTransactions[0].tienda);
    expect(wrapper.text()).toContain(fakeTransactions[1].fecha);
  });
});
