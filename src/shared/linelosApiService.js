import { linelosApiUrl } from "../../app.config";
import axios from "axios";
import { redirect } from "./utils";

const gmailSearchQuery = "from:(notificaciones@infopacificard.com.ec) pacificard: consumos";
const loginMessage = `Primero debes iniciar sesión en Google.\n
Pulsa Aceptar para ir a la pantalla de inicio de sesión o Cancelar para retroceder`;

const getTransactions = () =>
  axios
    .get(`${linelosApiUrl}/transactions`, {
      params: { query: gmailSearchQuery },
      headers: { "Access-Control-Allow-Origin": "*" },
      withCredentials: true
    })
    .then(response => response.data.transacciones)
    .catch(error => {
      if (
        error.response &&
        error.response.status === 403 &&
        error.response.data.location &&
        confirm(loginMessage)
      ) {
        redirect(error.response.data.location);
      } else {
        console.error(`An error occured while trying to fetch data from Linelos Api:\n${error}`);
        throw error;
      }
    });

export { getTransactions };
