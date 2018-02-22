const processEnv = typeof process !== "undefined" && process.env.ENVIRONMENT;
const windowEnv = typeof window !== "undefined" && window.env && window.env.ENVIRONMENT;

const env = processEnv || windowEnv;

let linelosApiUrl = "http://localhost:3478";

if (env === "production") {
  linelosApiUrl = "http://ec2-18-221-97-203.us-east-2.compute.amazonaws.com";
}

export { linelosApiUrl };
