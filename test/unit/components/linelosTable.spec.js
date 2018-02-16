import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LinelosTable from "../../../src/components/linelosTable";
import Transaction from "../../../src/components/transaction";

configure({ adapter: new Adapter() });

describe("LinelosTable", () => {
  it("renders a Record for each element in records prop", () => {
    const fakeTransactions = [{ fecha: "1" }, { fecha: "2" }];
    const component = shallow(<LinelosTable transactions={fakeTransactions} />);
    expect(component.find(Transaction).length).toEqual(fakeTransactions.length);
  });
});
