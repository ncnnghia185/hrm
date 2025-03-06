import jwt from "jsonwebtoken";
import configEnv from "../configs/env.config";
const SECRET_KEY = configEnv.jwt_secret;


const generateAccessToken = (accountId: string, roles: string[], permissions: string[] = []) => {
  return jwt.sign({ id: accountId, roles, permissions }, SECRET_KEY, { expiresIn: "30m" });
};

const generateRefreshToken = (accountId: string) => {
  return jwt.sign({ id: accountId }, SECRET_KEY, { expiresIn: "1d" });
}

export { generateAccessToken, generateRefreshToken };

