import jwt from "jsonwebtoken";
// import config from "../config/config.env";
// const SECRET_KEY = config.jwt_secret;
const SECRET_KEY = "SECRET_KEY"

const generateAccessToken = (accountId: string) => {
  return jwt.sign({ id: accountId }, SECRET_KEY, { expiresIn: "30m" });
};

const generateRefreshToken = (accountId: string) => {
  return jwt.sign({ id: accountId }, SECRET_KEY, { expiresIn: "1d" });
}

export { generateAccessToken, generateRefreshToken };

