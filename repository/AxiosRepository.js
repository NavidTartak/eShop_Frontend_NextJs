import axios from "axios";
import ServerConfig from "../configuration/ServerConfig.json";
export const GET = (url) => {
  return axios.get(`${ServerConfig.SERVER_ADDRESS}${url}`);
};
