const env = process.env;

let linelosApiUrl = "http://localhost:3478";

if (env.PRODUCTION) {
  linelosApiUrl = "http://ec2-18-221-97-203.us-east-2.compute.amazonaws.com";
}

export { linelosApiUrl };
