import axios from "axios";

const apiUrl = "http://ec2-18-221-97-203.us-east-2.compute.amazonaws.com";
const gmailSearchQuery =
  "from:(notificaciones@infopacificard.com.ec)%20pacificard:%20consumos";

const getTransactions = () =>
  axios
    .get(`${apiUrl}/transactions`, { params: { query: gmailSearchQuery } })
    .then(response => response.data.transacciones)
    .catch(error => {
      console.error(
        `An error occured while trying to fetch data from Linelos Api:\n${error}`
      );
      throw error;
    });

export { getTransactions };
