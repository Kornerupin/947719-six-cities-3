import axios from 'axios';
import { ConnectionSettings } from "./consts";

export const createAPI = () => {
  const api = axios.create({
    baseURL: ConnectionSettings.URL,
    timeout: ConnectionSettings.TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (error) => {
    throw error
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
