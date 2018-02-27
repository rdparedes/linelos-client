const env = process.env;

let linelosApiUrl = "http://localhost:3478";

if (env.PRODUCTION) {
  linelosApiUrl = "https://linelos.herokuapp.com";
}

export { linelosApiUrl };
