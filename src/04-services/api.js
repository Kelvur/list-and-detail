// Core
import axios from 'axios';


const API_BASE_DOMAIN = process.env.API_BASE_DOMAIN || 'https://pokeapi.co/api/v2';

export const serviceCall = (method, url, params, data, headers, api) => axios({
  method,
  url: `${api || API_BASE_DOMAIN}${url}`,
  params,
  data,
  headers,
});

export const get = (url, params, headers, api) => serviceCall('GET', url, params, undefined, headers, api);

export const post = (url, data, params, headers, api) => serviceCall('POST', url, params, data, headers, api);

export const put = (url, data, params, headers, api) => serviceCall('PUT', url, params, data, headers, api);

