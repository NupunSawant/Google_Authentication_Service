import queryString from "query-string";
import axios from "axios";
import jwt from "jsonwebtoken";
import config from "../config/oauth.js";

export const getAuthUrl = () => {
  const params = queryString.stringify({
    client_id: config.clientId,
    redirect_uri: config.redirectUrl,
    response_type: "code",
    scope: "openid profile email",
    access_type: "offline",
    prompt: "consent",
  });

  return `${config.authUrl}?${params}`;
};

export const exchangeCodeForUser = async (code) => {
  const params = queryString.stringify({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    code,
    grant_type: "authorization_code",
    redirect_uri: config.redirectUrl,
  });

  const {
    data: { id_token },
  } = await axios.post(`${config.tokenUrl}?${params}`);

  if (!id_token) throw new Error("No id_token received");

  const { email, name, picture } = jwt.decode(id_token);
  return { email, name, picture };
};
