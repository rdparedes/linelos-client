import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getTransactions } from "../../src/shared/linelosApiService";

describe("linelosApiService", () => {
  let axiosMock = new MockAdapter(axios);

  beforeEach(() => {
    axiosMock.reset();
  });

  it("returns a list of transactions when a request to linelos api is successful", done => {
    const fakeTransactions = [
      {
        tienda: "STREAT BURGER",
        monto: 31.52,
        fecha: "2018-02-09T16:50:00Z"
      }
    ];
    axiosMock
      .onGet(/.*transactions.*/)
      .reply(200, { transacciones: fakeTransactions });
    getTransactions().then(r => {
      expect(r).toEqual(fakeTransactions);
      done();
    });
  });
});
