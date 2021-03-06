import axios from "axios";
import MockAdapter from "axios-mock-adapter";
jest.mock("../../../src/shared/utils", () => ({
  redirect: jest.fn()
}));
import { getTransactions } from "../../../src/shared/linelosApiService";
import { redirect } from "../../../src/shared/utils";

describe("linelosApiService", () => {
  let axiosMock = new MockAdapter(axios);

  beforeAll(() => {
    global.window.confirm = () => true;
  });

  beforeEach(() => {
    axiosMock.reset();
  });

  it("returns a list of transactions when a request to linelos api is successful", done => {
    const fakeTransactions = [
      {
        tienda: "SOME STORE",
        monto: 1.52,
        fecha: "2018"
      }
    ];
    axiosMock.onGet(/.*transactions.*/).reply(200, { transacciones: fakeTransactions });
    getTransactions().then(r => {
      expect(r).toEqual(fakeTransactions);
      done();
    });
  });

  it("redirects to google authentication site when linelos api response is 403 with location data", () => {
    axiosMock.onGet(/.*transactions.*/).reply(403, { location: "some-url" });
    getTransactions().then(r => {
      expect(redirect).toHaveBeenCalledWith("some-url");
    });
  });
});
