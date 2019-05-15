import axios from 'axios';
import qs from 'querystring';
import session from '../store/session';


const MSG_RETRY_NETWORK = 'Check your network connection and try again.';
const MSG_SERVER_ERR = 'Something went wrong, Please try again later.';

const API_HOST = 'http://localhost:3000';


class RequestError extends Error {
  constructor(ex, ...args) {
    super(...args)

    this.exception = ex;
    Error.captureStackTrace(this, RequestError)
  }
};

export default class Endpoint {
  constructor(endpoint) {
    this.endpoint = `${API_HOST}/api${endpoint || ''}`;
  }

  fetch = async (node='', method='get', data=null, conf={}) => {
    const endpoint = this.endpoint + node;

    const config = Object.assign({}, {
      url: endpoint,
      method: method
    }, conf);

    if (method == 'get' && data) {
      config['params'] = data;
    }

    const headers = {};

    if (conf.isJson) {
      headers['Content-Type'] = 'application/json';
    }

    if (method != 'get') {
      config['data'] = conf.isJson ? data : qs.stringify(data);
    }


    const token = session.token;

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    config['headers'] = headers;

    try {
      const response = await axios.request(config);
      const data = response.data;
      const err = (response.status != 200 ? new Error(data.message) : null);

      return [data, err];
    } catch (err) {
      console.error(`request failed on endpoint ${endpoint}`)
      return [null, ErrorHandler(err)];
    }
  }

  async get(node, data) {
    return this.fetch(node, 'get', data)
  }

  async post(node, data, config) {
    return this.fetch(node, 'post', data, config)
  }

  async put(node, data, config) {
    return this.fetch(node, 'put', data, config)
  }

  async patch(node, data) {
    return this.fetch(node, 'patch', data)
  }

  async delete(node) {
    return this.fetch(node, 'delete')
  }
}


export const ErrorHandler = (err) => {
  const message = err.response ? err.response.data.message || MSG_SERVER_ERR : MSG_RETRY_NETWORK;
  return new RequestError(err, message)
};
