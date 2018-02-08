import React from "react";
import LinelosTable from "../../src/components/linelosTable";
import Record from "../../src/components/record";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("LinelosTable", () => {
  it("renders a Record for each element in records prop", () => {
    const fakeRecords = [{}, {}];
    const component = shallow(<LinelosTable records={fakeRecords} />);
    expect(component.find(Record).length).toEqual(fakeRecords.length);
  });
});
