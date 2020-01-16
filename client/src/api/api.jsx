import axios from 'axios';
import { API_ROOT } from './api.conf';
//import { setToken } from './interceptors';

class API {
  http;
  constructor() {
    axios.defaults.baseURL = API_ROOT;
    //setToken();
    this.http = axios;
  }

  getHelp = () => this.http.get(`GetHelp`);
}

export default new API();
