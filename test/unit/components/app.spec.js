import { shallow, configure } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import App from "../../../src/components/app";
import LinelosTable from "../../../src/components/linelosTable";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders LinelosTable when data exists", () => {
    const wrapper = shallow(
      <App transactions={[{}]} fetchDataEvent={() => null} />
    );
    wrapper.find("button").simulate("click");
    wrapper.update();
    expect(wrapper.find(LinelosTable).length).toEqual(1);
  });

  it("renders a message when no data exists", () => {
    const expectedMessage = "No hay datos";
    const wrapper = shallow(
      <App transactions={[]} fetchDataEvent={() => null} />
    );
    wrapper.find("button").simulate("click");
    wrapper.update();
    expect(wrapper.find(LinelosTable).length).toEqual(0);
    expect(wrapper.text()).toContain(expectedMessage);
  });
});
